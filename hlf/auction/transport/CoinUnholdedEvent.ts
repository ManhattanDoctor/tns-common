import { Event } from './Event';
import { CoinEvent, ICoinEventDto } from './CoinEvent';

export class CoinUnholdedEvent extends CoinEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.COIN_UNHOLDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ICoinEventDto) {
        super(CoinUnholdedEvent.NAME, data);
    }
}