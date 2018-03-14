chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(message => {
   if (message.todo === "changeColor") {
       let addColor = '#' + message.clickedColor;
       $('.api').css('color', addColor)
   }
});