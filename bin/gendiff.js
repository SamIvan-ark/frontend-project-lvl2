#!/usr/bin/env node
import { Command } from 'commander';
import getDiff from '../src/getDiff.js';



const program = new Command;

program
    .name('gendiff')
    .version('0.3.0')
    .option('-f, --format <type>', 'output format')
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .action((filepath1, filepath2) => {
        console.log(getDiff(filepath1, filepath2));
    })

program.parse();
