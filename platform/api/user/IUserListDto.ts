import { IPaginable, IPagination } from '@ts-core/common';
import { ITraceable } from '@ts-core/common';
import { User } from '../../User';

export interface IUserListDto extends IPaginable<User>, ITraceable {}

export interface IUserListDtoResponse extends IPagination<User> {}
