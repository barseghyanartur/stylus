'use strict';

document.body.textContent = chrome.i18n.getMessage('dysfunctional');
Object.assign(document.body.appendChild(document.createElement('a')), {
  href: chrome.runtime.getURL('manifest.json'),
  textContent: chrome.runtime.getURL('manifest.json'),
  target: '_blank',
});
