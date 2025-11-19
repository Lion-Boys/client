import { useEffect, useMemo, useState } from "react";
import { useUiStore } from "@/store";
import RoundNavigator from "./components/RoundNavigator";
import ReceiptActions from "./components/ReceiptActions";
import TotalAmountSection from "./components/TotalAmountSection";
import ParticipantList from "./components/ParticipantList";
import MissingAttendeeButton from "./components/MissingAttendeeButton";
import SettlementFooter from "./components/SettlementFooter";
import type { Participant, ParticipantTemplate, RoundInfo } from "./types";

const mockRounds: RoundInfo[] = [
    { id: "round-1", title: "1차", eventDate: "2025.10.02(목) 18:00" },
    { id: "round-2", title: "2차", eventDate: "2025.10.02(목) 20:30" },
];

const mockParticipants: ParticipantTemplate[] = [
    { id: "p-1", name: "김사자" },
    { id: "p-2", name: "박호랑" },
    { id: "p-3", name: "최곰돌" },
    { id: "p-4", name: "이토끼" },
];

const initialReceiptAmount = 0;

// 참여자 템플릿과 총 금액을 받아 초기 분배 금액을 계산
const createInitialParticipants = (
    templates: ParticipantTemplate[],
    total: number
): Participant[] => {
    if (!templates.length) return [];
    const base = Math.floor(total / templates.length);
    const remainder = total % templates.length;
    return templates.map((template, index) => ({
        ...template,
        amount: base + (index < remainder ? 1 : 0),
        isCustom: false,
    }));
};

// 커스텀 금액을 제외한 나머지 인원에게 총액을 균등 분배
const redistributeAutoAmounts = (participants: Participant[], total: number) => {
    const autoParticipants = participants.filter((p) => !p.isCustom);
    const customParticipants = participants.filter((p) => p.isCustom);
    const autoCount = autoParticipants.length;
    if (!autoCount) return participants;
    const customTotal = customParticipants.reduce((sum, participant) => sum + participant.amount, 0);
    const distributable = Math.max(total - customTotal, 0);
    const base = Math.floor(distributable / autoCount);
    const remainder = distributable % autoCount;

    let assigned = 0;
    return participants.map((participant) => {
        if (participant.isCustom) return participant;
        const extra = assigned < remainder ? 1 : 0;
        assigned += 1;
        return {
            ...participant,
            amount: base + extra,
            isCustom: false,
        };
    });
};

