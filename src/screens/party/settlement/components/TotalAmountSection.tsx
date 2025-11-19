import CancelCircleButton from "@/components/CancelCircleButton";

type TotalAmountSectionProps = {
    label?: string;
    amountInput: string;
    formatNumber: (value: string) => string;
    onChange: (value: string) => void;
    onBlur: () => void;
    onClear: () => void;
};

export default function TotalAmountSection({
    label = "총 금액",
    amountInput,
    formatNumber,
    onChange,
    onBlur,
    onClear,
}: TotalAmountSectionProps) {
    const formattedAmount = amountInput === "" ? "" : formatNumber(amountInput);
    const digitCount = formattedAmount.replace(/,/g, "").length;
    const commaCount = formattedAmount.length - digitCount;
    const widthCh = Math.max(digitCount + commaCount * 0.35, 1);

    return (
        <section className="flex flex-col gap-2">
            <p className="font-text-base-16_medium text-grey-600">{label}</p>
            <div className="flex items-center w-full min-w-0">
                <div className="inline-flex items-baseline whitespace-nowrap">
                    <input
                        type="text"
                        inputMode="numeric"
                        value={formattedAmount}
                        onChange={(e) => onChange(e.target.value)}
                        onBlur={onBlur}
                        placeholder="0"
                        className="bg-transparent border-none text-left text-[40px] leading-[52px] tracking-[-0.02em] font-semibold text-grey-900_text focus:outline-none focus:border-none p-0 tabular-nums"
                        style={{ width: `${widthCh}ch` }}
                    />
                    <span className="text-[40px] leading-[52px] tracking-[-0.02em] font-semibold text-grey-900_text tabular-nums">
                        원
                    </span>
                </div>
                <CancelCircleButton
                    onClick={onClear}
                    ariaLabel="총 금액 초기화"
                    size={22.91}
                    className="shrink-0 ml-auto"
                />
            </div>
        </section>
    );
}
