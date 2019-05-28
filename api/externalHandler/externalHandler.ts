import { path, BasicApi, BasicExternalHandler, BasicSocket } from 'backapijh';
import { HardwareHandler } from '../hardwareHandler/hardwareHandler';

export class ExternalHandler extends BasicExternalHandler {
    constructor(hardwareHandler: HardwareHandler){
        super(hardwareHandler);
        this.hardwareHandler.setExternalHandler(this);
    }

    public configSocket(basicSocket:BasicSocket){
        let _self = this;
    }
}