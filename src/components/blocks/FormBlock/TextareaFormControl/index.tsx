import * as React from 'react';
import classNames from 'classnames';

export default function TextareaFormControl(props) {
    const { name, label, hideLabel, isRequired, placeholder, width = 'full' } = props;
    const fieldPath = props['data-sb-field-path'];
    const labelId = `${name}-label`;
    const attr: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {};
    if (label) {
        attr['aria-labelledby'] = labelId;
    }
    if (isRequired) {
        attr.required = true;
    }
    if (placeholder) {
        attr.placeholder = placeholder;
    }

    return (
        <div
            className={classNames('sb-form-control', 'w-full', {
                'sm:w-formField': width === '1/2'
            })}
            data-sb-field-path={fieldPath}
        >
            {label && (
                <label
                    id={labelId}
                    className={classNames('sb-label', 'inline-block', 'sm:mb-1.5', { 'sr-only': hideLabel })}
                    htmlFor={name}
                    {...(fieldPath && { 'data-sb-field-path': '.label .name#@for' })}
                >
                    {label}
                </label>
            )}
            <textarea
    name={name}
    rows={1}
    className="
        w-full
        mt-6
        p-3
        bg-transparent
        text-white
        placeholder-gray-300
        border
        border-gray-300
        focus:border-white
        focus:outline-none
        resize-none
    "
    placeholder={placeholder}
/>

        </div>
    );
}
