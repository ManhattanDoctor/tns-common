import { TransportEvent } from '@ts-core/common';

export interface ICoinEventDto {
    coinUid: string;
}

export class CoinEvent extends TransportEvent<ICoinEventDto> {
    constructor(name: string, data: ICoinEventDto) {
        super(name, data);
    }
}
