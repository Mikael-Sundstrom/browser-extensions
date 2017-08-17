function goToLink() {
    chrome.tabs.create({
        url: "https://www.fotbollskanalen.se/"
    });
};
chrome.browserAction.onClicked.addListener(goToLink);
goToLink();
