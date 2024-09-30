import { TransformUtil } from '@ts-core/common';
import { HlfTransportCommandAsync } from '@hlf-core/common';
import { Matches } from 'class-validator';
import { CommandName } from './Command';
import { Auction } from '../Auction';
import { AuctionAddConditionsGetDto, IAuctionAddConditionsGetDto } from './AuctionAddConditionsGetCommand';
import { RegExpUtil } from '../../../util';

export class AuctionPrimaryAddCommand extends HlfTransportCommandAsync<IAuctionPrimaryAddDto, Auction> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CommandName.AUCTION_PRIMARY_ADD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IAuctionPrimaryAddDto) {
        super(AuctionPrimaryAddCommand.NAME, TransformUtil.toClass(AuctionPrimaryAddDto, request));
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected checkResponse(item: Auction): Auction {
        return TransformUtil.toClass(Auction, item);
    }
}


export interface IAuctionPrimaryAddDto extends IAuctionAddConditionsGetDto {
    nickname: string;
}

export class AuctionPrimaryAddDto extends AuctionAddConditionsGetDto {
    @Matches(RegExpUtil.NICKNAME_REG_EXP)
    declare nickname: string;
}
