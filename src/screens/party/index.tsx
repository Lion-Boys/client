import ExpandableCard from "@/components/ExpandableCard";
import SectionHeader from "@/components/SectionHeader";
import RoundSummary from "./components/RoundSummary";

export default function Party() {
    return (
        <>
            <SectionHeader
                title="장기 프로젝트 뒷풀이"
                subtitle="2025.10.02(목) 18:00"
                style="centerAccent"
            />

            <ExpandableCard title="N차" isExpandable defaultExpanded>
                <RoundSummary kv={{ 주최자: "임도협", 참여인원: "NN명", 장소: "장소장소" }} />
            </ExpandableCard>
        </>
    );
}
