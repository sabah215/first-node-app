// Working with readible and writable stream
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip()
const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('example2.txt.gz');



// readStream.on('data', (chunk)=> {
//      writeStream.write(chunk);
// });

//shorthand version of the listener
readStream.pipe(gzip).pipe(writeStream);




// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//       console.log(`Server is running at http://${hostname}:${port}/`);
// });


/* ------ WORK WITH FILE SYSTEMS ----- */
// const fs = require('fs')
// // Delete file
// fs.unlink('example2.txt', (err) =>{
//       if(err) console.log(err)
//       else console.log('successfully deleted the file');
// });
// fs.appendFile('example2.txt', 'somedata being appended', (err)=>{
//       if(err)
//             console.log(err);

//       else console.log('Successfully appended data.');
// });
// fs.readFile('example2.txt','utf-8', (err, file) => {
//       if(err) console.log(err);
//       else console.log(file);
// });
// //create a file
// fs.writeFile('example.txt', "This is an example. This is created to work with readable and writeable stream. Google is an American multinational technology company specializing in search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, and artificial intelligence. It is a dream of many people to work for Google. This sheet will assist you to land a job at Google, we have compiled all the interview questions and answers.", (err) =>{
//       if(err) console.log(err);
//       else {
//             console.log('File created');
//             fs.readFile('example.txt', 'utf-8', (err, file) => {
//                   if(err) console.log(err)
//                   else console.log(file);
//             });
//       }

// });
// fs.readFile('example.txt', 'utf-8', (err, file) => {
//       if(err) console.log(err);
//       else{
//             console.log(file);
//       }
// });

/* rename file*/
// fs.rename('example.txt', 'example2.txt', (err) => {
//       if(err) console.log(err)
//       else console.log('Successfully renamed file.');
// });



/* -------READLINE MODULE-------------*/
// const  readline = require('readline');
// const rl = readline.createInterface({input: process.stdin,
//                           output: process.stdout});

// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);
// let answer = num1 + num2;

// rl.question(`What is ${num1} + ${num2}? \n`,
// (userInput) => {
//       if(userInput.trim() == answer){
//             rl.close();
//       }
//       else{
//             rl.setPrompt('Incorrect response, please try again\n');
//             rl.prompt();
//             rl.on('line', (userInput) => {
//                   if(userInput.trim() == answer)
//                         rl.close();
//                   else{
//                         rl.setPrompt(`Your answer of ${userInput} is incorrect try again\n`);
//                         rl.prompt();
//                   }
//             });
//       }
// });

// rl.on('close', () => {
//       console.log('Correct!!!!')
// });

/** -------  EVENT EMITTER ---------- **/
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // // Register a listener
// emitter.on('tutorial', (num1, num2) => {
//       console.log(num1+num2); 
// });

// emitter.emit('tutorial',1,2);

// class Person extends EventEmitter{
//       constructor(name){
//             super();
//             this._name = name;
//       }

//       get name(){
//             return this._name;
//       }
// }

// let pedro = new Person('Pedro');
// let christina = new Person('Christina');
// christina.on('name', () => {
//       console.log('my name is ' + christina.name);
// });
// pedro.on('name', () => {
//       console.log('my name is ' + pedro.name);
// });

// pedro.emit('name');
// christina.emit('name');


// const log = require('./logger');
// log('message')

// const tutorial = require('./tutorial')
// console.log(tutorial)
// console.log(tutorial.sum(1,1));
// console.log(tutorial.product(1,1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());


