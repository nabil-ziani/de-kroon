import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ReactNode, useState } from 'react';
import { Listbox } from '@headlessui/react';

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
}

interface Section {
    title: string;
    fields: Field[];
}

interface Props<T extends z.ZodType> {
    schema: T;
    onSubmit: (data: z.infer<T>) => void;
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
            hint
        } = field;

        const error = form.formState.errors[name]?.message as string;
        const baseInputClasses = `${inputClassName} ${error ? 'border-red-500' : ''}`;
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
                }}
                className="w-5 h-5 rounded border-gray-300 focus:ring-0"
            />
        ) : type === 'select' ? (
            <div className="relative">
                <Listbox
                    value={form.getValues(name) || ''}
                    onChange={(value) => {
                        form.setValue(name, value, { shouldValidate: true });
                        form.trigger(name);
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
                                    `relative cursor-pointer select-none py-3 px-4 ${active ? 'bg-crown/5 text-crown' : 'text-gray-800'
                                    }`
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

                {hint && !error && (
                    <p className={hintClassName}>{hint}</p>
                )}

                {error && (
                    <p className="mt-1 text-sm text-red-500">{error}</p>
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
        <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
            {sections ? (
                sections.map((section, index) => (
                    <div key={index} className={sectionClassName}>
                        <h3 className={sectionTitleClassName}>{section.title}</h3>
                        {renderFields(section.fields)}
                    </div>
                ))
            ) : (
                fields && renderFields(fields)
            )}

            <button type="submit" className={submitClassName}>
                {submitLabel}
            </button>
        </form>
    );
}