import { atom } from 'recoil';
import { StatusType, StatusNameType } from '../types';

export const selectedStatusStore = atom<StatusType | null>({
  key: 'SelectedStatus',
  default: null,
});

export const selectedStatusNameStore = atom<StatusNameType | null>({
  key: 'SelectedStatusName',
  default: 'EMOTIONS',
});
