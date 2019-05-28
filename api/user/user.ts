import { Address } from './address';
import { Phone } from './phone';
import { Authentication } from './authentication';

export class User {

    // username: string;
    name: string;
    nickname: string;
    mother: string;
    father: string;
    uId: number; // rg
    uIdEmitter: string;
    uIdState: number;
    nUId: number; // cpf
    birth: Date;
    birthState: number;
    nationality: string;
    email: string;
    role: string;
    arrayAddress: Array<Address>;
    arrayPhone: Array<Phone>;
    authentication: Authentication;

    constructor(basicUser) {
        this.arrayAddress = new Array<Address>();
        this.arrayPhone = new Array<Phone>();

        this.email = basicUser.email;
        this.name = basicUser.name;
        this.nickname = basicUser.nickname;
        this.mother = basicUser.mother;
        this.father = basicUser.father;
        this.uId = basicUser.uId;
        this.uIdEmitter = basicUser.uIdEmitter;
        this.uIdState = basicUser.uIdState;
        this.nUId = basicUser.nUId;
        this.birth = basicUser.birth;
        this.birthState = basicUser.birthState;
        this.nationality = basicUser.nationality;
        this.email = basicUser.email;
        this.role = basicUser.role;

        this.authentication = new Authentication(basicUser.authentication.password, basicUser.authentication.permission);
    }
}
