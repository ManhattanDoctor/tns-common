import { Event } from './Event';
import { AuctionEvent, IAuctionEventDto } from './AuctionEvent';

export class AuctionAddedEvent extends AuctionEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.AUCTION_ADDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: IAuctionEventDto) {
        super(AuctionAddedEvent.NAME, data);
    }
}