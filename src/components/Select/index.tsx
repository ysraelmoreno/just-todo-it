import { SelectHTMLAttributes } from "react";
import { SelectWrapper } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  defaultValue?: string;
}

function Select({ children, defaultValue, ...props }: SelectProps) {
  return <SelectWrapper {...props}>{children}</SelectWrapper>;
}

export default Select;
