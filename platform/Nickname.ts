import { Nickname as HlfNickname } from '../hlf/auction';

export class Nickname extends HlfNickname {
    id: number;

    private _nickname: string;
    public get nickname(): string {
        return this._nickname;
    }
    public set nickname(value: string) {
        this._nickname = value;
    }
}