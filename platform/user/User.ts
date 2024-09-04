import { Type } from 'class-transformer';
import { UserType } from './UserType';
import { UserPreferences } from './UserPreferences';
import { UserStatus } from './UserStatus';
import { ILedgreable } from '../ILedgerable';

export class User implements ILedgreable {
    id: number;
    type: UserType;
    login: string;
    status: UserStatus;
    resource: UserResource;
    ledgerUid: string;

    @Type(() => Date)
    created: Date;

    @Type(() => UserPreferences)
    preferences: UserPreferences;
}

export enum UserResource {
    VK = 'VK',
    MAIL = 'MAIL',
    YANDEX = 'YANDEX',
    GOOGLE = 'GOOGLE',
    ETHEREUM = 'ETHEREUM',
}
