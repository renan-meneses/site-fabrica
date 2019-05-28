import { Address } from './address';
import { Phone } from './phone';
import { Authentication } from './authentication';

export class User {

    name: string;
    birth: Date;
    country: string;
    state: string;
    city: string;

    nickname: string;
    mother: string;
    father: string;
    uId: number; // rg
    uIdEmitter: string;
    uIdState: number;
    nUId: number; // cpf
    birthState: number;
    nationality: string;
    email: string;
    role: string;
    arrayAddress: Array<Address>;
    arrayPhone: Array<Phone>;
    authentication: Authentication;

    constructor(
        email: string,
        name: string,
        birth: Date,
        country: string,
        state: string,
        city: string,
        authentication: Authentication) {
        this.email = email;
        this.arrayAddress = new Array<Address>();
        this.arrayPhone = new Array<Phone>();
        this.name = name;
        this.birth = birth;
        this.country = country;
        this.state = state;
        this.city = city;
        this.authentication = authentication
    }

}
