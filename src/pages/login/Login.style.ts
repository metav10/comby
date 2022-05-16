import styled from 'styled-components/macro';

export const Login = styled.div`
  height: 100%;
  background: #b0b0b0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 250px;
  margin-top: 150px;
`;

export const LoginForm = styled.form`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: flex-end;
  padding: 80px 20px;
  background: #000;
  border-radius: 80px 80px 0 0;

  & > * {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
