import { IsDate, ValidateIf, Matches, ValidateNested, IsDefined, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { getUid, IUIDable, UID } from '@ts-core/common';
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
    public static MAX_CREATED_DATE = new Date(2500, 0);

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(created: Date, nickname: string, type: AuctionType, expired: Date, parentUid: string): Auction {
        let item = new Auction();
        item.uid = Auction.createUid(created, nickname);
        item.type = type;
        item.expired = expired;
        item.parentUid = parentUid;
        return item;
    }

    public static createUid(created: Date, nickname: string): string {
        let time = Auction.MAX_CREATED_DATE.getTime() - created.getTime();
        return `${Auction.PREFIX}/${nickname}/${_.padStart(time.toString(), 14, '0')}`;
    }

    public static getNicknameByUid(item: UID): string {
        return !_.isNil(item) ? getUid(item).split('/')[1] : null;
    }

    public static getIsSucceed(item: Auction): boolean {
        return item.type === AuctionType.SECONDARY ? !_.isNil(item.bidderUid) && item.bidderUid !== item.initiatorUid : true;
    }

    public static getWinnerUid(item: Auction): string {
        return !_.isNil(item.bidderUid) ? item.bidderUid : item.initiatorUid;
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

}