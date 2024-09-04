import { TransportEvent } from '@ts-core/common';
import { ICoinEmitDto } from './CoinEmitCommand';
import { Event } from './Event';

export class CoinBurnedEvent extends TransportEvent<ICoinEmitDto> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.COIN_BURNED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ICoinEmitDto) {
        super(CoinBurnedEvent.NAME, data);
    }
}




