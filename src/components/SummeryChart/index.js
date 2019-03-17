import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';
import GlobalLoader from '../GlobalLoader';
import {
  SummeryWrapper,
  SummeryChartWrapper,
  SummeryHeader,
  SummeryPeriod,
} from './styled';

class SummeryChart extends React.PureComponent {
  dateFormat(date) {
    const fullDate = new Date(date);
    return `${fullDate.getDate()}.${fullDate.getMonth() +
      1}.${fullDate.getFullYear()}`;
  }

  render() {
    const {
      summeryData,
      viewSettings,
      chartViewSettings,
      periodInfo,
      loading,
    } = this.props;

    return (
      <SummeryWrapper>
        {Object.keys(chartViewSettings).length > 0 && (
          <React.Fragment>
            <SummeryHeader>
              <h3>Summery data</h3>
              <SummeryPeriod>
                <p>From {this.dateFormat(periodInfo.firstDate)}.</p>
                <p>To: {this.dateFormat(periodInfo.lastDate)}.</p>
              </SummeryPeriod>
            </SummeryHeader>
            <SummeryChartWrapper>
              <BarChart
                width={500}
                height={300}
                data={chartViewSettings}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="value" />
                <Bar dataKey="value" fill="#8884d8">
                  {chartViewSettings.map((entry, index) => {
                    const { color } = chartViewSettings[index];
                    return <Cell fill={`#${color}`} key={Math.random()} />;
                  })}
                </Bar>
              </BarChart>
            </SummeryChartWrapper>
          </React.Fragment>
        )}
        {loading && <GlobalLoader />}
      </SummeryWrapper>
    );
  }
}

SummeryChart.propTypes = {
  chartViewSettings: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SummeryChart;
