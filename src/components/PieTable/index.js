import React from 'react';
import PropTypes from 'prop-types';
import { DataTable } from '../CommonStyled';

const PieTable = ({ pieChartCardData }) => (
  <DataTable>
    <tbody>
      <tr>
        <th>Type</th>
        <th>Value</th>
      </tr>
      {pieChartCardData.map(item => (
        <tr key={Math.random()}>
          <td>{item.name}</td>
          <td>{item.value}</td>
        </tr>
      ))}
    </tbody>
  </DataTable>
);

PieTable.propTypes = {
  pieChartCardData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
};

export default PieTable;
