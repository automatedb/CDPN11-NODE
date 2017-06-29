const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const ArgumentParser = require('argparse').ArgumentParser;

// Importer les controllers
const IndexCtrl = require('./controllers/IndexCtrl');
const AuthenticationCtrl = require('./controllers/AuthenticationCtrl');

const config = {
   defaultName: 'Bibi'
};

const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Argparse example'
});

parser.addArgument(
    [ '-p', '--port' ],
    {
        help: "Port de l'application",
        required: true
    }
);

const args = parser.parseArgs();
const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/../views'));

const authenticationCtrl = new AuthenticationCtrl(config);
app.get('/login', authenticationCtrl.login.bind(authenticationCtrl));
app.post('/login', authenticationCtrl.postLogin.bind(authenticationCtrl));

const indexCtrl = new IndexCtrl(config);
app.get('/:param?', indexCtrl.index.bind(indexCtrl));

app.listen(args.port, () => console.log(`Example app listening on port ${args.port}!`));