function httpGetAsync(priceurl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText)
    }
    xmlHttp.open("GET", priceurl, true) // true for asynchronous 
    xmlHttp.send(null)
}

setInterval(function(){
    url = "https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT"
    httpGetAsync(url, function(r){
        lastprice = JSON.parse(r).price
        chrome.storage.sync.set({'usdvalue': Math.round(lastprice)})
    })
}, 10000)