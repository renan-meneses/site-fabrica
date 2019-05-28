import { BasicApi, BasicAppHandler, BasicExternalHandler, Electron } from 'backapijh';
import { AppHandler } from './appHandler/appHandler';
import { ExternalHandler } from './externalHandler/externalHandler';
import { HardwareHandler } from './hardwareHandler/hardwareHandler';

export class Api extends BasicApi {
     constructor() {
         let hardwareHandler = new HardwareHandler();
         super(new AppHandler(hardwareHandler), new ExternalHandler(hardwareHandler));
     }
}