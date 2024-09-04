import { IsDate, ValidateIf, Matches, ValidateNested, IsDefined, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { IUIDable } from '@ts-core/common';
import { CoinAmount } from '@hlf-core/common';
import { RegExpUtil } from '../../util';
import * as _ from 'lodash';

export enum AuctionType {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY'
}

export class Auction implements IUIDable {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'auction';

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(nickname: string, type: AuctionType, expired: Date, parentUid: string): Auction {
        let item = new Auction();
        item.uid = Auction.createUid(nickname);
        item.type = type;
        item.expired = expired;
        item.parentUid = parentUid;
        return item;
    }

    public static createUid(nickname: string): string {
        return `${Auction.PREFIX}/${nickname}`;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(RegExpUtil.AUCTION_UID_REG_EXP)
    public uid: string;

    @IsEnum(AuctionType)
    public type: AuctionType;

    @Type(() => CoinAmount)
    @IsDefined()
    @ValidateNested()
    public price: CoinAmount;

    @Type(() => Date)
    @IsDate()
    public expired: Date;

    @ValidateIf(item => item.type === AuctionType.PRIMARY)
    @Matches(RegExpUtil.USER_UID_REG_EXP)
    public bidderUid?: string;

    @Matches(RegExpUtil.NICKNAME_UID_REG_EXP)
    public parentUid?: string;

    @ValidateIf(item => item.type === AuctionType.SECONDARY)
    @Matches(RegExpUtil.USER_UID_REG_EXP)
    public initiatorUid?: string;

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    @Matches(RegExpUtil.NICKNAME_REG_EXP)
    public get nickname(): string {
        return _.last(this.uid.split('/'));
    }

    public get isSucceed(): boolean {
        return this.type === AuctionType.SECONDARY ? !_.isNil(this.bidderUid) && this.bidderUid !== this.initiatorUid : true;
    }
}