import axios from 'axios';

export default function getJsonData() {
    return  axios.get('https://api.myjson.com/bins/9ru57')
            .then(function (response) {
                return response.data;
            });
}