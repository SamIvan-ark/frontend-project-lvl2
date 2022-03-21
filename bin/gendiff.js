#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import process from 'process';
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
        const currWorkDir = process.cwd();
        console.log( getDiff(fs.readFileSync(path.resolve(currWorkDir, filepath1)), fs.readFileSync(path.resolve(currWorkDir, filepath2))));
    })

program.parse();
