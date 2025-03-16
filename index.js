// const _ = require('lodash')                          // import lodash library
// console.log(_.last([1,2,3]));

// setTimeout(()=>{
//     console.log('Hello World')               // print Hello World after 8 seconds ata lekar karon holo akne node js a backend developer er jonno window er dorkar nai
// }, 8000 )

// console.log(globalThis);                 // globalThis mne akne global support kore but window support kore na


// console.log(__dirname);                // __dirname mne akne current directory er path ta dekhabe
// console.log(__filename);              // __filename mne akne current file er path ta dekhabe

//  (function test(__dirname, __filename, exports , require, module){                        //akne iife function use kora defult vabe thake  ata k module wrapper function bole
// var pepole = ['sha' , 'hashib', 'alam']
// var a = 6;

// function test(){
//     console.log('Hello Test')
// }

// module.exports = {
//     pepole,
//     a,
//     test
// };
// //  })

const path = require('path')   
const os = require('os')
const fs = require('fs')
const event  = require('events')
const myPath = 'D:/Node js/index.js'
    
// console.log(path.extname(myPath));   
// console.log(os.cpus().length);

fs.writeFileSync('sha.txt', "hello Bangladesh") // akne sync use kora hoi karon ata syncronous vabe kaj kore but ata akta bad practice ata use kora uchit na
fs.appendFileSync('sha.txt', "hello SHa")
fs.readFile('sha.txt', (err, data)=>{       // akne async use kora hoi karon ata asyncronous vabe kaj kore but ata best practice
    console.log(data.toString());
})
console.log("hello");                   // ata asyncronous vabe kaj kore ata print hobe first a arpor print hobe readfile 