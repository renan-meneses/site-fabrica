import { AppObject, Component, ComponentDataInput, ComponentOption, ComponentComboBox, ComponentPageFrame, ComponentRouter } from 'backappjh';
// import { ControlLanguageSettings } from '../control/controlLanguageSettings';

export class LanguageSettings extends AppObject {

    // private static instance: LanguageSettings;
    private static languages: Array<any>;

    // public static getInstance(father?: Component): LanguageSettings {
    //     if (!LanguageSettings.instance) {
    //         LanguageSettings.instance = new LanguageSettings(father);
    //     }
    //     return LanguageSettings.instance;
    // }

    constructor(father?: Component) {
        super(father);
        let _self = this;
        this.init();
        if (LanguageSettings.languages === undefined) {
            LanguageSettings.languages = [];
        }
    }

    private init() {

    }

    public getLanguages() {
        return LanguageSettings.languages;
    }

    public renderAfterUpdate() {
        super.renderAfterUpdate();
        console.log('RENDER!!');
    }

    protected updateLanguage(jSON) {
        console.log('updateLanguage!!', jSON);
        this.run();
    }

    public run() {
        let frame = this.getPageFrame();
        let jSON = frame.getFullPage().getLanguage();
        console.log('run!!', jSON);
        if (LanguageSettings.languages.length === 0) {
            for (let lIndex = 0; lIndex < jSON.length; lIndex++) {
                let code = jSON[lIndex]['language'];
                let name = jSON[lIndex]['languageName'];
                let newLanguage = {
                    'code': code,
                    'name': name
                }
                LanguageSettings.languages.push(newLanguage);
            }
            // console.log('NEW:', Languages.languages);
        }

        let _self = this;

        let currentLanguage = this.getCurrentLanguage();
        // let index = 0;
        let comboBox = <ComponentComboBox>this.father.getFather();
        for (let index = 0; index < LanguageSettings.languages.length; index++) {
            let language = LanguageSettings.languages[index];
            let option: ComponentOption = new ComponentOption(comboBox);
            option.getElement().innerHTML = language.name;
            // console.log(language.name);
            (comboBox).arrayOption.push(option);
            if (language.code === currentLanguage) {
                (<HTMLSelectElement>(comboBox).getElement()).selectedIndex = index;
            }
        }
    }

    public setLanguage(component) {
        console.log('setLanguage!!');
        let languages = this.getLanguages();
        // console.log('RECEIVED!!', component);
        let element: any = (<ComponentDataInput>component).getElement();
        let languageName = element.options[element.selectedIndex].text;
        // let index = 0;
        for (let index = 0; index < languages.length; index++) {
            let language = languages[index];
            if (language.name === languageName) {
                (<ComponentDataInput>component).setCurrentLanguage(language.code);
                this.refreshAll();
                // (<ComponentDataInput>component).getJSONPromise((<ComponentDataInput>component).getPage());
                return;
            }
        }
    }

    public refreshAll() {
        console.log('refresh');
        this.getPageBody().refresh();
        this.getHeader().refresh();
        this.getFooter().refresh();
        this.getNotification().refresh();
        this.run();
    }
}