import { TransportEvent } from '@ts-core/common';
import { ICoinEmitDto } from './CoinEmitCommand';
import { Event } from './Event';

export class CoinEmittedEvent extends TransportEvent<ICoinEmitDto> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.COIN_EMITTED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: ICoinEmitDto) {
        super(CoinEmittedEvent.NAME, data);
    }
}



