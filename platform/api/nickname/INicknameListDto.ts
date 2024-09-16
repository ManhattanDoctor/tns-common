import { ITraceable, IPaginable, IPagination } from '@ts-core/common';
import { Nickname } from '../../Nickname';

export interface INicknameListDto extends IPaginable<Nickname>, ITraceable { }

export interface INicknameListDtoResponse extends IPagination<Nickname> { }
