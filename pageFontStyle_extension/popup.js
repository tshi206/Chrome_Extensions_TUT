$(() => {
    let fontColor = $('#fontColor');
    let color = fontColor.val();
    fontColor.on("change paste keyup", () => {
        color = fontColor.val()
    });
    $('#btnChange').click(() => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id,
                {todo: "changeColor", clickedColor: color})
        })
    })
});