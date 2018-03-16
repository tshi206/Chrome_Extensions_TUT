let menuItem = {
    "id": "speak",
    "title": "Speak",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(info => {
    if (info.menuItemId === "speak" && info.selectionText){
        chrome.tts.speak(info.selectionText, {'rate': 0.7})
    }
});