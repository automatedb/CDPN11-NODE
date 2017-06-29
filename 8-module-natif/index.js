// const Config = require('./data/config.json');
const path = require('path');
const fs = require('fs');

// Concaténation
// console.log(__dirname + '/data/config.json');
// console.log(`${__dirname}/data/config.json`);

const pathToConfigFile = path.join(__dirname, 'data', 'config.json');

// fs.readFile(pathToConfigFile, 'utf8', (err, data) => {
//     data = JSON.parse(data);
//
//     console.log(data.host);
// });

const config = fs.readFileSync(pathToConfigFile, 'utf8');

console.log(JSON.parse(config));

console.log("Je passe avant la lecture du fichier");