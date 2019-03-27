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
  postRegister: (
    { name, email, password }: register
  ) => void;
}

interface HeaderState {
  registername: string;
  registerpassword: string;
  registeremail: string;
  valCheckMsg: string[];
  checkAll: boolean;
  finish: boolean;
}

class HeaderContainer extends React.Component<Props, HeaderState> {
  componentDidMount() {
    this.props.getDeparments('');
  }
  render() {
    const { departments } = this.props;
    return (
      <>
        <Header
          departments={departments}
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