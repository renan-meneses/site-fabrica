import { AppObject, Component, ComponentPageBody } from 'backappjh';
import { ControlSign } from '../control/ControlSign';
import { Util } from './util';
import { User } from '../user/user';
import { Authentication } from '../user/authentication';

export class SignIn extends AppObject {

    constructor(father?: Component) {
        super(father);
        this.init();
    }

    private init() {
        let _self = this;
    }

    public signIn(component) {
        // console.log('signIn');
        // Util.getInstance().setCurrentHeader(this.getHeader());
        Util.getInstance().setCurrentPageBody(this.getPageBody());
        let divisor: Component = <Component>(<ComponentPageBody>component.getFather().getFather().getFather());
        let arrayField: Array<HTMLInputElement> = new Array<HTMLInputElement>();
        arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[0].arrayAppObject[0].arrayAppObject[0]).getElement());
        arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[1].arrayAppObject[0].arrayAppObject[0]).getElement());
        console.log(divisor, arrayField[0].value, arrayField[1].value);
        if (!Util.getInstance().checkArrayEmpty(arrayField)) {
            ControlSign.getInstance().signIn({ email: arrayField[0].value, password: arrayField[1].value });
        } else {
            Util.getInstance().notificationMissingFields();
        }
    }

    public signUp(component) {
        Util.getInstance().setCurrentPageBody(this.getPageBody());
        let divisor: Component = <Component>(<ComponentPageBody>component.getFather().getFather().getFather());
        let arrayField: Array<HTMLInputElement> = new Array<HTMLInputElement>();
        arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[0].arrayAppObject[0].arrayAppObject[0]).getElement());
        arrayField.push(<HTMLInputElement>(<Component>divisor.arrayAppObject[1].arrayAppObject[0].arrayAppObject[0]).getElement());
        let header = divisor.getHeader();
        // (<ComponentNotification>header.arrayAppObject[1]).goToNotification('none');
        ControlSign.getInstance().setTempUser(<User>{
            'email': arrayField[0].value,
            'authentication': new Authentication(arrayField[1].value)
        });
        Util.getInstance().goTo('signUp');
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