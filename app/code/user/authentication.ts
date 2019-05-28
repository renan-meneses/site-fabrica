import { Permission } from './permission';

export class Authentication {

    password: string;
    permission: Permission;

    constructor(password: string,
        permission?: Permission) {
        this.password = password;
        if (permission) {
            this.permission = permission;
        } else {
            this.permission = Permission.User;
        }
    }
}