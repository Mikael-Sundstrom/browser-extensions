function goToLink() {
  chrome.tabs.create({
    url: "https://github.com/"
  });
};
chrome.browserAction.onClicked.addListener(goToLink);
