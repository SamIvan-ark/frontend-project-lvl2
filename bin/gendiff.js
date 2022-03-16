#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command;

program
    .name('gendiff')
    .version('60.0.0')
    .description('Compares two configuration files and shows a difference.');

program.parse();
