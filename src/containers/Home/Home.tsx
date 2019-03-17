import * as React from 'react';
import { departmentAction, categoryAction } from 'store/actions';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { departmentsState, categoriesState } from 'store/models';

import Button from 'components/common/Button';

interface Props {
  departments: departmentsState,
  getDeparments: typeof departmentAction.departmentRequest;
  getCategories: typeof categoryAction.categoryRequest;
}

class Home extends React.Component<Props> {
  componentDidMount() {
    this.props.getDeparments('');
    this.props.getCategories('');
  }
  render() {
    return (
      <>
        <Button className="small1">asd</Button>
      </>
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({
  departments: rootState.departments,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDeparments: (id: string | null) => dispatch(departmentAction.departmentRequest(id)),
  getCategories: (id: string | null) => dispatch(categoryAction.categoryRequest(id)),
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default connectModule;