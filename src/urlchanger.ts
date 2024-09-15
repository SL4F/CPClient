import { BrowserWindow, dialog } from "electron";
import { Store } from "./store";
import prompt from 'electron-prompt';

export const getUrlFromStore = (store: Store) => {
    return store.public.get('url');
};

const setUrlFromStore = (store: Store, url: string) => {
    store.public.set('url', url);
};

const customUrl = async (store: Store, mainWindow: BrowserWindow) => {
    const url = getUrlFromStore(store);

    const confirmationResult = await dialog.showMessageBox(mainWindow, {
        buttons: ['Yes', 'No', 'Cancel'],
        title: 'Do you really want to change the game URL?',
        message: `The current URL is: '${url}', after setting the url the page will reload.`,
    });

    if (confirmationResult.response !== 0) {
        return;
    }

    const result = await prompt({
        title: 'Set the Club Penguin URL',
        label: 'URL:',
        value: url,
        inputAttrs: {
            type: 'url'
        },
        type: 'input',

    }, mainWindow);

    if (result === null) {
        return;
    }

    setUrlFromStore(store, result);

    mainWindow.loadURL(result);
};

const newClubPenguinUrl = async (store: Store, mainWindow: BrowserWindow) => {
    const url = getUrlFromStore(store);

    const confirmationResult = await dialog.showMessageBox(mainWindow, {
        buttons: ['Yes', 'No', 'Cancel'],
        title: 'Do you really want to change the game URL?',
        message: `The current URL is: '${url}', after setting the url the page will reload.`,
    });

    if (confirmationResult.response !== 0) {
        return;
    }

    setUrlFromStore(store, 'https://newcp.net');

    mainWindow.loadURL('https://newcp.net');
};

const clubPenguinLegacyUrl = async (store: Store, mainWindow: BrowserWindow) => {
    const url = getUrlFromStore(store);

    const confirmationResult = await dialog.showMessageBox(mainWindow, {
        buttons: ['Yes', 'No', 'Cancel'],
        title: 'Do you really want to change the game URL?',
        message: `The current URL is: '${url}', after setting the url the page will reload.`,
    });

    if (confirmationResult.response !== 0) {
        return;
    }

    setUrlFromStore(store, 'https://cplegacy.com');

    mainWindow.loadURL('https://cplegacy.com');
};

const clubPenguinJourneyUrl = async (store: Store, mainWindow: BrowserWindow) => {
    const url = getUrlFromStore(store);

    const confirmationResult = await dialog.showMessageBox(mainWindow, {
        buttons: ['Yes', 'No', 'Cancel'],
        title: 'Do you really want to change the game URL?',
        message: `The current URL is: '${url}', after setting the url the page will reload.`,
    });

    if (confirmationResult.response !== 0) {
        return;
    }

    setUrlFromStore(store, 'https://cpjourney.net');

    mainWindow.loadURL('https://cpjourney.net');
};

const cppsioUrl = async (store: Store, mainWindow: BrowserWindow) => {
    const url = getUrlFromStore(store);

    const confirmationResult = await dialog.showMessageBox(mainWindow, {
        buttons: ['Yes', 'No', 'Cancel'],
        title: 'Do you really want to change the game URL?',
        message: `The current URL is: '${url}', after setting the url the page will reload.`,
    });

    if (confirmationResult.response !== 0) {
        return;
    }

    setUrlFromStore(store, 'https://cpps.io');

    mainWindow.loadURL('https://cpps.io');
};

const cppstoUrl = async (store: Store, mainWindow: BrowserWindow) => {
    const url = getUrlFromStore(store);

    const confirmationResult = await dialog.showMessageBox(mainWindow, {
        buttons: ['Yes', 'No', 'Cancel'],
        title: 'Do you really want to change the game URL?',
        message: `The current URL is: '${url}', after setting the url the page will reload.`,
    });

    if (confirmationResult.response !== 0) {
        return;
    }

    setUrlFromStore(store, 'https://cpps.to');

    mainWindow.loadURL('https://cpps.to');
};

const superClubPenguinUrl = async (store: Store, mainWindow: BrowserWindow) => {
    const url = getUrlFromStore(store);

    const confirmationResult = await dialog.showMessageBox(mainWindow, {
        buttons: ['Yes', 'No', 'Cancel'],
        title: 'Do you really want to change the game URL?',
        message: `The current URL is: '${url}', after setting the url the page will reload.`,
    });

    if (confirmationResult.response !== 0) {
        return;
    }

    setUrlFromStore(store, 'https://supercpps.com');

    mainWindow.loadURL('https://supercpps.com');
};

const clubPenguinC2Url = async (store: Store, mainWindow: BrowserWindow) => {
    const url = getUrlFromStore(store);

    const confirmationResult = await dialog.showMessageBox(mainWindow, {
        buttons: ['Yes', 'No', 'Cancel'],
        title: 'Do you really want to change the game URL?',
        message: `The current URL is: '${url}', after setting the url the page will reload.`,
    });

    if (confirmationResult.response !== 0) {
        return;
    }

    setUrlFromStore(store, 'https://cpchapter2.com');

    mainWindow.loadURL('https://cpchapter2.com');
};

const aventurePingouinUrl = async (store: Store, mainWindow: BrowserWindow) => {
    const url = getUrlFromStore(store);

    const confirmationResult = await dialog.showMessageBox(mainWindow, {
        buttons: ['Yes', 'No', 'Cancel'],
        title: 'Do you really want to change the game URL?',
        message: `The current URL is: '${url}', after setting the url the page will reload.`,
    });

    if (confirmationResult.response !== 0) {
        return;
    }

    setUrlFromStore(store, 'https://aventurepingouin.com');

    mainWindow.loadURL('https://aventurepingouin.com');
};

export { customUrl, newClubPenguinUrl, clubPenguinLegacyUrl, clubPenguinJourneyUrl, cppsioUrl, cppstoUrl, superClubPenguinUrl, clubPenguinC2Url, aventurePingouinUrl };