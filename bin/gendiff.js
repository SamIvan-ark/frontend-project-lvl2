#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../index.js';



const program = new Command;

program
    .name('gendiff')
    .version('0.5.0')
    .option('-f, --format [type]', 'output format', 'stylish')
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .action((filepath1, filepath2) => {
        console.log(genDiff(filepath1, filepath2, program.opts().format));
    });

program.parse();
