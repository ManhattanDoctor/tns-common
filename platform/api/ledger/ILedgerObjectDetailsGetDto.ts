import { ITraceable } from "@ts-core/common";
import { IHlfObjectDetails } from "../IHlfObjectDetails";

export interface ILedgerObjectDetailsGetDto extends ITraceable {
    ledgerUid: string;
}

export declare type ILedgerObjectDetailsGetDtoResponse = IHlfObjectDetails;
