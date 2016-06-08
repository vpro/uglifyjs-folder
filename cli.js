#!/usr/bin/env node
'use strict';

var meow = require('meow');
var uglifyFolder = require('./');

var cli = meow({
  help: [
    'Usage',
    '  uglifyjs-folder path [options]',
    '',
    'options:',
    '  -c --comments      Will add a comment with the file name.',
    '  -o --output        Specify a file/folder to write the minified code',
    '  -e --each          Will minify each file in <output>/*.min.js',
    '     --postfix       Specify a postfix for output filenames if --each is enabled. Defaults to \'.min\'.',
    '     --no-postfix    Disable postfix for output filenames if --each is enabled',
    '  -h --help          Print this list and exit.'
  ].join('\n')
});

var res = uglifyFolder(cli.input[0], {
  comments: cli.flags.comments || cli.flags.c || false,
  output: cli.flags.output || cli.flags.o,
  each: cli.flags.each || cli.flags.e || false,
  postfix: cli.flags.postfix
});

if(res) {
  console.log(res);
}