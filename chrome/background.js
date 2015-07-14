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
            chrome.tabs.reload({
                bypassCache: true
            });
        }
    );
}

chrome.browserAction.onClicked.addListener(clearCache);
