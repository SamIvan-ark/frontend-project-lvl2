#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path, { resolve } from 'path';
import getDiff from '../src/getDiff.js'
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';


const program = new Command;

program
    .name('gendiff')
    .version('0.0.2')
    .option('-f, --format <type>', 'output format')
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .action((filepath1, filepath2) => {
        console.log(filepath1, filepath2);
        const getFixturePath = (filename) => path.join('__fixtures__', filename);

        const relPath1 = getFixturePath(filepath1);
        const relPath2 = getFixturePath(filepath2);
        
        console.log( getDiff(fs.readFileSync(path.resolve(relPath1)), fs.readFileSync(path.resolve(relPath2))));
    })

program.parse();
