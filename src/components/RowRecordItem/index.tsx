export default function RowRecordItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="w-full flex items-center justify-between">
            <p className="font-text-base-16_medium text-grey-600">{label}</p>

            <p className="font-text-base-16_medium text-grey-900_text">{value}</p>
        </div>
    );
}
