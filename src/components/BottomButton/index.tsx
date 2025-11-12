type ButtomButtonProps = React.ComponentProps<"button"> & {
    label: string;
    bottompadding?: boolean;
};

export default function BottomButton({
    label,
    bottompadding = true,
    className,
    ...props
}: ButtomButtonProps) {
    return (
        <button
            className={`w-full px-4 h-14 bg-primary-blue disabled:bg-grey-200 disabled:text-grey-400 disabled:cursor-not-allowed rounded-xl cursor-pointer
                ${bottompadding && "mb-8"} ${className}`}
            {...props}
        >
            <span className="font-text-lg-18_semibold text-grey-50">{label}</span>
        </button>
    );
}
