import { CoinUtil } from "@hlf-core/common";
import { DateUtil } from "@ts-core/common";
import { Variables as AclVariables } from '../acl';

export const Variables = {
    coin: {
        uid: CoinUtil.createUid('TRUE', 0, AclVariables.platform.uid),
        amount: Number(100_000).toString(),
        coinId: 'TRUE',
        decimals: 0,
        ownerUid: AclVariables.platform.uid,
        balance: null
    },
    auction: {
        primary: {
            bid: {
                percent: '5',
                duration: DateUtil.MILLISECONDS_MINUTE,
            },
            burn: {
                percent: '10'
            },
            earn: {
                percent: '5'
            },
            duration: DateUtil.MILLISECONDS_MINUTE,
            allocation: {
                percent: '85',
                distribution: ['35', '10', '7', '7', '7', '7', '7', '5']
            }
        },
        secondary: {
            bid: {
                percent: '7',
                duration: DateUtil.MILLISECONDS_MINUTE,
            },
            burn: {
                percent: '0'
            },
            earn: {
                percent: '5'
            },
            price: {
                amount: '20',
                percent: '10'
            },
            duration: DateUtil.MILLISECONDS_MINUTE,
            allocation: {
                percent: '5',
                distribution: ['35', '10', '7', '7', '7', '7', '7', '5']
            }
        }
    }
}