import { Emotion } from '../../components';
import { Emotions, EmotionsType, StatusType } from '../../types';
import { ReactNode, useState } from 'react';

export const Home = () => {
  const [selectedStatus, setSelectedStatus] = useState<EmotionsType | null>();

  const status: StatusType = 'EMOTIONS';
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

  const handleClick = () => {
    if (!selectedStatus) return;
    console.log(selectedStatus);
  };

  return (
    <>
      <span>Hi, Dani</span>
      <div>
        <span>How are you feeling today?</span>
        <span>איך אתם מרגישים היום?</span>
      </div>
      <div>{data}</div>
      <button onClick={handleClick} disabled={!selectedStatus}>
        Submit / שליחה
      </button>
    </>
  );
};
