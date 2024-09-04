import * as _ from 'lodash';
import { Type } from 'class-transformer';

export class Action {
    id: number;
    type: ActionType;

    @Type(() => Date)
    date: Date;

    requestId: string;
    objectUid: string;
    initiatorUid: string;

    isExecuted: boolean;

    amount?: string;
    decimals?: number;

    billUid?: string;
    userUid?: string;
    coinUid?: string;
    companyUid?: string;
    terminalUid?: string;
}

export enum ActionType {
    USER_ADDED = 'USER_ADDED',
    USER_CRYPTO_KEY_EDITED = 'USER_CRYPTO_KEY_EDITED',

    COMPANY_ADDED = 'COMPANY_ADDED',
    COMPANY_USER_ADDED = 'COMPANY_USER_ADDED',
    COMPANY_USER_EDITED = 'COMPANY_USER_EDITED',
    COMPANY_USER_REMOVED = 'COMPANY_USER_REMOVED',

    COIN_ADDED = 'COIN_ADDED',
    COIN_HOLDED = 'COIN_HOLDED',
    COIN_BURNED = 'COIN_BURNED',
    COIN_EMITTED = 'COIN_EMITTED',
    COIN_UNHOLDED = 'COIN_UNHOLDED',

    TERMINAL_ADDED = 'TERMINAL_ADDED',
    TERMINAL_SUBSCRIPTION_ADDED = 'TERMINAL_SUBSCRIPTION_ADDED',
    TERMINAL_SUBSCRIPTION_REMOVED = 'TERMINAL_SUBSCRIPTION_REMOVED',

    BILL_ADDED = 'BILL_ADDED',
    BILL_EDITED = 'BILL_EDITED',

    // Based on BILL_EDITED
    BILL_APPROVED = 'BILL_APPROVED',
    BILL_REJECTED = 'BILL_REJECTED',

    // Based on COIN_TRANSFERRED
    COIN_TRANSFER_SENT = 'COIN_TRANSFER_SENT',
    COIN_TRANSFER_RECEIVE = 'COIN_TRANSFER_RECEIVE',

    // Based on COIN_EMITTED
    COIN_EMITTED_SENT = 'COIN_EMITTED_SENT',
    COIN_EMITTED_RECEIVE = 'COIN_EMITTED_RECEIVE'
}
