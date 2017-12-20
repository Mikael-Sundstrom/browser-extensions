function goToLink() {
  chrome.tabs.create({
    url: getUrl()
  });

  function getUrl() {
    return "https://www.fotbollskanalen.se/";
  }
};
chrome.browserAction.onClicked.addListener(goToLink);
