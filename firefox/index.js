/* eslint-env node */
const buttons = require('sdk/ui/button/action');
const notifications = require('sdk/notifications');
const {Cc, Ci} = require('chrome');
const cache = Cc['@mozilla.org/network/cache-storage-service;1'].getService(Ci.nsICacheStorageService);
const self = require('sdk/self');

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

    notifications.notify({
        title: 'Cache Cleared',
        text: 'Refresh Page',
        iconURL: './icon-64.png'
    });
});
