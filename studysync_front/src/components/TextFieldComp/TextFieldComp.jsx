import { StyledTextField } from "./TextFieldComp.style";

const TextFieldComp = ({ inputLabel, inputValue, handleIChange, inputName, type = "text" }) => {
  return (
    <StyledTextField
      variant="filled"
      fullWidth
      label={inputLabel}
      value={inputValue}
      onChange={handleIChange}
      name={inputName}
      type={type}
    />
  );
};

export default TextFieldComp;
