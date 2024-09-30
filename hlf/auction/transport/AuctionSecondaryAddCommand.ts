import { TransformUtil } from '@ts-core/common';
import { IsString } from 'class-validator';
import { HlfTransportCommandAsync } from '@hlf-core/common';
import { CommandName } from './Command';
import { Auction } from '../Auction';

export class AuctionSecondaryAddCommand extends HlfTransportCommandAsync<IAuctionSecondaryAddDto, Auction> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CommandName.AUCTION_SECONDARY_ADD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IAuctionSecondaryAddDto) {
        super(AuctionSecondaryAddCommand.NAME, TransformUtil.toClass(AuctionSecondaryAddDto, request));
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

export interface IAuctionSecondaryAddDto {
    price: string;
}

export class AuctionSecondaryAddDto {
    @IsString()
    public price: string;
}
