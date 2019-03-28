import * as React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './Button.scss';

interface ButtonProps {
  className: string;
  to?: string;
  onClick?: () => void;
}

const Button: React.SFC<ButtonProps> = ({
  className,
  to,
  onClick,
  ...rest
}: ButtonProps) => {
  const processedClass = cn('button', className)
  return to ? (
    <Link className={processedClass} to={to} {...rest}/>
  ) : (
    <button className={processedClass} onClick={onClick}{...rest}/>
  );
};

export default Button;