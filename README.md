### Hexlet tests and linter status, GitHub Actions:
[![Actions Status](https://github.com/SamIvan-ark/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/SamIvan-ark/frontend-project-lvl2/actions)
[![Node CI](https://github.com/SamIvan-ark/frontend-project-lvl2/actions/workflows/NodeCI.yml/badge.svg)](https://github.com/SamIvan-ark/frontend-project-lvl2/actions/workflows/NodeCI.yml)

### Codeclimate:
[![Maintainability](https://api.codeclimate.com/v1/badges/fe01997e32f65164035e/maintainability)](https://codeclimate.com/github/SamIvan-ark/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fe01997e32f65164035e/test_coverage)](https://codeclimate.com/github/SamIvan-ark/frontend-project-lvl2/test_coverage)

## Gendiff – educational project of Hexlet.

Simple difference calculator between 2 versions of files. It can accept JSON and YAML files.

### Installing:

1. clone repo in your local machine;
2. hit ```'npm ci'``` (or ```make install``` if you got 'Make' npm-package installed).
3. also need to install the package locally by command ```npm link``` (```make link```).
4. It forks directly from command line and as a library.

### Usage:
```bash
gendiff [options] <filepath1> <filepath2>
```

Options – output format: ```stylish``` (default), ```plain``` and ```json``` is supported.

## Examples of work

### Installing and help call
[![asciicast](https://asciinema.org/a/515660.svg)](https://asciinema.org/a/515660)

### Comparing of flat JSON files
[![asciicast](https://asciinema.org/a/517470.svg)](https://asciinema.org/a/517470)

### Comparing of flat YAML files
[![asciicast](https://asciinema.org/a/517473.svg)](https://asciinema.org/a/517473)

### Comparing of JSON files with nested properties
[![asciicast](https://asciinema.org/a/517475.svg)](https://asciinema.org/a/517475)

### Comparing of JSON files with nested properties. 

Output is a plain format. Also there is demonstrates comparsion of different formats of files (JSON compares with YAML).
[![asciicast](https://asciinema.org/a/517481.svg)](https://asciinema.org/a/517481)

### Example of JSON output format.
[![asciicast](https://asciinema.org/a/517484.svg)](https://asciinema.org/a/517484)
