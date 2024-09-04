import { Event } from './Event';
import { IUserEventDto, UserEvent } from './UserEvent';

export class UserAddedEvent extends UserEvent {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = Event.USER_ADDED;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: IUserEventDto) {
        super(UserAddedEvent.NAME, data);
    }
}
