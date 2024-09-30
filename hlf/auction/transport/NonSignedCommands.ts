import { AuctionCheckCommand } from "./AuctionCheckCommand";
import { NicknameGetCommand } from "./NicknameGetCommand";
import { CoinGetCommand } from "./CoinGetCommand";
import { CoinBalanceGetCommand } from "./CoinBalanceGetCommand";
import { GenesisGetCommand } from "./GenesisGetCommand";
import { AuctionAddConditionsGetCommand } from "./AuctionAddConditionsGetCommand";
import { AuctionBidConditionsGetCommand } from "./AuctionBidConditionsGetCommand";

export const NON_SIGNED_COMMANDS: Array<string> = [
    CoinGetCommand.NAME,
    GenesisGetCommand.NAME,
    NicknameGetCommand.NAME,
    AuctionCheckCommand.NAME,
    CoinBalanceGetCommand.NAME,
    AuctionAddConditionsGetCommand.NAME,
    AuctionBidConditionsGetCommand.NAME,
]