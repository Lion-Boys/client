import RowRecordItem from "@/components/RowRecordItem";

type PartySummaryProps = {
    kv: Record<string, string>;
};

export default function PartySummary({ kv }: PartySummaryProps) {
    return (
        <div className="w-full flex flex-col gap-6">
            <hr className="h-px border-0 bg-grey-200" />

            <div className="w-full flex flex-col gap-3">
                {Object.entries(kv).map(([key, value]) => (
                    <RowRecordItem key={key} label={key} value={value} />
                ))}
            </div>

            <hr className="h-px border-0 bg-grey-200" />
        </div>
    );
}
