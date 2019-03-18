import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip } from 'recharts';
import { ChartHeader, ChartWrapper } from '../CommonStyled';
import TimeWrapper from '../TimeWrapper';

class CardChart extends React.PureComponent {
  render() {
    const { cardTime } = this.props;
    return (
      <ChartWrapper>
        <ChartHeader>
          <TimeWrapper
            firstDate={cardTime}
          />
        </ChartHeader>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={this.props.pieChartCardData}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ChartWrapper>
    );
  }
}

CardChart.propTypes = {
  pieChartCardData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  // loading: PropTypes.bool.isRequired,
};

export default CardChart;
