import * as React from "react";
import { departmentAction, categoryAction } from "store/actions";
import { rootState } from "store/reducers";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { departments, categories } from "store/models";
import { Home } from "components";

interface Props {
  departments: departments[];
  categories: categories[];
  getDeparments: typeof departmentAction.departmentRequest;
  getCategories: typeof categoryAction.categoryRequest;
}

class HomeContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.getDeparments("");
    this.props.getCategories("");
  }
  render() {
    const { departments, categories } = this.props;
    return (
      <>
        <Home departments={departments} categories={categories} />
      </>
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({
  departments: rootState.departments.departments,
  categories: rootState.categories.rows
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDeparments: (id: string | null) =>
    dispatch(departmentAction.departmentRequest(id)),
  getCategories: (id: string | null) =>
    dispatch(categoryAction.categoryRequest(id))
});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

export default connectModule;
