import { atom } from 'recoil';
import { StatusType, StatusNameType, User } from '../types';

export const selectedStatusStore = atom<StatusType | null>({
  key: 'SelectedStatus',
  default: null,
});

export const statusNameTypeStore = atom<StatusNameType | null>({
  key: 'StatusNameType',
  default: null,
});

export const userStore = atom<User | null>({
  key: 'user',
  default: null,
});
