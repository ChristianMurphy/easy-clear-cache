/* eslint-env node */
const buttons = require('sdk/ui/button/action');
const tabs = require('sdk/tabs');
const {Cc, Ci} = require('chrome');
const cache = Cc['@mozilla.org/network/cache-storage-service;1'].getService(Ci.nsICacheStorageService);

const button = new buttons.ActionButton({
    id: 'easy-clear-cache',
    label: 'Clear Cache',
    icon: {
        16: './icon-16.png',
        32: './icon-32.png',
        64: './icon-64.png'
    }
});

button.on('click', () => {
    cache.clear();
    tabs.activeTab.reload();
});
