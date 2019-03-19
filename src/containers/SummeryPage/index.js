import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendSummeryRequest } from './actions';
import SummeryChart from '../../components/SummeryChart';
import SummeryTable from '../../components/SummeryTable';
import GlobalLoader from '../../components/GlobalLoader';

class SummeryPage extends React.PureComponent {
  componentDidMount() {
    // Send summary data request if there is no data in reducer
    const { summeryRowsTable, sendSummeryRequest } = this.props;
    if (summeryRowsTable.length === 0) {
      sendSummeryRequest();
    }
  }

  render() {
    const { summeryRowsTable, viewSettings, periodInfo, loading } = this.props;

    const isChartViewSettings = viewSettings.length > 0;
    let chartViewSettings = [];

    if (isChartViewSettings && summeryRowsTable.length !== 0) {
      chartViewSettings = viewSettings.map(item => ({
        ...item,
        value: Math.random() * 10,
      }));
    }
    return (
      <React.Fragment>
        {!loading &&
          isChartViewSettings && (
          <React.Fragment>
            <SummeryChart
              chartViewSettings={chartViewSettings}
              periodInfo={periodInfo}
            />
            <SummeryTable
              summeryRowsTable={summeryRowsTable}
              chartViewSettings={chartViewSettings}
              />
          </React.Fragment>
        )}
        {loading && <GlobalLoader />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.globalReducer.loading,
  summeryRowsTable: state.summeryPageReducer.summeryRowsTable,
  viewSettings: state.summeryPageReducer.viewSettings,
  periodInfo: state.summeryPageReducer.periodInfo,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendSummeryRequest }, dispatch);

SummeryPage.propTypes = {
  sendSummeryRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  periodInfo: PropTypes.object.isRequired,
  viewSettings: PropTypes.array.isRequired,
  summeryRowsTable: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SummeryPage);
