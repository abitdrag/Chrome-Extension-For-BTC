chrome.browserAction.setBadgeBackgroundColor({color:"#5e5b5b"})

chrome.storage.onChanged.addListener(function(changes, storageName){
    currentprice = parseInt(changes.usdvalue.newValue).toString()
    chrome.browserAction.setBadgeText({"text": currentprice});
    chrome.browserAction.setTitle({"title": "$" + currentprice + " - Binance Price Tracker"})
});