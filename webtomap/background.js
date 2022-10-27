// background.js

let textOfHtml = 'default'; // default

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ textOfHtml }); // access storage 
  console.log('Default text of html set to %s', `text: ${textOfHtml}`);
});