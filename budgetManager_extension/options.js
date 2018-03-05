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
        chrome.storage.sync.set({'total': 0})
    })
});