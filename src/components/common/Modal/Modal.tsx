import * as React from "react";
import "./Modal.scss";

interface Props {
  show: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

class Modal extends React.Component<Props> {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="modal">{this.props.children}</div>
        <div className="footer">
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
