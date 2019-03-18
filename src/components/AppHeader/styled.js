import styled from 'styled-components';

export const MainHeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const AppTitle = styled.div`
  margin-bottom: 30px;
`;

export const HeaderNav = styled.nav`
  width: 40%;
  display: flex;
  justify-content: space-around;

  a {
    color: #484499;
  }
`;
