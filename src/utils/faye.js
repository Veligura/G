import faye from 'faye';


var token   = 'ab00bb5bb46fca9f60464d5c4159100ccbc3859a';
var roomId  ='58b6ab06d73408ce4f4da8e5'

// Authentication extension

var ClientAuthExt = function() {};

ClientAuthExt.prototype.outgoing = function(message, callback) {
    if (message.channel == '/meta/handshake') {
        if (!message.ext) { message.ext = {}; }
        message.ext.token = token;
    }

    callback(message);
};

ClientAuthExt.prototype.incoming = function(message, callback) {
    if(message.channel == '/meta/handshake') {
        if(message.successful) {
            console.log('Successfuly subscribed to room: ', roomId);
        } else {
            console.log('Something went wrong: ', message.error);
        }
    }

    callback(message);
};



// Faye client

var client = new faye.Client('https://ws.gitter.im/faye', {timeout: 10, retry: 5, interval: 1});

// Add Client Authentication extension
client.addExtension(new ClientAuthExt());

// Add Resource Snapshot extension
//client.addExtension(new SnapshotExt());

// A dummy handler to echo incoming messages
var messageHandler = function(msg) {
    console.log(msg);
};



client.subscribe('/api/v1/rooms/' + roomId + '/chatMessages', messageHandler, {});