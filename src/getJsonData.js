import axios from 'axios';

function getItemData() {
    return  axios.get('https://api.myjson.com/bins/9ru57')
            .then(function (response) {
                return response.data;
            });
}

function getCurencyData() {
    return  axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(function (response) {
                return response.data.Valute;
            });
}

export {getItemData, getCurencyData}