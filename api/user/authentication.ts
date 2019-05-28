import { Permission } from './permission';
import * as  crypto from 'crypto';

export class Authentication {

    passwordHash: string;
    salt: string;
    permission: Permission;

    public static generatePasswordHashFromSalt(password: string, salt: string) {
        let size: number = parseInt(process.env.HASH_SIZE, 10); // 32
        let keyMultiplier: number = parseInt(process.env.HASH_MULTIPLIER, 10); // 4
        let iterations: number = parseInt(process.env.HASH_ITERATIONS, 10); // 1024
        let digest: string = process.env.HASH_DIGEST; // 'sha512'

        let key = crypto.pbkdf2Sync(password, salt, iterations, (size * keyMultiplier), digest);

        return { passwordHash: key.toString('hex'), salt: salt };
    }

    constructor(password: string,
        permission: Permission) {
        let generated = this.generatePasswordHash(password);
        this.passwordHash = generated.passwordHash;
        this.salt = generated.salt;
        this.permission = permission;
    }



    private generatePasswordHash(password: string) {
        let size: number = parseInt(process.env.HASH_SIZE, 10); // 32
        let keyMultiplier: number = parseInt(process.env.HASH_MULTIPLIER, 10); // 4
        let iterations: number = parseInt(process.env.HASH_ITERATIONS, 10); // 1024
        let digest: string = process.env.HASH_DIGEST; // 'sha512'

        let salt = crypto.randomBytes(size).toString('hex');
        let key = crypto.pbkdf2Sync(password, salt, iterations, (size * keyMultiplier), digest);

        return { passwordHash: key.toString('hex'), salt: salt };
    }
}
