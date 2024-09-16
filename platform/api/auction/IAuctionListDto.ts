import { ITraceable, IPaginable, IPagination } from '@ts-core/common';
import { Auction } from '../../Auction';

export interface IAuctionListDto extends IPaginable<Auction>, ITraceable { }

export interface IAuctionListDtoResponse extends IPagination<Auction> { }
