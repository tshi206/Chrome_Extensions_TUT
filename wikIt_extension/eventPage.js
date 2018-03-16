let menuItem = {
    "id": "wikit",
    "title": "Wikit",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

// This function takes care of invalid characters in the selection such as whitespace and '/'.
// The resulting string will be suitable to be appended to a URL.
let fixedEncodeURI = (str) => {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
};

chrome.contextMenus.onClicked.addListener(info => {
    if (info.menuItemId === "wikit" && info.selectionText){
        let wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(info.selectionText);
        let createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };
        chrome.windows.create(createData, window => {})
    }
});