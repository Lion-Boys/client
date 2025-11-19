import { cn } from "@/utils/classname";
import { Field } from "formik";
import { ChevronDown } from "lucide-react";
import FormField from "./FormField";
import { formInputStyles } from "./styles";

type TextSelectProps = React.ComponentProps<"select"> & {
    label?: string;
    error?: string;
    required?: boolean;
    options: { value: string; label: string }[];
};

export default function TextSelect({
    className,
    label,
    error,
    required = true,
    options,
    ...props
}: TextSelectProps) {
    return (
        <FormField label={label} error={error} required={required} htmlFor={props.id}>
            <div className="relative">
                <Field
                    as="select"
                    className={cn(
                        formInputStyles(!!error, className),
                        "has-[option[value='']:checked]:text-grey-700"
                    )}
                    {...props}
                >
                    <option value="" disabled hidden>
                        선택해주세요
                    </option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </Field>

                <ChevronDown
                    size={20}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-grey-700 pointer-events-none"
                />
            </div>
        </FormField>
    );
}
