import { BrowserWindow, Menu, MenuItem, MenuItemConstructorOptions } from "electron";
import { enableOrDisableAdblocker } from "./adblocker";
import clearCache from "./cache";
import openDevTools from "./dev-tools";
import { enableOrDisableDiscordRPC, enableOrDisableDiscordRPCLocationTracking } from "./discord";
import { Store } from "./store";
import { customUrl, newClubPenguinUrl, clubPenguinLegacyUrl, clubPenguinJourneyUrl, cppsioUrl, cppstoUrl, superClubPenguinUrl, clubPenguinC2Url, aventurePingouinUrl } from "./urlchanger";
import { toggleFullScreen } from "./window";

const createMenuTemplate = (store: Store, mainWindow: BrowserWindow): MenuItemConstructorOptions[] => {
    const options: MenuItemConstructorOptions = {
        id: '1',
        label: 'Options',
        submenu: [
            {
                label: 'Clear cache',
                click: () => { clearCache(mainWindow); }
            },
            {
                label: 'Open dev tools',
                accelerator: 'CommandOrControl+Shift+I',
                click: () => { openDevTools(mainWindow); }
            },
            {
                label: 'Reload',
                accelerator: 'F5',
                role: 'reload',
            },
            {
                label: 'Reload without cache',
                accelerator: 'CommandOrControl+R',
                click: () => { mainWindow.webContents.reloadIgnoringCache(); }
            },
            {
                label: 'Toggle Fullscreen',
                accelerator: 'F11',
                click: () => { toggleFullScreen(store, mainWindow); }
            },
            {
                label: 'Zoom In',
                role: 'zoomIn',
                accelerator: 'CommandOrControl+=',
            },
            {
                label: 'Zoom Out',
                role: 'zoomOut',
                accelerator: 'CommandOrControl+-',
            },

            {
                label: 'Reset Zoom',
                role: 'resetZoom',
                accelerator: 'CommandOrControl+0',
            },
        ]
    };

    const adblock: MenuItemConstructorOptions = {
        id: '2',
        label: 'Adblock',
        submenu: [
            {
                label: 'Enable/Disable Adblock',
                click: () => { enableOrDisableAdblocker(store, mainWindow); }
            }
        ]
    };

    const discord: MenuItemConstructorOptions = {
        id: '3',
        label: 'Discord',
        submenu: [
            {
                label: 'Enable/Disable Discord Rich Presence',
                click: () => { enableOrDisableDiscordRPC(store, mainWindow); }
            },
            {
                label: 'Enable/Disable Discord Rich Presence location tracking',
                click: () => { enableOrDisableDiscordRPCLocationTracking(store, mainWindow); }
            }
        ]
    };

    const cppslist: MenuItemConstructorOptions = {
        id: '4',
        label: 'CPPS List',
        submenu: [
            {
                label: 'New Club Penguin',
                click: () => { newClubPenguinUrl(store, mainWindow); }
            },
            {
                label: 'Club Penguin Legacy',
                click: () => { clubPenguinLegacyUrl(store, mainWindow); }
            },
            {
                label: 'Club Penguin Journey',
                click: () => { clubPenguinJourneyUrl(store, mainWindow); }
            },
            {
                label: 'Super Club Penguin',
                click: () => { superClubPenguinUrl(store, mainWindow); }
            },
            {
                label: 'Club Penguin Chapter 2',
                click: () => { clubPenguinC2Url(store, mainWindow); }
            },
            {
                label: 'Aventure Pingouin',
                click: () => { aventurePingouinUrl(store, mainWindow); }
            },
            {
                label: 'CPPS.io',
                click: () => { cppsioUrl(store, mainWindow); }
            },
            {
                label: 'CPPS.to',
                click: () => { cppstoUrl(store, mainWindow); }
            },
            {
                label: 'Custom URL',
                click: () => { customUrl(store, mainWindow); }
            }
        ]
    };

    return [
        options,
        adblock,
        discord,
        cppslist
    ];
};

const startMenu = (store: Store, mainWindow: BrowserWindow) => {
    const menuTemplate = createMenuTemplate(store, mainWindow);

    buildMenu(menuTemplate);
};

const buildMenu = (menuTemplate: MenuItemConstructorOptions[] | MenuItem[]) => {
    const menu = Menu.buildFromTemplate(menuTemplate);

    Menu.setApplicationMenu(menu);
};

export default startMenu;
