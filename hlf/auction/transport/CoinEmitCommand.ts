import { TransformUtil } from '@ts-core/common';
import { Matches, IsString, IsNumberString, IsOptional } from 'class-validator';
import { CoinUtil, HlfTransportCommandAsync } from '@hlf-core/common';
import { CommandName } from './Command';

export class CoinEmitCommand extends HlfTransportCommandAsync<ICoinEmitDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CommandName.COIN_EMIT;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinEmitDto) {
        super(CoinEmitCommand.NAME, TransformUtil.toClass(CoinEmitDto, request));
    }
}

export interface ICoinEmitDto {
    amount: string;
    coinUid: string;
    objectUid: string;
    transactionHash?: string;
}

export class CoinEmitDto {
    @IsNumberString()
    amount: string;

    @Matches(CoinUtil.UID_REG_EXP)
    coinUid: string;

    @Matches(CoinUtil.OBJECT_UID_REG_EXP)
    objectUid: string;

    @IsString()
    @IsOptional()
    transactionHash?: string;
}