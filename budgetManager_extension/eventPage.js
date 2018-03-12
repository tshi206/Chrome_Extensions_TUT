let contextMenuItem = {
    "id": "spendMoney",
    // "title" - title that appears on the context menu (right-click menu)
    "title": "SpendMoney",
    // "contexts" - under what circumstances should the extension appear in the context menu
    // "selection" - extension only appears in the context menu when the user selects something
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem);

function isInt(value) {
    return !isNaN(value) &&
        parseInt(value) === Number(value) &&
        !isNaN(parseInt(value, 10))
}

chrome.contextMenus.onClicked.addListener((clickData) => {
    if (clickData.menuItemId === "spendMoney" && clickData.selectionText){
        if (isInt(clickData.selectionText)){
            chrome.storage.sync.get(['total', 'limit'], (obj) => {
                let newTotal = obj.total ? obj.total : 0;
                newTotal += parseInt(clickData.selectionText);
                chrome.storage.sync.set({'total': newTotal}, () => {
                    if (newTotal >= obj.limit){
                        let notifOptions = {
                            type: 'basic',
                            iconUrl: 'icon48.png',
                            title: 'Limit reached!',
                            message: "Uh oh! Looks like you've reached your limit!"
                        };
                        chrome.notifications.create('limitNotif', notifOptions)
                    }
                })
            })
        }
    }
});

chrome.storage.onChanged.addListener((changes, areaName) => {
    chrome.browserAction.setBadgeText({'text': changes.total.newValue.toString()});
    console.log(areaName)
});