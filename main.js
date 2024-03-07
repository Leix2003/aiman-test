// Assuming you have set up Twilio SDK and configured the necessary environment variables

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function sendWhatsAppMessage(phoneNumber, message) {
    client.messages
        .create({
            from: 'whatsapp:+14155238886',
            body: message,
            to: 'whatsapp:' + phoneNumber
        })
        .then(message => console.log(message.sid))
        .catch(err => console.error(err));
}

function scanVirus() {
    // Get the username from the input field
    var username = document.getElementById('username').value;

    // Generate a random result
    var result = Math.random() < 0.5 ? 'already infected' : 'not yet infected';

    // Construct the message based on the result
    var message = 'Username: ' + username + ' is ' + result;

    // Send the message to the WhatsApp number
    sendWhatsAppMessage('0176273460', message);
}