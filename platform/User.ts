import { User as HlfUser } from '../hlf/acl';

export class User extends HlfUser {
    id: number;

    private _address: string;
    private _created: Date;
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    public get created(): Date {
        return this._created;
    }
    public set created(value: Date) {
        this._created = value;
    }
}