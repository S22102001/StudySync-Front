// src/components/TextFieldComp/TextFieldComp.jsx

import { StyledTextField } from "./TextFieldComp.style";

// Reusable styled input component with support for validation messages
const TextFieldComp = ({
  inputLabel,
  inputValue,
  handleIChange,
  inputName,
  type = "text",
  error = false,
  helperText = "",
}) => {
  return (
    <StyledTextField
      variant="filled"
      fullWidth
      label={inputLabel}
      value={inputValue}
      onChange={handleIChange}
      name={inputName}
      type={type}
      error={error}           // MUI error state
      helperText={helperText} // Validation message below the field
    />
  );
};

export default TextFieldComp;
