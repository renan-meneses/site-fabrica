import { BasicAppHandler, BasicSocket, BasicHardwareHandler } from 'backapijh';
import { HardwareHandler } from '../hardwareHandler/hardwareHandler';

export class AppHandler extends BasicAppHandler {
    constructor(hardwareHandler: HardwareHandler){
        super(hardwareHandler);
    }

    public configSocket(basicSocket: BasicSocket){
        let _self = this;
        basicSocket.on('signUp', (user) => { _self.hardwareHandler.signUp(user, basicSocket); });
        basicSocket.on('signIn', (user) => { _self.hardwareHandler.signIn(user, basicSocket); });
    }
}