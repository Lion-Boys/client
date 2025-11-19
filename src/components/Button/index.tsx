type ButtonProps = React.ComponentProps<"button"> & {
    label: string;
    bottompadding?: boolean;
    variant?: ButtonVariant;
    style?: ButtonStyle;
};

type ButtonVariant = "default" | "large";
type ButtonStyle = "filled" | "outline";

export default function Button({
    label,
    bottompadding = false,
    variant = "default",
    style = "filled",
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`${variant === "large" ? "w-full h-14" : "min-w-42 h-13"}
                ${
                    style === "filled"
                        ? "bg-primary-blue disabled:bg-grey-200 text-grey-50"
                        : "bg-white border border-primary-blue text-primary-blue"
                } px-4 disabled:text-grey-400 disabled:cursor-not-allowed rounded-xl cursor-pointer
                font-text-lg-18_semibold
                ${bottompadding && "mb-8"} ${className}`}
            {...props}
        >
            {label}
        </button>
    );
}
