/* global chrome */

function clearCache () {
    'use strict';
    chrome.browsingData.remove({
            since: 0
        },
        {
            appcache: true,
            cache: true
        },
        function () {
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'icon.png',
                title: 'Cache Cleared',
                message: 'Refresh Page'
            });
        }
    );
}

chrome.browserAction.onClicked.addListener(clearCache);
