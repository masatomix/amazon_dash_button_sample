const config = require('config');
const adb = config.adb;

console.log(adb.mac_address);
console.log(adb.bot_url);
const DashButton = require('dash-button');
let button = new DashButton(adb.mac_address);

const request = require('request');
const url = 'https://hooks.slack.com/services' + adb.bot_url;
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

