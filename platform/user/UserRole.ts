import { Type } from 'class-transformer';

export class UserRole {
    id: number;
    name: UserRoleName;
    userId: number;

    @Type(() => Date)
    created: Date;
}

export type UserRoleName = UserRole;
