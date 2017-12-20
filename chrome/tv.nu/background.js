function goToLink() {
  chrome.tabs.create({
    url: "https://www.tv.nu/"
  });
};
chrome.browserAction.onClicked.addListener(goToLink);
