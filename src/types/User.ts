export type UserType = 'STUDENT' | 'TEACHER';
export type User = {
  id: string;
  name: string;
  password: string;
  userType: UserType;
};
