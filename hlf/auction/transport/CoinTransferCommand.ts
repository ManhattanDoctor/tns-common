import { TransformUtil } from '@ts-core/common';
import { Matches, IsNumberString } from 'class-validator';
import { CoinUtil, HlfTransportCommandAsync } from '@hlf-core/common';
import { CommandName } from './Command';

export class CoinTransferCommand extends HlfTransportCommandAsync<ICoinTransferDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CommandName.COIN_TRANSFER;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinTransferDto) {
        super(CoinTransferCommand.NAME, TransformUtil.toClass(CoinTransferDto, request));
    }
}

export interface ICoinTransferDto {
    to: string;
    amount: string;
    coinUid: string;
}

class CoinTransferDto implements ICoinTransferDto {
    @Matches(CoinUtil.OWNER_UID_REG_EXP)
    to: string;

    @IsNumberString()
    amount: string;

    @Matches(CoinUtil.COIN_ID_REG_EXP)
    coinUid: string;
}
