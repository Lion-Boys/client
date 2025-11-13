import { useEffect } from "react";
import { useUiStore } from "@/store";
import SectionHeader from "@/components/SectionHeader";
import PartySummary from "./components/PartySummary";
import ParticipantForm from "./components/form/ParticipantForm";

export default function CheckIn() {
    const updateHeader = useUiStore((s) => s.updateHeader);

    useEffect(() => {
        updateHeader("참가하기");
    }, [updateHeader]);

    return (
        <>
            <SectionHeader
                title="장기 프로젝트 뒷풀이"
                subtitle="2025.10.02(목) 18:00"
                style="centerAccent"
            />

            <div className="w-full flex flex-col gap-22">
                <PartySummary
                    kv={{
                        주최자: "임도협",
                        초대인원: "NN명",
                        장소: "저기꼬치네 공릉점",
                        정산계좌: "국민 12345678910",
                    }}
                />

                <ParticipantForm />
            </div>
        </>
    );
}
