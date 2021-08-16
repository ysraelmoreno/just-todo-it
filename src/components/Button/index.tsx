import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function Button({ children, type, ...props }: ButtonProps) {
  return (
    <ButtonContainer type={type} {...props}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
