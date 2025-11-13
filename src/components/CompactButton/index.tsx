type CompactButtonProps = React.ComponentProps<"button"> & {
    label: string;
    icon: React.ReactNode;
    style: CompactButtonStyle;
};

type CompactButtonStyle = "dark" | "light";

export default function CompactButton({
    label,
    icon,
    style = "dark",
    className,
    ...props
}: CompactButtonProps) {
    return (
        <button
            className={`w-full px-4 h-14 ${
                style === "dark" ? "bg-grey-800" : "bg-grey-100"
            } disabled:cursor-not-allowed rounded-xl cursor-pointer
                ${className}`}
            {...props}
        >
            <span
                className={`font-text-sm-14_semibold ${
                    style === "dark" ? "text-white" : "text-grey-800"
                }`}
            >
                {label}
            </span>
        </button>
    );
}
