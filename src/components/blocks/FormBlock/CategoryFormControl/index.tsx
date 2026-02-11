import * as React from "react";
import classNames from "classnames";

export default function CategoryFormControl(props) {
  const {
    name,
    label,
    hideLabel,
    isRequired,
    options = [],
    width = "full",
    placeholder,
  } = props;

  const fieldPath = props["data-sb-field-path"];

  return (
    <div
      className={classNames("sb-form-control", "w-full", {
        "sm:w-formField": width === "1/2",
      })}
      data-sb-field-path={fieldPath}
    >
      {label && (
        <label
          className={classNames("sb-label", { "sr-only": hideLabel })}
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <select
        id={name}
        name={name}
        required={isRequired}
        defaultValue=""
        className="
          sb-input
          w-full
          py-3
          bg-transparent
          border-b-2 border-white/50
          focus:gray-800
          text-gray-300
          focus:outline-none
        "
      >
        <option value="" disabled className="text-black">
          {placeholder || "Select Category"}
        </option>

        {options.map((opt, index) => (
          <option key={index} value={opt.value} className="text-black">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
