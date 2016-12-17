const DashButton = require('dash-button');
const DASH_BUTTON_MAC_ADDRESS = 'xx:xx:xxxxxxx';

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);


const request = require('request');
const url = ' https://hooks.slack.com/services/xxx/xxx'
const headers = {
    'Content-Type': 'application/json'
}

const options = {
    url: url,
    method: 'POST',
    headers: headers,
    json: {"text": "フルグラボタンが押されました！\nAnd this is another line of text."}
}

console.log('listen...');
let subscription = button.addListener(() => {
    console.log('Clicked.. ' + new Date());

    request(options, function (error, response, body) {
        if (!error) {
            console.log(body);
        }
    });
});
