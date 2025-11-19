import LeftArrow from "@/components/Icons/LeftArrow";
import RightArrow from "@/components/Icons/RightArrow";

type RoundNavigatorProps = {
    title: string;
    onPrev: () => void;
    onNext: () => void;
    onAddRound: () => void;
};

export default function RoundNavigator({ title, onPrev, onNext, onAddRound }: RoundNavigatorProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-grey-900_text">
                <RoundSwitchButton direction="prev" onClick={onPrev} />
                <p className="font-text-lg-18_semibold">{title}</p>
                <RoundSwitchButton direction="next" onClick={onNext} />
            </div>

            <button
                type="button"
                onClick={onAddRound}
                className="font-text-base-16_semibold text-primary-blue"
            >
                차수추가
            </button>
        </div>
    );
}

function RoundSwitchButton({
    direction,
    onClick,
}: {
    direction: "prev" | "next";
    onClick: () => void;
}) {
    const Icon = direction === "prev" ? LeftArrow : RightArrow;
    return (
        <button type="button" aria-label={direction === "prev" ? "이전 차수" : "다음 차수"} className="p-1" onClick={onClick}>
            <Icon width={12} height={12} className="text-grey-600" />
        </button>
    );
}
