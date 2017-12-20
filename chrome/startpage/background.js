function goToLink() {
  chrome.tabs.create({
    url: getUrl()
  });

  function getUrl() {
    return "https://mikael-sundstrom.github.io/startpage/";
  }
};
chrome.browserAction.onClicked.addListener(goToLink);
