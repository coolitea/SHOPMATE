import * as React from "react";
import cn from "classnames";
import "./Input.scss";

interface InputProps {
  className?: string;
  type: string;
  placeholder: string;
  id?: string;
  changeInput: (num: number, e: { target: HTMLInputElement }) => void;
  valCheck: (num: number, e: { target: HTMLInputElement }) => void;
  num: number;
}

const Input: React.SFC<InputProps> = ({
  className,
  type,
  placeholder,
  id,
  changeInput,
  valCheck,
  num,
  ...rest
}: InputProps) => {
  const processedClass = cn("input", className);
  return (
    <input
      className={processedClass}
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={e => changeInput(num, e)}
      onBlur={e => valCheck(num, e)}
      {...rest}
    />
  );
};

export default Input;
