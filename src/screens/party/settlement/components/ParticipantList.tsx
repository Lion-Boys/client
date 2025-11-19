import type { Participant } from "../types";
import CancelCircleButton from "@/components/CancelCircleButton";

type ParticipantListProps = {
    participants: Participant[];
    onAmountChange: (id: string, value: string) => void;
    onResetAmount: (id: string) => void;
    formatNumber: (value: string) => string;
};

export default function ParticipantList({
    participants,
    onAmountChange,
    onResetAmount,
    formatNumber,
}: ParticipantListProps) {
    if (participants.length === 0) {
        return (
            <p className="py-6 text-center font-text-base-16_regular text-grey-500">
                아직 정산 예정 명단이 없습니다.
            </p>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {participants.map((participant) => {
                const formattedAmount = formatNumber(participant.amount.toString());
                const digitCount = formattedAmount.replace(/,/g, "").length;
                const commaCount = formattedAmount.length - digitCount;
                const widthCh = Math.max(digitCount + commaCount * 0.35, 1);
                return (
                    <div key={participant.id} className="flex items-center justify-between gap-4 py-1">
                        <p className="font-text-base-16_medium text-grey-900_text">{participant.name}</p>
                        <div className="flex items-center gap-3">
                            <div className="inline-flex items-baseline whitespace-nowrap">
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    min={0}
                                    value={formattedAmount}
                                    onChange={(e) =>
                                        onAmountChange(
                                            participant.id,
                                            e.target.value.replace(/[^0-9]/g, "").slice(0, 11)
                                        )
                                    }
                                    className="bg-transparent text-right font-text-base-16_medium text-grey-900_text focus:outline-none p-0 tabular-nums"
                                    style={{ width: `${widthCh}ch` }}
                                />
                                <span className="font-text-base-16_medium text-grey-900_text tracking-[-0.02em] tabular-nums">
                                    원
                                </span>
                            </div>
                            <CancelCircleButton
                                ariaLabel={`${participant.name} 금액 초기화`}
                                size={14}
                                className="shrink-0"
                                onClick={() => onResetAmount(participant.id)}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
