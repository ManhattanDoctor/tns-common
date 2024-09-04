import { NicknameEvent, INicknameEventDto } from './NicknameEvent';
import { Event } from './Event';

export class NicknameTransferredEvent extends NicknameEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.NICKNAME_TRANSFERRED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: INicknameEventDto) {
        super(NicknameTransferredEvent.NAME, data);
    }
}