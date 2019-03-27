import * as React from 'react';
import cn from 'classnames';
import './Input.scss';

interface InputProps {
  className?: string;
  type: string;
  placeholder: string;
  id?: string;
}

const Input: React.SFC<InputProps> = ({
  className,
  type,
  placeholder,
  id,
  ...rest
}: InputProps) => {
  const processedClass = cn('input', className);
  return (
    <input
      className={processedClass}
      type={type}
      placeholder={placeholder}
      id={id}
      {...rest}
    />
  );
};

export default Input;