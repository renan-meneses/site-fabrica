import { AddressType } from './addressType';
import { StreetType } from './streetType';

export class Address {
    
    type: AddressType;
    streetType: StreetType;
    street: string;
    number: number;
    complement: string;
    district: string;
    city: string;
    state: string;
    zipCode: string;

}