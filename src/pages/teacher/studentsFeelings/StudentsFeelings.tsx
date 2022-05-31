import { Color, Emotion } from '../../../components';
import { Status, User, isEmotionType, isColorType } from '../../../types';
import * as S from './StudentsFeelings.style';

export const StudentsFeelings = ({ status, students }: { status: Array<Status>; students: Array<User> }) => {
  const getStudentData = (studentId: string) => students.find((s) => s.id === studentId);

  return (
    <S.StudentsFeelings>
      {status.map((s, sIndex) => {
        const studentData = getStudentData(s.kidUserId);
        if (!studentData) return <></>;

        const emotion = isEmotionType(s.status) ? s.status : undefined;
        const color = isColorType(s.status) ? s.status : undefined;

        return (
          <S.Student key={sIndex}>
            <S.StudentName>
              {/* {studentData.firstName}
              <br />
              {studentData.lastName} */}
              {studentData.username}
            </S.StudentName>
            {emotion && <Emotion emotion={emotion} noBorder noCursor />}
            {color && <Color color={color} noBorder noCursor />}
          </S.Student>
        );
      })}
    </S.StudentsFeelings>
  );
};
