import { TransformUtil, TraceUtil, ILogger, TransportHttp, ITransportHttpSettings } from '@ts-core/common';
import { IActionListDto, IActionListDtoResponse, } from './action';
import { IHlfObjectDetailsGetDto, IHlfObjectDetailsGetDtoResponse } from './hlf';
import { IUserGetDtoResponse, IUserListDto, IUserListDtoResponse } from './user';
import { ICoinBalanceListDto, ICoinBalanceListDtoResponse, ICoinGetDtoResponse, ICoinListDto, ICoinListDtoResponse } from './coin';
import { INicknameGetDtoResponse, INicknameListDto, INicknameListDtoResponse } from './nickname';
import { IAuctionGetDtoResponse, IAuctionListDto, IAuctionListDtoResponse } from './auction';
import { IInitDtoResponse } from './IInitDto';
import { Coin } from '../Coin';
import { User } from '../User';
import { Action } from '../Action';
import { Nickname } from '../Nickname';
import { CoinBalance } from '../CoinBalance';
import { Auction } from '../Auction';
import * as _ from 'lodash';

export class Client extends TransportHttp<ITransportHttpSettings> {

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(logger: ILogger, url?: string) {
        super(logger, { method: 'get', baseURL: url, isHandleError: true, isHandleLoading: true, headers: {} });
    }

    // --------------------------------------------------------------------------
    //
    //  Auth Methods
    //
    // --------------------------------------------------------------------------

    public async init(): Promise<IInitDtoResponse> {
        return this.call<IInitDtoResponse, void>(INIT_URL, { method: 'post' });
    }

    //--------------------------------------------------------------------------
    //
    // 	User Methods
    //
    //--------------------------------------------------------------------------

    public async userGet(id: number): Promise<IUserGetDtoResponse> {
        let item = await this.call<User>(`${USER_URL}/${id}`);
        return TransformUtil.toClass(User, item);
    }

    public async userList(data?: IUserListDto): Promise<IUserListDtoResponse> {
        let item = await this.call<IUserListDtoResponse, IUserListDto>(USER_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(User, item.items);
        return item;
    }

    //--------------------------------------------------------------------------
    //
    // 	Auction Methods
    //
    //--------------------------------------------------------------------------

    public async auctionGet(id: number): Promise<IAuctionGetDtoResponse> {
        let item = await this.call<Auction>(`${AUCTION_URL}/${id}`);
        return TransformUtil.toClass(Auction, item);
    }

    public async auctionList(data?: IAuctionListDto): Promise<IAuctionListDtoResponse> {
        let item = await this.call<IAuctionListDtoResponse, IAuctionListDto>(AUCTION_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(Auction, item.items);
        return item;
    }

    //--------------------------------------------------------------------------
    //
    // 	Nickname Methods
    //
    //--------------------------------------------------------------------------

    public async nicknameGet(id: number): Promise<INicknameGetDtoResponse> {
        let item = await this.call<Nickname>(`${NICKNAME_URL}/${id}`);
        return TransformUtil.toClass(Nickname, item);
    }

    public async nicknameList(data?: INicknameListDto): Promise<INicknameListDtoResponse> {
        let item = await this.call<INicknameListDtoResponse, INicknameListDto>(NICKNAME_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(Nickname, item.items);
        return item;
    }

    //--------------------------------------------------------------------------
    //
    // 	Coin Methods
    //
    //--------------------------------------------------------------------------

    public async coinGet(id: number): Promise<ICoinGetDtoResponse> {
        let item = await this.call<Coin>(`${COIN_URL}/${id}`);
        return TransformUtil.toClass(Coin, item);
    }

    public async coinList(data?: ICoinListDto): Promise<ICoinListDtoResponse> {
        let item = await this.call<ICoinListDtoResponse, ICoinListDto>(COIN_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(Coin, item.items);
        return item;
    }

    public async coinBalanceGet(id: number): Promise<ICoinGetDtoResponse> {
        let item = await this.call<Coin>(`${COIN_BALANCE_URL}/${id}`);
        return TransformUtil.toClass(Coin, item);
    }

    public async coinBalanceList(data?: ICoinBalanceListDto): Promise<ICoinBalanceListDtoResponse> {
        let item = await this.call<ICoinBalanceListDtoResponse, ICoinBalanceListDto>(COIN_BALANCE_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(CoinBalance, item.items);
        return item;
    }

    //--------------------------------------------------------------------------
    //
    // 	Action Methods
    //
    //--------------------------------------------------------------------------

    public async actionList(data?: IActionListDto): Promise<IActionListDtoResponse> {
        let item = await this.call<IActionListDtoResponse, IActionListDto>(ACTION_URL, { data: TraceUtil.addIfNeed(data) });
        item.items = TransformUtil.toClassMany(Action, item.items);
        return item;
    }

    //--------------------------------------------------------------------------
    //
    // 	Hlf Methods
    //
    //--------------------------------------------------------------------------

    public async hlfObjectDetailsGet(uid: string): Promise<IHlfObjectDetailsGetDtoResponse> {
        return this.call<IHlfObjectDetailsGetDtoResponse, IHlfObjectDetailsGetDto>(`${HLF_OBJECT_DETAILS_URL}`, { data: TraceUtil.addIfNeed({ uid }) });
    }
}

const PREFIX = 'api/';

export const INIT_URL = PREFIX + 'init';
export const USER_URL = PREFIX + 'user';
export const COIN_URL = PREFIX + 'coin';
export const ACTION_URL = PREFIX + 'action';
export const AUCTION_URL = PREFIX + 'auction';
export const NICKNAME_URL = PREFIX + 'nickname';
export const COIN_BALANCE_URL = PREFIX + 'coinBalance';

export const HLF_OBJECT_DETAILS_URL = PREFIX + 'hlfObjectDetails';
