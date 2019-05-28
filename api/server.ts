import { Server } from 'backapijh';
import { Api } from './api';
import * as os from 'os';

const api = new Api();
let path = os.platform() === 'win32' ? process.env.WIN32_VIDEOS_PATH : process.env.LINUX_VIDEOS_PATH;
let arrayPath: Array<string> = ['node_modules/backappjh', 'app', 'app/code/onLoad', 'dist', path];
let server = new Server(api, arrayPath);
server.run();
