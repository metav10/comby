import { atom } from 'recoil';
import { StatusType, StatusNameType, User } from '../types';

export const selectedStatusStore = atom<StatusType | null>({
  key: 'SelectedStatus',
  default: null,
});

export const selectedStatusNameStore = atom<StatusNameType | null>({
  key: 'SelectedStatusName',
  default: 'EMOTIONS',
});

export const userStore = atom<User | null>({
  key: 'user',
  default: {
    id: '12121',
    firstName: 'Dani',
    lastName: 'Gold',
    username: 'danigold',
    userType: 'TEACHER',
  },
});
