import { StatusNameType } from './Status';

export type Kita = {
  kitaId: string;
  kitaName: string;
  kidsUserIds: Array<string>;
  managementUserId: Array<string>;
  status: StatusNameType;
};
