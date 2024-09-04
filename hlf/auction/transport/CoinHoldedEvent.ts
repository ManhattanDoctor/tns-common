import { Event } from './Event';
import { CoinEvent, ICoinEventDto } from './CoinEvent';

export class CoinHoldedEvent extends CoinEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.COIN_HOLDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ICoinEventDto) {
        super(CoinHoldedEvent.NAME, data);
    }
}