export type UserType = 'STUDENT' | 'TEACHER';
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  userType: UserType;
};
