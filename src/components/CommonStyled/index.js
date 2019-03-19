import styled from 'styled-components';

export const AppContentWrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  color: #4c4c4c;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChartHeader = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 10px;
  }
`;

export const DataTable = styled.table`
  border-collapse: collapse;
  margin: 40px 0;
  &,
  th,
  td {
    border: 1px solid #868686;
  }

  tr:nth-child(odd) {
    background: #ececec;
  }

  th {
    padding: 5px;
  }

  td {
    text-align: center;
  }
`;
