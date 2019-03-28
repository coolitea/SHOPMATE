import * as React from 'react';
import { departmentAction, registerAction } from 'store/actions';
import { register } from 'store/actions/register';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { departments } from 'store/models';
import { Header } from 'components';

interface Props {
  departments: departments[],
  getDeparments: typeof departmentAction.departmentRequest;
  postRegister: ({ name, email, password }: register) => void;
}

interface HeaderState {
  name: string;
  password: string;
  email: string;
  valCheckMsg: string[];
  checkAll: boolean;
  finish: boolean;
}

class HeaderContainer extends React.Component<Props, HeaderState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      valCheckMsg: ['', '', '', ''],
      checkAll: false,
      finish: false,
    }
    this.clickRegister = this.clickRegister.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.valCheck = this.valCheck.bind(this);
  }

  changeInput = (num: number, e: { target: HTMLInputElement }) => {
    const checkMsg = [
      ...this.state.valCheckMsg.slice(0, num),
      '',
      ...this.state.valCheckMsg.slice(num + 1),
    ];
    const key = e.target.id as keyof HeaderState;
    const value = e.target.value;

    this.setState({
      ...this.state,
      valCheckMsg: checkMsg,
      [key]: value,
    });
  };

  valCheck = (num: number, e: { target: HTMLInputElement }) => {
    const checkMsg = [
        ...this.state.valCheckMsg.slice(0, num),
        '',
        ...this.state.valCheckMsg.slice(num + 1),
      ],
      emailCheck = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/,
      val = e.target.value;
    switch (num) {
      case 0:
        if (val === '') {
          checkMsg[num] = 'Please enter name';
        } else if (false) {
          checkMsg[num] = 'Please enter correct name format';
        }
        break;
      case 1:
        if (val === '') {
          checkMsg[num] = 'Please enter email';
        } else if (!emailCheck.test(val)) {
          checkMsg[num] = 'Please enter correct email format';
        }
        break;
      case 2:
        if (val === '') {
          checkMsg[num] = 'Please enter password';
        } else if (false) {
          checkMsg[num] = 'Please enter correct password format';
        }
        break;
      default:
        break;
    }
    this.setState(
      {
        valCheckMsg: checkMsg,
      },
      this.beforeRegister
    );
  };

  beforeRegister = () => {
    if (this.state.valCheckMsg.every(msg => msg === '')) {
      this.setState({
        checkAll: true,
      });
    }
  };

  clickRegister = () => {
    if (this.state.checkAll) {
      const { name, password, email } = this.state;
      this.props.postRegister({ name, email, password });
    }
  };

  componentDidMount() {
    this.props.getDeparments('');
  }
  render() {
    const { departments } = this.props;
    return (
      <>
        <Header
          departments={departments}
          clickRegister={this.clickRegister}
          changeInput={this.changeInput}
          valCheck={this.valCheck}
          valCheckMsg={this.state.valCheckMsg}
          checkAll={this.state.checkAll}
        />
      </>
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({
  departments: rootState.departments.departments,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDeparments: (id: string | null) => dispatch(departmentAction.departmentRequest(id)),
  postRegister: ({ name, email, password }: register) => dispatch(registerAction.registerRequest({ name, email, password }))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);

export default connectModule;