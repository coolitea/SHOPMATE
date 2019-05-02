import * as React from "react";
import { IoIosClose } from "react-icons/io";
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
        <div className="close">
          <IoIosClose onClick={this.props.onClose} className="x" />
        </div>
        <div className="modal">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
