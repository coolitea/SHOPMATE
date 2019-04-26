import * as React from "react";
import "./Snackbar.scss";

interface SnackbarProps {}

interface SnackbarState {}

class Snackbar extends React.PureComponent<SnackbarProps, SnackbarState> {
  state = {};
  onpenSnackBar = () => {
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 3000);
    });
  };

  render() {
    return <div className="snackbar show">please sing up</div>;
  }
}

export default Snackbar;
