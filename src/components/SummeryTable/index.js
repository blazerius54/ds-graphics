import React from 'react';
import PropTypes from 'prop-types';
import { DataTable } from '../CommonStyled';

const SummeryTable = React.memo(({ summeryRowsTable, chartViewSettings }) => (
  <DataTable>
    <tbody>
      <tr>
        {chartViewSettings.map(item => (
          <th key={item.name}>{item.name}</th>
        ))}
      </tr>
      {summeryRowsTable.map((row, index) => (
        <tr key={`${new Date().getTime()}${index}`}>
          {chartViewSettings.map(item => {
            const randomNumber = Math.random() * 10;
            return <td key={randomNumber}>{randomNumber.toFixed(2)}</td>;
          })}
        </tr>
      ))}
    </tbody>
  </DataTable>
));

SummeryTable.propTypes = {
  summeryRowsTable: PropTypes.array.isRequired,
  chartViewSettings: PropTypes.array.isRequired,
};

export default SummeryTable;
