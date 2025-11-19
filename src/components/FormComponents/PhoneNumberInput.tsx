import { formatPhoneNumber } from "@/utils/phoneNumberFormatter";
import { Field, type FieldProps } from "formik";
import FormField from "./FormField";
import { formInputStyles } from "./styles";

type PhoneNumberInputProps = React.ComponentProps<"input"> & {
    label?: string;
    error?: string;
    required?: boolean;
};

export default function PhoneNumberInput({
    className,
    label,
    error,
    required,
    type = "tel",
    ...props
}: PhoneNumberInputProps) {
    return (
        <Field name={props.name}>
            {({ field, form }: FieldProps) => {
                const phoneNumberFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = e.target;
                    const numericValue = value.replace(/[^0-9]/g, "");
                    form.setFieldValue(field.name, numericValue);
                };

                return (
                    <FormField label={label} error={error} required={required} htmlFor={props.id}>
                        <input
                            {...field}
                            {...props}
                            type={type}
                            value={formatPhoneNumber(field.value)}
                            onChange={phoneNumberFilter}
                            maxLength={13}
                            className={formInputStyles(!!error, className)}
                        />
                    </FormField>
                );
            }}
        </Field>
    );
}
