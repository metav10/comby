import styled, { css } from 'styled-components/macro';

export const Labels = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: black;
`;

const selectedEmotion = css`
  background: black;

  ${Labels} {
    color: white;
  }
`;

export const Emotion = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 12px;
  border: 1px solid black;
  cursor: pointer;
  ${({ selected }) => selected && selectedEmotion}
`;

export const EngLabel = styled.span`
  text-transform: capitalize;
`;
