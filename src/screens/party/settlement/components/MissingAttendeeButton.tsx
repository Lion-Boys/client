import { PlusCircle } from "@/components/Icons/PlusCircle";

type MissingAttendeeButtonProps = {
    onClick: () => void;
};

export default function MissingAttendeeButton({ onClick }: MissingAttendeeButtonProps) {
    return (
        <div className="flex justify-center mt-6">
            <button
                type="button"
                onClick={onClick}
                className="w-[136px] h-9 rounded-2xl bg-grey-800 flex items-center justify-center gap-1 px-3 text-white"
            >
                <PlusCircle width={18} height={18} className="text-grey-500" />
                <span className="font-text-sm-14_semibold" style={{ letterSpacing: "-0.02em" }}>
                    누락된 인원 추가
                </span>
            </button>
        </div>
    );
}
