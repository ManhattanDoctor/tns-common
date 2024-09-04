
import { IUIDable, UID, getUid } from '@ts-core/common';
import { RegExpUtil } from "../util";

export interface IHlfObject extends IUIDable { }

export enum HlfObjectType {
    USER = 'USER',
    COIN = 'COIN',
    AUCTION = 'AUCTION',
    NICKNAME = 'NICKNAME',
}

export function IsUser(uid: UID): boolean {
    return RegExpUtil.USER_UID_REG_EXP.test(getUid(uid));
}

export function getType(uid: UID): HlfObjectType {
    if (IsUser(uid)) {
        return HlfObjectType.USER;
    }
    return null;
}