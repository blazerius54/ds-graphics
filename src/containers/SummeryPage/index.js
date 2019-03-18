import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendSofDetailsRequest } from './actions';
import AppHeader from '../../components/AppHeader';
import SummeryChart from '../../components/SummeryChart';
import SummeryTable from '../../components/SummeryTable';

class SummeryPage extends React.PureComponent {
  componentDidMount() {
    // Request summary data for chart
    this.props.sendSofDetailsRequest();
  }

  render() {
    const {
      summeryData,
      summeryRowsTable,
      viewSettings,
      periodInfo,
      loading,
    } = this.props;

    let chartViewSettings = viewSettings;

    Object.keys(chartViewSettings).length > 0 &&
      (chartViewSettings = chartViewSettings.map(item => ({
        ...item,
        value: Math.random() * 10,
      })));

    return (
      <React.Fragment>
        <AppHeader />
        <SummeryChart
          chartViewSettings={chartViewSettings}
          periodInfo={periodInfo}
          loading={loading}
        />
        {!loading &&
          Object.keys(chartViewSettings).length > 0 && (
          <SummeryTable
            summeryRowsTable={summeryRowsTable}
            chartViewSettings={chartViewSettings}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.globalReducer.loading,
  summeryData: state.mainPageReducer.summeryData,
  summeryRowsTable: state.mainPageReducer.summeryRowsTable,
  viewSettings: state.mainPageReducer.viewSettings,
  periodInfo: state.mainPageReducer.periodInfo,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendSofDetailsRequest }, dispatch);

SummeryPage.propTypes = {
  sendSofDetailsRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  summeryData: PropTypes.object.isRequired,
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
