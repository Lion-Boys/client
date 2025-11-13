import RowRecordItem from "@/components/RowRecordItem";

type RoundSummaryProps = {
    kv: Record<string, string>;
};

export default function RoundSummary({ kv }: RoundSummaryProps) {
    return (
        <div className="w-full flex flex-col gap-3">
            <hr className="h-px border-0 bg-grey-200" />

            <div className="w-full flex flex-col gap-3 px-5">
                {Object.entries(kv).map(([key, value]) => (
                    <RowRecordItem key={key} label={key} value={value} />
                ))}
            </div>
        </div>
    );
}
