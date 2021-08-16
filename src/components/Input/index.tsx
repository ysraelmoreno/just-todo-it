import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { InputContainer } from "./styles";

interface ComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

function Input({ children, icon: Icon, ...props }: ComponentProps) {
  return (
    <InputContainer>
      {Icon && <Icon />}
      <input {...props} />
    </InputContainer>
  );
}

export default Input;
