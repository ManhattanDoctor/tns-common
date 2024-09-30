import { TransformUtil } from '@ts-core/common';
import { Matches } from 'class-validator';
import { HlfTransportCommandAsync } from '@hlf-core/common';
import { CommandName } from './Command';
import { Auction } from '../Auction';
import { RegExpUtil } from '../../../util';

export class AuctionBidCommand extends HlfTransportCommandAsync<IAuctionBidDto, Auction> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CommandName.AUCTION_BID;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IAuctionBidDto) {
        super(AuctionBidCommand.NAME, TransformUtil.toClass(AuctionBidDto, request));
    }
}

export interface IAuctionBidDto {
    uid: string;
}

export class AuctionBidDto {
    @Matches(RegExpUtil.AUCTION_UID_REG_EXP)
    uid: string;
}
