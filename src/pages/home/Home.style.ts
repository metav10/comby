import styled from 'styled-components/macro';
import { Button } from '../../components';

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

export const Name = styled.span`
  font-weight: 300;
  font-size: 26px;
  line-height: 31px;
  margin-bottom: 20px;
`;

export const Feeling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: 600;
`;

export const FeelingEng = styled.span`
  font-size: 36px;
  line-height: 43px;
  margin-bottom: 8px;
`;

export const FeelingHe = styled.span`
  font-size: 23px;
  line-height: 27px;
  margin-bottom: 20px;
  direction: rtl;
`;

export const SubmitButton = styled(Button)`
  position: fixed;
  bottom: 20px;
`;
