import * as React from 'react';
import { rootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps} from 'react-router-dom';
import { Params } from 'lib/type';

interface Props extends RouteComponentProps<Params>{

}

class ProductsContainer extends React.Component<Props> {
  componentDidMount() {

  }
  render() {
    return (
      <>
      <div>Products container</div>
      </>
    );
  }
}

const mapStateToProps = (rootState: rootState) => ({

})

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

const connectModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);

export default withRouter(connectModule);