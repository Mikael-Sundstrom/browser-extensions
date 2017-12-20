function goToLink() {
	chrome.tabs.create(
		{
			url: getUrl()
		}
	);

	function getUrl() {
		return "https://codeanywhere.com/editor/";
	}
};
chrome.browserAction.onClicked.addListener(goToLink);
