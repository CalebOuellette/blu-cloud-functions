const functions = require('firebase-functions'),
    admin = require('firebase-admin');


exports.sendPostNotification = functions.database.ref('/posts/{postID}').onWrite(event => {
    // react to changes    
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
