import { Event } from './Event';
import { NicknameEvent, INicknameEventDto } from './NicknameEvent';

export class NicknameAddedEvent extends NicknameEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.NICKNAME_ADDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: INicknameEventDto) {
        super(NicknameAddedEvent.NAME, data);
    }
}