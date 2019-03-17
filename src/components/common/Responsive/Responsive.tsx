import * as React from 'react';
import './Responsive.scss';
import cn from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Responsive: React.SFC<Props> = ({
  children,
  className,
  ...rest
}: Props) => (
  <div className={cn('common', 'responsive', className)} {...rest}>
    {children}
  </div>
);

export default Response;