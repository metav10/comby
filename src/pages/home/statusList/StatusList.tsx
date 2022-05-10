import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import { selectedStatusStore } from '../../../store';
import { Emotion } from '../../../components';
import { Emotions, EmotionsType, StatusNameType } from '../../../types';
import * as S from './StatusList.style';

export const StatusList = ({ status }: { status: StatusNameType }) => {
  const [selectedStatus, setSelectedStatus] = useRecoilState(selectedStatusStore);
  let data: ReactNode;

  switch (status) {
    case 'EMOTIONS':
      data = (Object.keys(Emotions) as Array<EmotionsType>).map((emotion, eIndex) => (
        <Emotion
          key={eIndex}
          onClick={() => setSelectedStatus(selectedStatus === emotion ? null : emotion)}
          emotion={emotion}
          selected={selectedStatus === emotion}
        />
      ));
      break;
    default:
      data = <></>;
  }

  return <S.StatusList>{data}</S.StatusList>;
};
