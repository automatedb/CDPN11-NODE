const express = require('express');
const ArgumentParser = require('argparse').ArgumentParser;

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

app.get('/', (req, res) => res.send('Hello World 2!'));

app.listen(args.port, () => console.log(`Example app listening on port ${args.port}!`));