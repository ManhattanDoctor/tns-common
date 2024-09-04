import { TransformUtil } from '@ts-core/common';
import { HlfTransportCommandAsync } from '@hlf-core/common';
import { CommandName } from './Command';
import { CoinHoldDto, ICoinHoldDto } from './CoinHoldCommand';

export class CoinUnholdCommand extends HlfTransportCommandAsync<CoinUnholdDto, void> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = CommandName.COIN_UNHOLD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinHoldDto) {
        super(CoinUnholdCommand.NAME, TransformUtil.toClass(CoinUnholdDto, request));
    }
}

export interface CoinUnholdDto extends ICoinHoldDto { }

export class CoinUnholdDto extends CoinHoldDto { }