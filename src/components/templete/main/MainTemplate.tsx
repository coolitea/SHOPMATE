import * as React from 'react';
import './MainTemplate.scss';

interface Props {
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({ children, footer }) => (
  <div className="page-template">
    <main>{children}</main>
    {footer}
  </div>
);

export default PageTemplate;