import { AppObject, Component, ComponentPageBody } from 'backappjh';
import { ControlSign } from '../control/ControlSign';
import { Util } from './util';
import { Authentication } from '../user/authentication';
import { Permission } from '../user/permission';
import { User } from '../user/user';

export class SignUp extends AppObject {

    constructor(father?: Component) {
        super(father);
        this.init();
    }

    private init() {
        let _self = this;
    }

    public signUp(component) {
        Util.getInstance().setCurrentPageBody(this.getPageBody());
        // console.log('createUser!!!');
        let divisor: Component = <Component>(<ComponentPageBody>component.getFather().getFather().getFather());
        let arrayField: Array<HTMLInputElement> = new Array<HTMLInputElement>();
        arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[0].arrayAppObject[0].arrayAppObject[0]).getElement());
        arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[1].arrayAppObject[0].arrayAppObject[0]).getElement());
        arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[1].arrayAppObject[1].arrayAppObject[0]).getElement());
        arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[2].arrayAppObject[0].arrayAppObject[0]).getElement());
        arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[2].arrayAppObject[1].arrayAppObject[0]).getElement());
        // arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[3].arrayAppObject[0].arrayAppObject[0]).getElement());
        arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[3].arrayAppObject[0].arrayAppObject[0]).getElement());
        arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[3].arrayAppObject[1].arrayAppObject[0]).getElement());
        arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[3].arrayAppObject[2].arrayAppObject[0]).getElement());
        console.log(arrayField[0].value, arrayField[1].value, arrayField[2].value,
            arrayField[3].value, arrayField[4].value, arrayField[5].value,
            arrayField[6].value, arrayField[7].value);

        if (Util.getInstance().checkEquals(arrayField[6], arrayField[7]) && !Util.getInstance().checkArrayEmpty(arrayField)) {
            Util.getInstance().notificationNone();
            let auth = new Authentication(arrayField[6].value, Permission.User);
            let user = new User(arrayField[5].value, arrayField[0].value, new Date(arrayField[1].value), arrayField[2].value,
                arrayField[3].value, arrayField[4].value, auth);
            console.log(user);
            ControlSign.getInstance().signUp(user);
        } else {
            Util.getInstance().notificationMissingFields();
        }
    }

    public getPassword(component) {
        console.log('GET');
        console.log(ControlSign.getInstance().getTempUser());
        if (ControlSign.getInstance().getTempUser() !== undefined) {
            console.log(component);
            let father: Component = <Component>(component.getFather());
            (<HTMLInputElement>father.getElement()).value = ControlSign.getInstance().getTempUser().authentication.password;
        }
    }

    public getEmail(component) {
        console.log('GET');
        console.log(ControlSign.getInstance().getTempUser());
        if (ControlSign.getInstance().getTempUser() !== undefined) {
            console.log(component);
            let father: Component = <Component>(component.getFather());
            (<HTMLInputElement>father.getElement()).value = ControlSign.getInstance().getTempUser().email;
        }
    }

    public signOut(){
        ControlSign.getInstance().signOut();
    }

    public subscribeSign(callback) {
        ControlSign.getInstance().subscribeSign(callback);
    }

    public unsubscribeSign(callback) {
        ControlSign.getInstance().unsubscribeSign(callback);
    }

    public publishSign(data) {
        ControlSign.getInstance().publishSign(data);
    }
}