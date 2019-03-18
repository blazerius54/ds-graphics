import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CardReport extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        report card
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => ({
//   loading: state.globalReducer.loading,
//   summeryData: state.mainPageReducer.summeryData,
//   summeryRowsTable: state.mainPageReducer.summeryRowsTable,
//   viewSettings: state.mainPageReducer.viewSettings,
//   periodInfo: state.mainPageReducer.periodInfo,
// });
//
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ sendSofDetailsRequest }, dispatch);
//
// CardReport.propTypes = {
//   sendSofDetailsRequest: PropTypes.func.isRequired,
//   loading: PropTypes.bool.isRequired,
//   summeryData: PropTypes.object.isRequired,
//   periodInfo: PropTypes.object.isRequired,
//   viewSettings: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
//     .isRequired,
//   summeryRowsTable: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
//     .isRequired,
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CardReport);

export default CardReport;
