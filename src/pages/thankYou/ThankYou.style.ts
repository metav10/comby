import styled, { css } from 'styled-components/macro';

export const ThankYou = styled.div<{ background: string; isLightTextColor?: boolean }>`
  background: ${({ background }) => background};
  color: ${({ isLightTextColor }) => (isLightTextColor ? 'black' : 'white')};
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Emotion = styled.div`
  transform: scale(2);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ForSharing = styled.div<{ isColors: boolean }>`
  ${({ isColors }) =>
    isColors &&
    css`
      background: white;
      color: black;
      padding: 20px;
    `}
  font-weight: 500;
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ForSharingEng = styled.span`
  font-size: 26px;
  line-height: 31px;
`;

export const ForSharingHe = styled.span`
  font-size: 23px;
  line-height: 27px;
  direction: rtl;
`;

export const Feeling = styled.div<{ isColors: boolean }>`
  ${({ isColors }) =>
    isColors &&
    css`
      background: white;
      color: black;
      padding: 20px;
    `}
  padding: 20px;
  font-weight: 500;
  position: absolute;
  top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FeelingEng = styled.span`
  font-size: 26px;
  line-height: 31px;
`;

export const FeelingHe = styled.span`
  font-size: 23px;
  line-height: 27px;
  direction: rtl;
`;
