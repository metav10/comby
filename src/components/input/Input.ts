import styled from 'styled-components/macro';

export const Input = styled.input<{ icon?: string }>`
  display: flex;
  padding: 20px 16px;
  position: relative;
  width: 280px;
  border-radius: 8px;
  border: 1px solid #fff;
  background: none;
  color: #fff;

  &:focus {
    outline: none;
  }
`;
