let data;

function getRequest(url) {
    let request = new XMLHttpRequest();
    request.open ("GET", url, false);
    request.send();
    return request.responseText;
}
    
function getTime(timeUrl) {
    data = getRequest(timeUrl);
}

function main() {
    TimeUTC = {};
    getTime("http://worldclockapi.com/api/json/utc/now");
    display('utc')

    getTime("http://worldclockapi.com/api/json/est/now");
    display('est')

    getTime("http://worldclockapi.com/api/json/cet/now");
    display('cet')
}

function display(timeId) {
    document.getElementById(timeId).value = data;
}

main();