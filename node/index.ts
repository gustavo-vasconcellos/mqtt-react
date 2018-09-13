import { connect } from 'mqtt'

var client = connect('tcp://mqtt-broker.vtex.com.br')

client.on('connect', function () {
    console.log('connect');
    client.subscribe('vtex/falco/1/instore/checkin', function (err) {

        if (!err) {
            console.log('subscribe');
            client.publish("vtex/falco/1/instore/checkin", "Hello mqtt, it's from NodeJS");
        } else {
            console.log(err);
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    //client.end()
})