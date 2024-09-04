import { Event } from './Event';
import { AuctionEvent, IAuctionEventDto } from './AuctionEvent';

export class AuctionBidedEvent extends AuctionEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.AUCTION_BIDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: IAuctionEventDto) {
        super(AuctionBidedEvent.NAME, data);
    }
}