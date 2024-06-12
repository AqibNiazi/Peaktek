import React from "react";

const Input = ({
  className,
  label,
  type = "text",
  placeholder,
  id,
  value,
  onChange,
  applyMarginBottom = false,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={id}
        className={`block w-full text-sm font-medium text-gray-900 ${
          applyMarginBottom ? "mb-2" : ""
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-gray-50 hover:bg-white outline-none border border-gray-300 hover:border-[0.5px] hover:border-blue-500 text-gray-900 text-sm rounded-md block w-full p-2.5 focus:outline-none focus:border-blue-500`}
      />
    </div>
  );
};

export default Input;
