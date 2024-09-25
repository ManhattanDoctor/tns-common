import { Sha512 } from "@ts-core/common";
import { HlfObjectType } from "../../hlf";
import * as _ from 'lodash';

export interface IHlfObjectDetails {
    id: number;
    type: HlfObjectType;
    name: string;
    picture: string;
    description?: string;
}

export function hlfObjectPicture(uid: string, options?: IHlfObjectPictureOptions): string {
    let { display, rating, size } = options;
    if (_.isNil(display)) {
        display = 'identicon';
    }
    if (_.isNil(rating)) {
        rating = 'g';
    }
    if (_.isNil(size)) {
        size = '200';
    }
    return `https://www.gravatar.com/avatar/${Sha512.hex(uid)}?s=${size}&d=${display}&r=${rating}`;
}

export interface IHlfObjectPictureOptions {
    size?: string;
    rating?: string;
    display?: string;
}