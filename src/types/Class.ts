import { StatusNameType } from './Status';

export type Kita = {
  kitaId: string;
  kitaName: string;
  kidsUserIds: Array<string>;
  managementUserIds: Array<string>;
  status: StatusNameType;
};
