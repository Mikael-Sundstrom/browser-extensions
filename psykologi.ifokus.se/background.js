function goToLink() {
  chrome.tabs.create(
    {
      url: getUrl()
    }
  );

  function getUrl() {
    return "http://psykologi.ifokus.se/";
  }
};
chrome.browserAction.onClicked.addListener(goToLink);
