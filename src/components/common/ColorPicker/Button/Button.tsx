import * as React from 'react';
import './Button.scss';

interface Props {
  color: string;
  activeColor: string;
  onClick: (color: string) => void;
}

const Button: React.SFC<Props> = ({
  color,
  activeColor,
  onClick,
}) => {
  return (
    <div
      className="color-button"
      style={{
        backgroundColor: `${color}`,
        boxShadow: `${color === activeColor ? '0px 0px 1px 1px gray' : 'none'}`,
      }}
      onClick={() => onClick(color)}
    />
  )
}
export default Button;
