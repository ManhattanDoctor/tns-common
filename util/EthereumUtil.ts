import { recoverPersonalSignature, normalize } from '@metamask/eth-sig-util';
import { ISignature } from '@ts-core/common';
import * as _ from 'lodash';

export class EthereumUtil {

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static getAddressFromSignature(signature: ISignature): string {
        let address = recoverPersonalSignature({ data: signature.nonce, signature: signature.value });
        return EthereumUtil.parseAddress(address);
    }

    public static parseAddress(address: string): string {
        return !_.isNil(address) ? normalize(address) : null;
    }

    public static isAddressesEqual(first: string, second: string): boolean {
        return EthereumUtil.parseAddress(first) === EthereumUtil.parseAddress(second);
    }

}
