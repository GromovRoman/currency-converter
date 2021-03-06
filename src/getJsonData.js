import axios from 'axios';

function getItemData() {
    return  axios.get('https://api.myjson.com/bins/hxkan')
            .then(function (response) {
                return response.data;
            });
}

function getCurrencyData() {
    return  axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(function (response) {
                return response.data.Valute;
            });
}

export {getItemData, getCurrencyData}