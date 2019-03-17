import styled from 'styled-components';

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
