import { AppObject, Component, ComponentPageBody, ComponentView, ComponentRouter } from 'backappjh';
// import { ControlSign } from '../control/ControlSign';

export class Util extends AppObject {
    private static instance: Util;
    private currentPageBody;
    // private currentHeader;

    public static getInstance(father?: Component): Util {
        if (!Util.instance) {
            Util.instance = new Util(father);
        }
        return Util.instance;
    }

    constructor(father?: Component) {
        super(father);
        this.init();
    }

    private init() {
        let _self = this;
    }

    public getCurrentPageBody(){
        return Util.getInstance().currentPageBody;
    }

    public setCurrentPageBody(pageBody){
        Util.getInstance().currentPageBody = pageBody;
    }

    public checkArrayEmpty(arrayField: Array<HTMLInputElement>) {
        let empty = false;
        arrayField.forEach(field => {
            if (this.checkEmpty(field)) {
                empty = true;
            }
        });
        return empty;
    }

    public checkEmpty(field: HTMLInputElement) {
        if (field.value === '') {
            this.errorField(field);
            return true;
        }
        this.okField(field);
        return false;
    }

    public errorField(field: HTMLInputElement) {
        field.setAttribute('style', 'border-bottom-color: red');
    }

    public okField(field: HTMLInputElement) {
        field.setAttribute('style', 'border-bottom-color: white');
    }

    public checkEquals(field0: HTMLInputElement, field1: HTMLInputElement) {
        if (field0.value !== field1.value) {
            this.errorField(field1);
            return false;
        }
        this.okField(field1);
        return true;
    }

    public goToSignUp(){
        Util.getInstance().goTo('signUp');
    }

    public goToSignIn(){
        Util.getInstance().goTo('signIn');
    }

    public notificationMissingFields() {
        Util.getInstance().notificationCustom('missingFields');
    }

    public notificationNone() {
        Util.getInstance().notificationCustom('none');
    }

    public notificationCustom(message) {
        Util.getInstance().getCurrentPageBody().getNotification().goTo(message);
    }

    public refreshHeader() {
        let header: Component;
        let pageBody;
        if (this !== undefined) {
            header = this.getHeader();
            pageBody = this.getPageBody();
        } else {
            // header = UserManegement.getInstance().getHeader();
            // pageBody = UserManegement.getInstance().getPageBody();
        }
        if (header !== undefined) {
            header.getFather();
        } else {
            header = pageBody.getFather().header;
        }

        // (<Component>header.arrayAppObject[0]).insert(header.getElement());
    }

    public goTo(page: string) {
        let pageBody;
        pageBody = Util.getInstance().getCurrentPageBody();
        pageBody.goTo(page);
        Util.getInstance().notificationNone();
    }

    public getInfo(user/*: User*/) {
        // let menuDivisor = this.getHeader().arrayAppObject[0].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0];

        // let username = <AppObject>menuDivisor.arrayAppObject[0].arrayAppObject[1].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0];
        // let information = <ComponentInformation>username.arrayAppObject[0];
        // information.getElement().innerHTML = user.authentication.username;

        // let group = <AppObject>menuDivisor.arrayAppObject[0].arrayAppObject[2].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0].arrayAppObject[0];
        // information = <ComponentInformation>group.arrayAppObject[0];
        // let auth: Permission = user.authentication.permission;
        // information.getElement().innerHTML = Permission[auth];
        // information.information = Permission[auth];
        // information.renderAfterUpdateJSON();
    }
}