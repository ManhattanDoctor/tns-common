import { TransportEvent } from '@ts-core/common';

export interface IUserEventDto {
    userUid: string;
}

export class UserEvent extends TransportEvent<IUserEventDto> {
    constructor(name: string, data: IUserEventDto) {
        super(name, data);
    }
}
