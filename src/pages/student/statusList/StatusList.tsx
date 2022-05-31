import { useRecoilState } from 'recoil';
import { selectedStatusStore } from '../../../store';
import { Emotion, Color } from '../../../components';
import { Colors, ColorsType, Emotions, EmotionsType, StatusNameType, StatusType } from '../../../types';
import * as S from './StatusList.style';

export const StatusList = ({ statusName }: { statusName: StatusNameType }) => {
  const [selectedStatus, setSelectedStatus] = useRecoilState(selectedStatusStore);

  const handleClick = (status: StatusType) => {
    const statusIndex = selectedStatus?.indexOf(status);
    if (statusIndex !== -1) {
      const newSelectedStatus = [...selectedStatus];
      newSelectedStatus.splice(statusIndex, 1);
      setSelectedStatus(newSelectedStatus);
      return;
    }
    if (selectedStatus.length === 2) return;
    setSelectedStatus([...selectedStatus, status]);
  };

  const component = () => {
    switch (statusName) {
      case 'EMOTIONS':
        return (Object.keys(Emotions) as Array<EmotionsType>).map((emotion, eIndex) => (
          <Emotion
            key={eIndex}
            onClick={() => handleClick(emotion)}
            emotion={emotion}
            selected={selectedStatus?.indexOf(emotion) > -1}
          />
        ));
      case 'COLORS':
        return (Object.keys(Colors) as Array<ColorsType>).map((color, cIndex) => (
          <Color
            key={cIndex}
            onClick={() => handleClick(color)}
            color={color}
            selected={selectedStatus?.indexOf(color) > -1}
          />
        ));
      default:
        return <></>;
    }
  };

  return (
    <>
      <S.Hints>
        <S.Hint>You can choose up to 2 {statusName === 'EMOTIONS' ? 'emotions' : 'colors'}</S.Hint>
        <S.Hint>ניתן לבחור עד 2 {statusName === 'EMOTIONS' ? 'תחושות' : 'צבעים'}</S.Hint>
      </S.Hints>
      <S.StatusList>{component()}</S.StatusList>
    </>
  );
};
