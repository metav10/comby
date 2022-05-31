import { ColorsType } from '../../types';
import styled, { css } from 'styled-components/macro';

export const Labels = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: black;
  transition: all 0.3s;
`;

export const ColoredBox = styled.div<{ bg: ColorsType }>`
  background: ${({ bg }) => bg};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: all 0.3s;
`;

const selectedColor = css`
  ${Labels} {
    color: white;
  }

  ${ColoredBox} {
    height: 0;
  }
`;

const noBgColor = css`
  background: transparent;

  ${Labels} {
    color: white;
  }
`;

const lightColor = css`
  ${Labels} {
    color: black;
  }
`;

export const Color = styled.div<{
  bg?: ColorsType;
  selected?: boolean;
  noBorder?: boolean;
  noCursor?: boolean;
  noBg?: boolean;
  isLightColor?: boolean;
  colorBorder?: boolean;
}>`
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
  transition: all 0.3s;
  background: ${({ selected, bg }) => (selected && bg ? bg : 'white')};
  ${({ noBg }) => noBg && noBgColor};
  ${({ selected }) => selected && selectedColor};
  ${({ isLightColor }) => isLightColor && lightColor};

  ${ColoredBox} {
    border: ${({ colorBorder, selected }) => (colorBorder && !selected ? '1px solid #dfdfdf' : 'none')};
  }
`;

export const EngLabel = styled.span`
  text-transform: capitalize;
`;
