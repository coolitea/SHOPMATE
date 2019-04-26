import * as React from "react";
import "./MainTemplate.scss";

interface Props {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({ children, footer, header }) => (
  <div className="page-template">
    {header}
    <main>{children}</main>
    {footer}
  </div>
);

export default PageTemplate;
