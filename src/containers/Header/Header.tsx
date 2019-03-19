import * as React from 'react';
import { departmentAction } from 'store/actions';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { departments } from 'store/models';
import { Header } from 'components';

interface Props {
  departments: departments[],
  getDeparments: typeof departmentAction.departmentRequest;
}

class HeaderContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.getDeparments('');
  }
  render() {
    const { departments }= this.props;
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
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);

export default connectModule;