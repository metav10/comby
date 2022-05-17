import { ColorsType, Colors, LightColors } from '../../types';
import * as S from './Color.style';

export const Color = ({
  color,
  onClick,
  selected,
  noBorder,
  noCursor,
  noBg,
}: {
  color: ColorsType;
  onClick?: () => void;
  selected?: boolean;
  noBorder?: boolean;
  noCursor?: boolean;
  noBg?: boolean;
}) => (
  <S.Color
    selected={selected}
    noBg={noBg}
    noCursor={noCursor}
    noBorder={noBorder}
    onClick={onClick}
    bg={color}
    isLightColor={LightColors.includes(color)}
  >
    <S.ColoredBox bg={color} />
    <S.Labels>
      <S.EngLabel>{color}</S.EngLabel>
      <span>{Colors[color]}</span>
    </S.Labels>
  </S.Color>
);
