import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';
import { ChartHeader, ChartWrapper } from '../CommonStyled';
import { SummeryChartWrapper } from './styled';
import TimeWrapper from '../TimeWrapper';

class SummeryChart extends React.PureComponent {
  render() {
    const { chartViewSettings, periodInfo } = this.props;

    return (
      <ChartWrapper>
        {Object.keys(chartViewSettings).length > 0 && (
          <React.Fragment>
            <ChartHeader>
              <TimeWrapper
                firstDate={periodInfo.firstDate}
                lastDate={periodInfo.lastDate}
              />
            </ChartHeader>
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
      </ChartWrapper>
    );
  }
}

SummeryChart.propTypes = {
  chartViewSettings: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  periodInfo: PropTypes.object.isRequired,
};

export default SummeryChart;
