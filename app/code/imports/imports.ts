import * as loader from './../onLoad/loader';
import { LanguageSettings } from '../view/languageSettings';
import { SignIn } from '../view/signIn';
import { Header } from '../view/header';
import { ControlSign } from '../control/ControlSign';
import { SignUp } from '../view/signUp';
import { Util } from '../view/util';
try { require('./../../style/app.css'); } catch (e) { console.log('Error CSS'); };

let w: any = window;
w.FontAwesomeConfig = {
    searchPseudoElements: true
}

export {
    loader,
    LanguageSettings,
    SignIn,
    SignUp,
    Util,
    ControlSign,
    Header
};
