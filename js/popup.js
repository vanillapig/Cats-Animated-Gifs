
chrome.browserAction.setTitle({title: 'Cats Awesome Images. See you later!'});
chrome.browserAction.setIcon({path: 'icon.png'});
chrome.storage.local.get('dayNum', function(items) {
    var n = items.dayNum;
    document.getElementById("rImage").src = 'http://www.happyhey.com/images/cats-gifs/' + n + '.gif';

});