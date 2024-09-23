import { User as HlfUser } from '../hlf/acl';

export class User extends HlfUser {
    id: number;
    address: string;
}