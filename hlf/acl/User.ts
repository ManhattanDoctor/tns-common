import { IsEnum, IsOptional, Matches, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { IUser } from '@hlf-core/common';
import { RegExpUtil } from '../../util';
import { getUid, UID } from '@ts-core/common';
import * as _ from 'lodash';

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    NON_ACTIVE = 'NON_ACTIVE'
}

export enum UserRole {
    USER_MANAGER = 'USER_MANAGER',
}

export class User implements IUser<UserStatus, UserRole> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'user';

    public static getAddressByUid(item: UID): string {
        return !_.isNil(item) ? _.last(getUid(item).split('/')) : null;
    }

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(address: string, inviterUid: string): User {
        let item = new User();
        item.uid = User.createUid(address);
        item.status = UserStatus.ACTIVE;
        item.inviterUid = inviterUid;
        return item;
    }

    public static createUid(address: string): string {
        return `${User.PREFIX}/${address}`;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(RegExpUtil.USER_UID_REG_EXP)
    public uid: string;

    @IsEnum(UserStatus)
    public status: UserStatus;

    @Matches(RegExpUtil.USER_UID_REG_EXP)
    public inviterUid: string;

    @IsOptional()
    @Matches(RegExpUtil.ETH_ADDRESS_REG_EXP)
    public wallet?: string;

    @IsOptional()
    @IsEnum(UserRole, { each: true })
    public roles?: Array<UserRole>;

    @IsOptional()
    @Matches(RegExpUtil.NICKNAME_UID_REG_EXP)
    public nicknameUid?: string;

    @Type(() => Date)
    @IsDate()
    public created: Date;
}
