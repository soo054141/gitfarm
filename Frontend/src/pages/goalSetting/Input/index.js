import React from "react";
import PropTypes from "prop-types";
import { InputWrapper } from "./style";

function Input({ placeholder, type, onChangeCallback, value }) {
  const inputType = type === 0 ? "number" : "text";
  return (
    <InputWrapper
      value={value}
      onChange={onChangeCallback}
      type={inputType}
      placeholder={placeholder}
    />
  );
}

Input.defaultProps = {
  placeholder: "입력해 주세요.",
  type: 0,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.number,
  onChangeCallback: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Input;
