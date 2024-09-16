import { TransformUtil } from "@ts-core/common";
import { Matches, IsNumberString } from 'class-validator';
import { CoinEvent, ICoinEventDto } from "./CoinEvent";
import { RegExpUtil } from "../../../util";

export interface ICoinEditedEventDto extends ICoinEventDto {
    amount: string;
    objectUid: string;
}

export class CoinEditedEvent extends CoinEvent<ICoinEditedEventDto> {
    constructor(name: string, data: ICoinEditedEventDto) {
        super(name, TransformUtil.toClass(CoinEditedEventDto, data));
    }
}

export class CoinEditedEventDto implements ICoinEditedEventDto {
    @IsNumberString()
    amount: string;

    @Matches(RegExpUtil.COIN_UID_REG_EXP)
    coinUid: string;

    @Matches(RegExpUtil.COIN_OBJECT_UID_REG_EXP)
    objectUid: string;
}
