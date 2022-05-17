import { useRecoilState } from 'recoil';
import { selectedStatusStore } from '../../../store';
import { Emotion, Color } from '../../../components';
import { Colors, ColorsType, Emotions, EmotionsType, StatusNameType } from '../../../types';
import * as S from './StatusList.style';

export const StatusList = ({ statusName }: { statusName: StatusNameType }) => {
  const [selectedStatus, setSelectedStatus] = useRecoilState(selectedStatusStore);

  const component = () => {
    switch (statusName) {
      case 'EMOTIONS':
        return (Object.keys(Emotions) as Array<EmotionsType>).map((emotion, eIndex) => (
          <Emotion
            key={eIndex}
            onClick={() => setSelectedStatus(selectedStatus === emotion ? null : emotion)}
            emotion={emotion}
            selected={selectedStatus === emotion}
          />
        ));
      case 'COLORS':
        return (Object.keys(Colors) as Array<ColorsType>).map((color, cIndex) => (
          <Color
            key={cIndex}
            onClick={() => setSelectedStatus(selectedStatus === color ? null : color)}
            color={color}
            selected={selectedStatus === color}
          />
        ));
      default:
        return <></>;
    }
  };

  return <S.StatusList>{component()}</S.StatusList>;
};
