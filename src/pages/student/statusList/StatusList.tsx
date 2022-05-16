import { useRecoilState } from 'recoil';
import { selectedStatusStore } from '../../../store';
import { Emotion } from '../../../components';
import { Emotions, EmotionsType, StatusNameType } from '../../../types';
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
      default:
        return <></>;
    }
  };

  return <S.StatusList>{component()}</S.StatusList>;
};
