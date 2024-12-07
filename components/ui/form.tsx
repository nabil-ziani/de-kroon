import { DefaultValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import React from 'react';

interface FormFieldProps {
    label: string;
    name: string;
    type: 'text' | 'email' | 'tel' | 'textarea' | 'date' | 'select';
    placeholder?: string;
    required?: boolean;
    options?: { value: string; label: string }[];
    error?: string;
    inputClassName?: string;
    labelClassName?: string;
    gridCols?: number;
}

interface FormProps<T extends z.ZodType> {
    schema: T;
    onSubmit: (data: z.infer<T>) => void;
    fields: FormFieldProps[];
    submitLabel: React.ReactNode;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    submitClassName?: string;
    gridClassName?: string;
    defaultValues?: DefaultValues<z.infer<T>>;
}

export function FormField({
    label,
    name,
    type,
    placeholder,
    required,
    options,
    error,
    register,
    inputClassName,
    labelClassName
}: FormFieldProps & { register: any }) {
    const baseInputClasses = inputClassName || "w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-transparent focus:border-crown focus:bg-white transition-all duration-300 outline-none";
    const errorClasses = error ? "!border-red-500 bg-red-50 focus:!border-red-500" : "";
    const labelClasses = labelClassName || "block text-gray-700 text-sm font-semibold mb-2";

    const registerOptions = {
        ...register(name)
    };

    return (
        <div className="mb-6">
            <label className={labelClasses}>
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            <div className="relative">
                {type === 'textarea' ? (
                    <textarea
                        {...registerOptions}
                        placeholder={placeholder}
                        className={`${baseInputClasses} ${errorClasses} min-h-[120px]`}
                    />
                ) : type === 'select' ? (
                    <select
                        {...registerOptions}
                        className={`${baseInputClasses} ${errorClasses}`}
                    >
                        <option value="">{placeholder || 'Selecteer een optie'}</option>
                        {options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        type={type}
                        {...registerOptions}
                        placeholder={placeholder}
                        className={`${baseInputClasses} ${errorClasses}`}
                    />
                )}

                {error && (
                    <div className="transform-gpu error-message flex items-start gap-2 mt-2">
                        <FiAlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-red-500">{error}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export function Form<T extends z.ZodType>({
    schema,
    onSubmit,
    fields,
    submitLabel,
    className = "",
    inputClassName,
    labelClassName,
    submitClassName,
    gridClassName,
    defaultValues
}: FormProps<T>) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<z.infer<T>>({
        resolver: zodResolver(schema),
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues
    });

    const onSubmitWrapper = async (data: z.infer<T>) => {
        try {
            setIsSubmitting(true);
            await onSubmit(data);
            reset();
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmitWrapper)}
            className={className}
            noValidate
        >
            <div className={gridClassName}>
                {fields.map((field) => (
                    <div
                        key={field.name}
                        className={field.gridCols === 2 ? 'md:col-span-2' : ''}
                    >
                        <FormField
                            {...field}
                            register={register}
                            error={errors[field.name]?.message as string}
                            inputClassName={inputClassName}
                            labelClassName={labelClassName}
                        />
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={submitClassName}
                >
                    {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                        submitLabel
                    )}
                </button>
            </div>
        </form>
    );
}