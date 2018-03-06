$(() => {

    chrome.storage.sync.get('limit', (obj) => {
        $('#limit').val(obj.limit)
    });

    $('#saveLimit').on('click', () => {
        let limit = $('#limit').val();
        if (limit){
            chrome.storage.sync.set({'limit': limit}, () => {
                close()
            })
        }
    });

    $('#resetTotal').on('click', () => {
        chrome.storage.sync.set({'total': 0}, () => {
            let notifOptions = {
                type: 'basic',
                iconUrl: 'icon48.png',
                title: 'Total reset!',
                message: "Total has been reset to 0!"
            };
            chrome.notifications.create('totalNotif', notifOptions)
        })
    })
});