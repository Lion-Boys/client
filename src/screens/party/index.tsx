import ExpandableCard from "@/components/ExpandableCard";
import SectionHeader from "@/components/SectionHeader";
import RoundSummary from "./components/RoundSummary";
import { useState } from "react";
import type { PartyRound } from "./types";

export default function Party() {
    const [partyRounds, setPartyRounds] = useState<PartyRound[]>([
        {
            title: "1차",
            host: "임도협",
            participantCount: 20,
            location: "서울 강남구 역삼동 123-45",
        },
        {
            title: "2차",
            host: "김사자",
            participantCount: 15,
            location: "서울 강남구 논현동 67-89",
        },
    ]);

    return (
        <>
            <SectionHeader
                title="장기 프로젝트 뒷풀이"
                subtitle="2025.10.02(목) 18:00"
                style="centerAccent"
            />

            <div className="w-full flex flex-col gap-4">
                {partyRounds.map((round, index) => {
                    const defaultExpanded = index === partyRounds.length - 1;
                    return (
                        <ExpandableCard
                            key={index}
                            title={round.title}
                            isExpandable
                            defaultExpanded={defaultExpanded}
                        >
                            <RoundSummary
                                kv={{
                                    주최자: round.host,
                                    참여인원: `${round.participantCount}명`,
                                    장소: round.location,
                                }}
                            />
                        </ExpandableCard>
                    );
                })}
            </div>
        </>
    );
}
