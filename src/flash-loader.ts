import { App } from "electron";
import path = require("path");

const getPluginName = () => {
    let pluginName: string;

    switch (process.platform) {
        case 'win32':
            pluginName = 'assets/flash/pepflashplayer.dll';
            break;
        case 'darwin':
            pluginName = 'assets/flash/PepperFlashPlayer.plugin';
            break;
        case 'linux':
            pluginName = 'assets/flash/libpepflashplayer.so';
            break;
    }

    return pluginName;
};

const loadFlashPlugin = (app: App) => {
    const pluginName = getPluginName();

    app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, pluginName));
};

export default loadFlashPlugin;
