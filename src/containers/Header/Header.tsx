import * as React from 'react';
import { departmentAction, authAction } from 'store/actions';
import { login, register } from 'store/actions/auth';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { departments, customer } from 'store/models';
import { Header } from 'components';

interface Props {
  departments: departments[],
  getDeparments: typeof departmentAction.departmentRequest;
  postRegister: ({ name, email, password }: register) => void;
  getUser: typeof authAction.getUserRequest;
  postLogin: ({ email, password }: login) => void;
  user?: customer;
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
    this.clickLogin = this.clickLogin.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.valCheck = this.valCheck.bind(this);
  }

  changeInput = (num: number, e: { target: HTMLInputElement }) => {
    const checkMsg = [
      ...this.state.valCheckMsg.slice(0, num),
      '',
      ...this.state.valCheckMsg.slice(num + 1),
    ];
    const key = e.target.placeholder as keyof HeaderState;
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
      this.beforeAuth
    );
  };

  beforeAuth = () => {
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

  clickLogin = () => {
    if (this.state.checkAll) {
      const { password, email } = this.state;
      this.props.postLogin({ email, password });
    }
  };

  componentDidMount() {
    this.props.getDeparments('');
    this.props.getUser();
  }
  render() {
    const { departments, user } = this.props;
    return (
      <>
        <Header
          departments={departments}
          clickRegister={this.clickRegister}
          clickLogin={this.clickLogin}
          changeInput={this.changeInput}
          valCheck={this.valCheck}
          valCheckMsg={this.state.valCheckMsg}
          checkAll={this.state.checkAll}
          user={user}
        />
      </>
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({
  user: rootState.customer.user,
  departments: rootState.departments.departments,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDeparments: (id: string | null) => dispatch(departmentAction.departmentRequest(id)),
  postRegister: ({ name, email, password }: register) => dispatch(authAction.registerRequest({ name, email, password })),
  postLogin: ({ email, password }: login) => dispatch(authAction.loginRequest({ email, password })),
  getUser: () => dispatch(authAction.getUserRequest()),
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);

export default connectModule;