type CompactButtonProps = React.ComponentProps<"button"> & {
    label: string;
    icon?: React.ReactNode;
    style?: CompactButtonStyle;
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
            className={`${style === "dark" ? "bg-grey-800" : "bg-grey-100"}
            px-3 py-2 disabled:cursor-not-allowed rounded-xl cursor-pointer
            flex items-center gap-1
                ${className}`}
            {...props}
        >
            {icon}
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
