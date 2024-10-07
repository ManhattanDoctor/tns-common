import { CoinBalance as HlfCoinBalance } from '../hlf/auction';

export class CoinBalance extends HlfCoinBalance {
    id: number;
    uid: string;
    coinUid: string;
}