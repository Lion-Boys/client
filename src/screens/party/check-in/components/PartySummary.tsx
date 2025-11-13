type PartySummaryProps = {
    kv: Record<string, string>;
};

export default function PartySummary({ kv }: PartySummaryProps) {
    return (
        <div className="w-full flex flex-col gap-6">
            <hr className="h-px border-0 bg-grey-200" />

            <div className="w-full flex flex-col gap-3">
                {Object.entries(kv).map(([key, value]) => (
                    <SummaryItem key={key} label={key} value={value} />
                ))}
            </div>

            <hr className="h-px border-0 bg-grey-200" />
        </div>
    );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="w-full flex items-center justify-between">
            <p className="font-text-base-16_medium text-grey-600">{label}</p>

            <p className="font-text-base-16_medium text-grey-900_text">{value}</p>
        </div>
    );
}
