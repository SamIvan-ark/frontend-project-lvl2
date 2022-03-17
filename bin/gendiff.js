#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command;

program
    .name('gendiff')
    .version('0.0.2')
    .option('-f, --format <type>', 'output format')
    .argument('<filepath1>, <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    // eslint-disable-next-line no-undef
    .parse(process.argv);
