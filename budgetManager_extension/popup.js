$(() => {

    /*
    chrome.storage.sync.get('total', (obj) => {
       $('#total').text(obj.total ? obj.total : 0)
    });
    */
    // update to acquiring values with two keys respectively in chrome.storage
    chrome.storage.sync.get(['total', 'limit'], (obj) => {
        $('#total').text(obj.total ? obj.total : 0);
        $('#limit').text(obj.limit)
    });

    $('#spendAmount').on('click', () => {
        chrome.storage.sync.get(['total', 'limit'], (obj) => {
            let newTotal =
                obj.total ? parseInt(obj.total) : 0;

            let inputBox = $('#amount');
            let amount = inputBox.val();

            newTotal =
                amount ? newTotal + parseInt(amount) : newTotal;

            chrome.storage.sync.set({'total': newTotal}, () => {
                if (amount && newTotal >= obj.limit){
                    let notifOptions = {
                        type: 'basic',
                        iconUrl: 'icon48.png',
                        title: 'Limit reached!',
                        message: "Uh oh! Looks like you've reached your limit!"
                    };
                    chrome.notifications.create('limitNotif', notifOptions)
                }
            });

            $('#total').text(newTotal);
            inputBox.val('');
        })
    })
});