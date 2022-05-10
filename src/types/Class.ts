import { StatusNameType } from './Status';

export type Class = {
  classId: string;
  className: string;
  kidsUserIds: Array<string>;
  managementUserId: Array<string>;
  status: StatusNameType;
};
