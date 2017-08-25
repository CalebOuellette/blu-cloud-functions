const functions = require('firebase-functions'),
    admin = require('firebase-admin'),
    http = require('http'),
WebClient = require('@slack/client').WebClient;

var token = 'xoxb-231024998209-8vXkQdXBtiYKcaj4b3tWhUNF' || '';

exports.sendOrderNotification = functions.database.ref('/Orders/{pushId}').onWrite(event => {
    // react to changes    
    console.log(event);
    postToSlack();
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
function postToSlack(text) {

    var web = new WebClient(token);
    web.chat.postMessage('testorders', 'Order Received', function (err, res) {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Message sent: ', res);
        }
    });
}