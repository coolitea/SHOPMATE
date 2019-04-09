import * as React from 'react';
import './Button.scss';

interface Props {
  size: string;
  activeSize: string;
  onClick: (size: string) => void;
}

const Button: React.SFC<Props> = ({
  size,
  activeSize,
  onClick,
}) => (
  <div
    className={ size === activeSize ? "size-button active": "size-button"}
    onClick={() => onClick(size)}
  >
    {size}
  </div>
);

export default Button;