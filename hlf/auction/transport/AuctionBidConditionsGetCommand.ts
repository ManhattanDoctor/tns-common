import { TransformUtil } from '@ts-core/common';
import { Matches } from 'class-validator';
import { CoinAmount, HlfTransportCommandAsync, ICoinAmount } from '@hlf-core/common';
import { CommandName } from './Command';
import { RegExpUtil } from '../../../util';

export class AuctionBidConditionsGetCommand extends HlfTransportCommandAsync<IAuctionBidConditionsGetDto, ICoinAmount> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CommandName.AUCTION_BID_CONDITIONS_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IAuctionBidConditionsGetDto) {
        super(AuctionBidConditionsGetCommand.NAME, TransformUtil.toClass(AuctionBidConditionsGetDto, request), null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: ICoinAmount): ICoinAmount {
        return TransformUtil.toClass(CoinAmount, item);
    }
}

export interface IAuctionBidConditionsGetDto {
    uid: string;
    userUid: string;
}

export class AuctionBidConditionsGetDto implements IAuctionBidConditionsGetDto {
    @Matches(RegExpUtil.USER_UID_REG_EXP)
    userUid: string;

    @Matches(RegExpUtil.AUCTION_UID_REG_EXP)
    uid: string;
}