export default function Settlement() {
    const updateHeader = useUiStore((s) => s.updateHeader);
    const [roundIndex, setRoundIndex] = useState(0);
    const [receiptAmount, setReceiptAmount] = useState(initialReceiptAmount);
    const [receiptAmountInput, setReceiptAmountInput] = useState("0");
    const [participants, setParticipants] = useState<Participant[]>(() =>
        createInitialParticipants(mockParticipants, initialReceiptAmount)
    );

    useEffect(() => {
        updateHeader("정산하기", "정산하기");
    }, [updateHeader]);

    const currentRound = mockRounds[roundIndex];

    const totalFromParticipants = useMemo(
        () => participants.reduce((sum, participant) => sum + participant.amount, 0),
        [participants]
    );

    const displayTotal = receiptAmount.toLocaleString("ko-KR");

    const handleSwitchRound = (direction: "prev" | "next") => {
        setRoundIndex((prev) => {
            if (direction === "prev") {
                return prev === 0 ? mockRounds.length - 1 : prev - 1;
            }
            return prev === mockRounds.length - 1 ? 0 : prev + 1;
        });
    };

    // 총 금액 입력 핸들러
    const handleReceiptAmountChange = (value: string) => {
        const digitsOnly = value.replace(/[^0-9]/g, "").slice(0, 11);
        const normalized = digitsOnly.replace(/^0+(?=\d)/, "");
        const nextValue = normalized === "" ? 0 : Number(normalized);
        setReceiptAmountInput(normalized === "" ? "" : normalized);
        setReceiptAmount(nextValue);
        setParticipants((prev) => redistributeAutoAmounts(prev, nextValue));
    };

    const handleReceiptAmountBlur = () => {
        if (receiptAmountInput === "") {
            setReceiptAmountInput("0");
        }
        setParticipants((prev) => redistributeAutoAmounts(prev, receiptAmount));
    };

    const handleClearReceipt = () => {
        setReceiptAmount(0);
        setReceiptAmountInput("0");
        setParticipants((prev) => redistributeAutoAmounts(prev, 0));
    };

    // 특정 참여자 금액을 수동 입력할 때 호출
    const handleAmountChange = (id: string, rawValue: string) => {
        const sanitized = rawValue.replace(/[^0-9]/g, "").slice(0, 11);
        const parsedValue = Number(sanitized);
        setParticipants((prev) => {
            const updated = prev.map((participant) =>
                participant.id === id
                    ? {
                          ...participant,
                          amount: Math.max(Number.isNaN(parsedValue) ? 0 : parsedValue, 0),
                          isCustom: true,
                      }
                    : participant
            );
            return redistributeAutoAmounts(updated, receiptAmount);
        });
    };
    const handleParticipantReset = (id: string) => {
        setParticipants((prev) => {
            const updated = prev.map((participant) =>
                participant.id === id
                    ? {
                          ...participant,
                          amount: 0,
                          isCustom: true,
                      }
                    : participant
            );
            return redistributeAutoAmounts(updated, receiptAmount);
        });
    };
    const formatNumberWithComma = (value: string) => {
        if (value === "") return "";
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleAddRound = () => alert("차수 추가 기능은 준비 중입니다.");
    const handleScanReceipt = () => alert("영수증 스캔 기능은 목업입니다.");
    const handleUploadPhoto = () => alert("사진 업로드 기능은 목업입니다.");
    const handleMissingAttendeeClick = () => alert("누락 인원 추가 기능은 목업입니다.");
    const handleStartSettlement = () =>
        alert(`총 금액 ${displayTotal}원으로 정산을 시작합니다. (Mock 데이터)`);

    return (
        <div className="flex flex-col h-full pt-8 pb-8 max-w-xl mx-auto">
            <RoundNavigator
                title={currentRound.title}
                onPrev={() => handleSwitchRound("prev")}
                onNext={() => handleSwitchRound("next")}
                onAddRound={handleAddRound}
            />

            <div className="mt-6">
                <ReceiptActions
                    onScanReceipt={handleScanReceipt}
                    onUploadPhoto={handleUploadPhoto}
                />
            </div>

            <div className="mt-6">
                <TotalAmountSection
                    amountInput={receiptAmountInput}
                    formatNumber={formatNumberWithComma}
                    onChange={handleReceiptAmountChange}
                    onBlur={handleReceiptAmountBlur}
                    onClear={handleClearReceipt}
                />
            </div>

            <hr className="h-px border-0 bg-grey-200 mt-3 mb-6" />

            <div className="card-designed px-5 py-5 flex flex-col gap-9">
                <div className="flex items-center justify-between">
                    <p className="font-text-lg-18_semibold text-grey-900_text">정산예정 명단</p>
                    <button type="button" onClick={() => alert("총무 추가 기능은 준비 중입니다.")} className="font-text-sm-14_semibold text-primary-blue">
                        총무추가
                    </button>
                </div>

                <ParticipantList
                    participants={participants}
                    onAmountChange={handleAmountChange}
                    onResetAmount={handleParticipantReset}
                    formatNumber={formatNumberWithComma}
                />
            </div>

            <MissingAttendeeButton onClick={handleMissingAttendeeClick} />

            <SettlementFooter
                totalFromParticipants={totalFromParticipants}
                onStartSettlement={handleStartSettlement}
            />
        </div>
    );
}
