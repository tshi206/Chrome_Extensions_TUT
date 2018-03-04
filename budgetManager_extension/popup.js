$(() => {

    chrome.storage.sync.get('total', (obj) => {
       $('#total').text(obj.total ? obj.total : 0)
    });

    $('#spendAmount').on('click', () => {
        chrome.storage.sync.get('total', (obj) => {
            let newTotal =
                obj.total ? parseInt(obj.total) : 0;

            let inputBox = $('#amount');
            let amount = inputBox.val();

            newTotal =
                amount ? newTotal + parseInt(amount) : newTotal;

            chrome.storage.sync.set({'total': newTotal});

            $('#total').text(newTotal);
            inputBox.val('');
        })
    })
});