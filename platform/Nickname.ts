import { Nickname as HlfNickname } from '../hlf/auction';
import { IsDate, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { RegExpUtil } from '../util';

export class Nickname extends HlfNickname {
    id: number;

    @Type(() => Date)
    @IsDate()
    created: Date;

    @Matches(RegExpUtil.NICKNAME_REG_EXP)
    nickname: string;
}

export function getNicknameRoom(id: number): string {
    return `nickname${id}`;
}