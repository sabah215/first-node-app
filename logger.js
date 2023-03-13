const EventEmitter = require('events');

const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';

function log(message){
       //  Send http request
       console.log(message);

       // Raise an event
       emitter.emit('messagelogged', {id: 1, url:'http://'})

}

emitter.on('messageLogged', (arg) => {
       console.log('Listener called: ', arg)
})



module.exports.emitter = emitter