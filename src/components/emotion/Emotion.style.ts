import styled, { css } from 'styled-components/macro';

export const Labels = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  font-weight: 300;
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

export const Emotion = styled.div<{ selected?: boolean; noBorder?: boolean; noCursor?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px;
  margin: 8px;
  border: ${({ noBorder }) => (noBorder ? 'none' : '1px solid #dfdfdf')};
  cursor: ${({ noCursor }) => (noCursor ? 'auto' : 'pointer')};
  max-width: 90px;
  min-width: 90px;
  height: 120px;
  border-radius: 8px;
  background: white;
  transition: all 0.3s;
  ${({ selected }) => selected && selectedEmotion}
`;

export const EngLabel = styled.span`
  text-transform: capitalize;
`;
