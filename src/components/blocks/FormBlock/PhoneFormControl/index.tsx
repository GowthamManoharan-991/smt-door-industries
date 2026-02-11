import * as React from "react";
import classNames from "classnames";

export default function PhoneFormControl(props) {
  const {
    name,
    label,
    hideLabel,
    isRequired,
    placeholder,
    width = "full",
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

      <div className="flex items-center border-b-2 border-white/50">
        {/* Prefix */}
        <span className="text-gray-300 pr-3 select-none whitespace-nowrap">+91</span>
        {/* Divider space (optional visual gap) */}
        <span className="text-gray-300 pr-3 select-none">|</span>


      <input
        id={name}
        name={name}
        type="tel"
        inputMode="numeric"
        maxLength={10}
        pattern="[0-9]{10}"
        placeholder={placeholder || "Mobile Number"}
        required={isRequired}
        className="
          sb-input
          w-full
          py-3
          bg-transparent
          
          text-white
          caret-white
          focus:outline-none
        "
        onInput={(e) => {
          e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
        }}
      />
    </div>
    </div>
  );
}
