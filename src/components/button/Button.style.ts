import styled from 'styled-components/macro';

export const Button = styled.button<{ isWhite?: boolean }>`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${({ isWhite }) => (isWhite ? 'black' : 'white')};
  background: ${({ isWhite }) => (isWhite ? 'white' : 'black')};
  cursor: pointer;
  padding: 20px 80px;
  border: none;
  border-radius: 500px;
  transition: all 0.3s;
  width: 280px;

  &:disabled {
    opacity: 50%;
  }
`;
