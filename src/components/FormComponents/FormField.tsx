type FormFieldProps = {
    label?: string;
    error?: string;
    required?: boolean;
    htmlFor?: string;
    children: React.ReactNode;
};

export default function FormField({ label, error, required, htmlFor, children }: FormFieldProps) {
    return (
        <div className="flex flex-col w-full">
            {label && (
                <div className="flex mb-2">
                    <label
                        htmlFor={htmlFor}
                        className="font-text-base-16_semibold text-grey-800 select-none"
                    >
                        {label}
                    </label>
                    {required && (
                        <span className="font-text-base-16_medium text-error select-none">*</span>
                    )}
                </div>
            )}

            {children}

            {error && (
                <p className="font-text-xs-12_regular text-error mr-3 mt-1.5 select-none">
                    {error}
                </p>
            )}
        </div>
    );
}
