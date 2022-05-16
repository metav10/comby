import { Emotion } from '../../../components';
import { Status, StatusType, Emotions, EmotionsType, User } from '../../../types';
import * as S from './StudentsFeelings.style';

export const StudentsFeelings = ({ status, students }: { status: Array<Status>; students: Array<User> }) => {
  const getStudentData = (studentId: string) => students.find((s) => s.id === studentId);

  const isEmotionType = (emotion: StatusType): emotion is EmotionsType => {
    return Object.keys(Emotions).includes(emotion);
  };

  return (
    <S.StudentsFeelings>
      {status.map((s, sIndex) => {
        const studentData = getStudentData(s.kidUserId);
        if (!studentData) return <>couldn't find student data</>;

        const emotion = isEmotionType(s.status) ? s.status : undefined;

        return (
          <S.Student key={sIndex}>
            <S.StudentName>
              {studentData.firstName}
              <br />
              {studentData.lastName}
            </S.StudentName>
            {emotion && <Emotion emotion={emotion} noBorder noCursor />}
          </S.Student>
        );
      })}
    </S.StudentsFeelings>
  );
};
