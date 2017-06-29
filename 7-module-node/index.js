const ArgumentParser = require('argparse').ArgumentParser;

const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Argparse example'
});

parser.addArgument(
    [ '-n', '--name' ],
    {
        help: 'Paramètre nom',
        required: true
    }
);

parser.addArgument(
    [ '-a', '--age' ],
    {
        help: 'Paramètre age'
    }
);

const args = parser.parseArgs();

console.log(args);