import { ValidateUtil } from "./ValidateUtil";

export class RegExpUtil {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static DATE_TIME_PATTERN = '[0-9]{14}';
    public static ETH_ADDRESS_PATTERN = '0x[0-9a-f]{40}';
    public static TRANSACTION_HASH_PATTERN = '[0-9a-fA-F]{64}';

    public static NICKNAME_PATTERN = '[0-9a-z_]{1,22}';
    public static NICKNAME_REG_EXP = new RegExp(`^${RegExpUtil.NICKNAME_PATTERN}$`);
    public static NICKNAME_UID_REG_EXP = new RegExp(`^nickname/${RegExpUtil.NICKNAME_PATTERN}$`);

    public static USER_UID_REG_EXP = new RegExp(`^user/${RegExpUtil.ETH_ADDRESS_PATTERN}$`);
    public static AUCTION_UID_REG_EXP = new RegExp(`^auction/${RegExpUtil.NICKNAME_PATTERN}$`);

    public static ETH_ADDRESS_REG_EXP = new RegExp(`^${RegExpUtil.ETH_ADDRESS_PATTERN}$`);
    public static DESCRIPTION_REG_EXP = new RegExp(`^.{${ValidateUtil.DESCRIPTION_MIN_LENGTH},${ValidateUtil.DESCRIPTION_MAX_LENGTH}}`);
}
