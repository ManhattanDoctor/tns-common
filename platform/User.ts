import { User as HlfUser } from '../hlf/acl';
import { Matches } from 'class-validator';
import { RegExpUtil } from '../util';

export class User extends HlfUser {
    id: number;

    @Matches(RegExpUtil.NICKNAME_REG_EXP)
    address: string;
}