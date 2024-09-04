import { TransportEvent } from '@ts-core/common';

export interface INicknameEventDto {
    nicknameUid: string;
}

export class NicknameEvent extends TransportEvent<INicknameEventDto> {
    constructor(name: string, data: INicknameEventDto) {
        super(name, data);
    }
}
