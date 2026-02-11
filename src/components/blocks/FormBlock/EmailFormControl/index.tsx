import * as React from 'react';
import classNames from 'classnames';

export default function EmailFormControl(props) {
    const { name, label, hideLabel, isRequired, placeholder, width = 'full' } = props;
    const fieldPath = props['data-sb-field-path'];
    const labelId = `${name}-label`;
    const attr: React.InputHTMLAttributes<HTMLInputElement> = {};
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
            <input
    id={name}
    type="email"
    name={name}
    className="
        sb-input
        w-full
        py-3
        bg-transparent
        border-b-2
        border-white/50
        focus:border-white
        placeholder-white/70
        focus:outline-none

        text-white
        caret-white

        [&:focus]:text-white
        [&:-webkit-autofill]:text-white
    "
    placeholder={placeholder}
    {...attr}
/>

        </div>
    );
}
