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
    // Request summary data for chart
    this.props.sendSummeryRequest();
  }

  render() {
    const { summeryRowsTable, viewSettings, periodInfo, loading } = this.props;

    let isChartViewSettings = false;
    let chartViewSettings = viewSettings;

    if (chartViewSettings) {
      isChartViewSettings = Object.keys(chartViewSettings).length > 0;
    }

    if (isChartViewSettings) {
      chartViewSettings = chartViewSettings.map(item => ({
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
  viewSettings: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  summeryRowsTable: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SummeryPage);
