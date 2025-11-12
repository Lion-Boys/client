import { Field } from "formik";
import FormField from "./FormField";
import { formInputStyles } from "./styles";

type TextInputProps = React.ComponentProps<"input"> & {
    label?: string;
    error?: string;
    required?: boolean;
};

export default function TextInput({
    className,
    label,
    error,
    required,
    type = "text",
    ...props
}: TextInputProps) {
    return (
        <FormField label={label} error={error} required={required} htmlFor={props.id}>
            <Field
                as="input"
                autoComplete="off"
                type={type}
                className={formInputStyles(!!error, className)}
                {...props}
            />
        </FormField>
    );
}
