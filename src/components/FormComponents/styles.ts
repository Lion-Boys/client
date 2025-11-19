import { cn } from "@/utils/classname";

export const formInputStyles = (error?: boolean, className?: string) =>
    cn(
        "font-text-base-16_regular w-full rounded-xl border px-4 py-3.5 outline-none transition-all duration-200",
        "appearance-none [-webkit-appearance:none] [-moz-appearance:none]",
        "placeholder:text-grey-400",
        "border-grey-200",
        !error && "focus:border-primary-blue focus:outline-none",
        error && "border-error focus:border-error focus:outline-none",
        className
    );
