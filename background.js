chrome.runtime.onInstalled.addListener(function() {
    chrome.webNavigation.onCompleted.addListener(function() {
      chrome.tabs.executeScript({
        file: 'index.js'
      });
    }, {url: [{urlMatches : 'https://web.whatsapp.com/*'}]});
  });
  