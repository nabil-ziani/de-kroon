import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import React, { ReactNode, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { FaSpinner } from 'react-icons/fa';

interface Field {
    label: string;
    name: string;
    type: 'text' | 'email' | 'tel' | 'date' | 'textarea' | 'checkbox' | 'select';
    placeholder?: string;
    required?: boolean;
    gridCols?: number;
    options?: { value: string; label: string }[];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    labelPosition?: 'left' | 'right';
    hint?: string;
    disabled?: boolean;
}

interface Section {
    title: string;
    fields: Field[];
    hint?: string;
}

interface Props<T extends z.ZodType> {
    schema: T;
    onSubmit: (data: z.infer<T>) => void;
    onFieldChange?: (name: string, value: any) => void;
    formRef?: (ref: any) => void;
    sections?: Section[];
    fields?: Field[];
    defaultValues?: Partial<z.infer<T>>;
    submitLabel?: ReactNode;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    submitClassName?: string;
    gridClassName?: string;
    sectionClassName?: string;
    sectionTitleClassName?: string;
    hintClassName?: string;
}

export function Form<T extends z.ZodType>({
    schema,
    onSubmit,
    onFieldChange,
    formRef,
    sections,
    fields,
    defaultValues,
    submitLabel = 'Submit',
    className = '',
    inputClassName = '',
    labelClassName = '',
    submitClassName = '',
    gridClassName = '',
    sectionClassName = '',
    sectionTitleClassName = '',
    hintClassName = '',
}: Props<T>) {
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as any,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Expose form methods to parent
    React.useEffect(() => {
        if (formRef) {
            formRef(form);
        }
    }, [form, formRef]);

    const handleSubmit = async (data: z.infer<T>) => {
        setIsSubmitting(true);
        try {
            await onSubmit(data);
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderField = (field: Field) => {
        const {
            label,
            name,
            type,
            placeholder,
            required,
            gridCols,
            options,
            onChange,
            className = '',
            labelPosition = 'left',
            hint,
            disabled
        } = field;

        // Get nested error (for parent fields)
        const fieldPath = name.split('.');
        let error = form.formState.errors;
        for (const path of fieldPath) {
            error = error?.[path] as any;
        }
        const errorMessage = (error as { message?: string })?.message;

        const baseInputClasses = `${inputClassName} ${errorMessage ? 'border-red-500' : ''}`;
        const gridColClass = gridCols ? `md:col-span-${gridCols}` : '';
        const fieldClassName = `${gridColClass} ${className}`;

        const inputElement = type === 'textarea' ? (
            <textarea
                {...form.register(name)}
                placeholder={placeholder}
                className={`${baseInputClasses} min-h-[100px]`}
            />
        ) : type === 'checkbox' ? (
            <input
                type="checkbox"
                {...form.register(name)}
                onChange={(e) => {
                    form.register(name).onChange(e);
                    onChange?.(e);
                    onFieldChange?.(name, e.target.checked);
                }}
                disabled={disabled}
                className="w-5 h-5 rounded border-gray-300 focus:ring-0 disabled:cursor-not-allowed"
            />
        ) : type === 'select' ? (
            <div className="relative">
                <Listbox
                    value={form.getValues(name) || ''}
                    onChange={(value) => {
                        form.setValue(name, value, { shouldValidate: true });
                        form.trigger(name);
                        onFieldChange?.(name, value);
                    }}
                >
                    <Listbox.Button className={`${baseInputClasses} w-full text-left flex items-center justify-between`}>
                        <span className={`block truncate ${!form.getValues(name) ? 'text-gray-500' : 'text-gray-800'}`}>
                            {form.getValues(name)
                                ? options?.find(opt => opt.value === form.getValues(name))?.label
                                : 'Selecteer een optie'}
                        </span>
                        <span className="pointer-events-none flex items-center">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none border border-gray-100">
                        {options?.map((option) => (
                            <Listbox.Option
                                key={option.value}
                                value={option.value}
                                className={({ active }) =>
                                    `relative cursor-pointer select-none py-3 px-4 ${active ? 'bg-crown/5 text-crown' : 'text-gray-800'}`
                                }
                            >
                                {({ selected, active }) => (
                                    <span className={`block truncate ${selected ? 'font-medium text-crown' : 'font-normal'}`}>
                                        {option.label}
                                    </span>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
        ) : (
            <input
                type={type}
                {...form.register(name)}
                placeholder={placeholder}
                onChange={(e) => {
                    form.register(name).onChange(e);
                    onFieldChange?.(name, e.target.value);
                }}
                className={baseInputClasses}
            />
        );

        return (
            <div key={name} className={fieldClassName}>
                {type === 'checkbox' ? (
                    <label className="flex items-center gap-2 cursor-pointer">
                        {labelPosition === 'left' && (
                            <span className="text-gray-700 font-medium">
                                {label}
                                {required && <span className="text-red-500 ml-1">*</span>}
                            </span>
                        )}
                        {inputElement}
                        {labelPosition === 'right' && (
                            <span className="text-gray-700 font-medium">
                                {label}
                                {required && <span className="text-red-500 ml-1">*</span>}
                            </span>
                        )}
                    </label>
                ) : (
                    <>
                        <label className={labelClassName}>
                            {label}
                            {required && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        {inputElement}
                    </>
                )}

                {hint && !errorMessage && (
                    <p className={hintClassName}>{hint}</p>
                )}

                {errorMessage && (
                    <p className="mt-1 text-sm text-red-500">{String(errorMessage)}</p>
                )}
            </div>
        );
    };

    const renderFields = (fields: Field[]) => (
        <div className={gridClassName}>
            {fields.map(renderField)}
        </div>
    );

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className={className} noValidate>
            {sections ? (
                sections.map((section, index) => {
                    // Get root error for parent sections
                    const sectionName = section.title === 'Gegevens vader' ? 'father' : section.title === 'Gegevens moeder' ? 'mother' : '';
                    const rootError = sectionName ? form.formState.errors[sectionName]?.root?.message : undefined;

                    return (
                        <div key={index} className={sectionClassName}>
                            <div className="mb-6">
                                <div className="space-y-0.5">
                                    <h3 className={sectionTitleClassName}>{section.title}</h3>
                                    {rootError ? (
                                        <p className="text-sm text-red-500">{String(rootError)}</p>
                                    ) : section.hint && (
                                        <p className={hintClassName}>{section.hint}</p>
                                    )}
                                </div>
                            </div>
                            {renderFields(section.fields)}
                        </div>
                    );
                })
            ) : (
                fields && renderFields(fields)
            )}

            <button
                type="submit"
                className={submitClassName}
                disabled={isSubmitting}
            >
                <span className={`flex items-center justify-center ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                    {submitLabel}
                </span>
                {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center">
                        <FaSpinner className="w-5 h-5 animate-spin" color="white" />
                    </span>
                )}
            </button>
        </form>
    );
}