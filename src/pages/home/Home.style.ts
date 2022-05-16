import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
`;

export const Logout = styled(Link)`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  color: black;
  padding: 10px;
  font-size: 14px;
`;
