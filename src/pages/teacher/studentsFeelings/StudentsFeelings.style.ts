import styled from 'styled-components/macro';

export const StudentsFeelings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

export const Student = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
  width: 385px;
  &:last-child {
    border-bottom: none;
  }
`;

export const StudentName = styled.span``;
