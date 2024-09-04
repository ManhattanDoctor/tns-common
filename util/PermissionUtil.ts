import * as _ from 'lodash';
import { UserRoleName } from "../platform/user";

export class PermissionUtil {
    // --------------------------------------------------------------------------
    //
    //  Common Methods
    //
    // --------------------------------------------------------------------------

    public static isHasRole(item: UserRoleName | Array<UserRoleName>, items: UserRoleName | Array<UserRoleName>): boolean {
        if (!_.isArray(item)) {
            item = [item];
        }
        if (!_.isArray(items)) {
            items = [items];
        }
        return !_.isEmpty(_.intersection(item, items));
    }
}