import { PropsWithChildren } from 'react';
import * as S from './Button.style';

export const Button = ({
  children,
  onClick,
  disabled,
  isWhite,
}: PropsWithChildren<{
  onClick: () => void;
  disabled?: boolean;
  isWhite?: boolean;
}>) => {
  return (
    <S.Button onClick={onClick} disabled={disabled} isWhite={isWhite}>
      {children}
    </S.Button>
  );
};
