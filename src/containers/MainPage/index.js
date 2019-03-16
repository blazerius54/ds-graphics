import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendSofDetailsRequest } from './actions';
import AppHeader from '../../components/AppHeader';

class MainPage extends React.PureComponent {
  render() {
    return (
      <div>
        <AppHeader />
        <button onClick={this.props.sendSofDetailsRequest}>send data request</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};
// {
//   loading: state.MainPageReducer.loading,
// }

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { sendSofDetailsRequest },
    dispatch,
  );

MainPage.propTypes = {
  sendSofDetailsRequest: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
