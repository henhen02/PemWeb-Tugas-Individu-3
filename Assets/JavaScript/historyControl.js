const cacheKey = 'calculationHistory';

function checkForStorage() {
    return typeof(Storage) !== 'undefined';
}

function putHistory(data) {
    if (checkForStorage()) {
        let historyData = null;
        if (localStorage.getItem(cacheKey) === null){
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(cacheKey));
        }
        historyData.unshift(data);

        if (historyData.length > 5){
            historyData.pop();
        }
        localStorage.setItem(cacheKey, JSON.stringify(historyData));
    }
}

function showHistory() {
    if (checkForStorage()){
        return JSON.parse(localStorage.getItem(cacheKey)) || [];
    } else {
        return [];
    }
}

function printHistoryData() {
    const historyData = showHistory();
    let historyList = document.querySelector('.historyList');

    historyList.innerHTML = "";
    for (let history of historyData){
        let row = document.createElement('tr');
        row.innerHTML = '<td>' + history.number1 + '</td>';
        row.innerHTML += '<td>' + history.op + '</td>';
        row.innerHTML += '<td>' + history.number2 + '</td>';
        row.innerHTML += '<td>' + history.result + '</td>';
        historyList.appendChild(row);
    }
}
// printHistoryData()