import path from 'path';
import yaml from 'js-yaml';

const defineParser = (pathToFile) => {
    const ext = path.extname(pathToFile);
    let parser;
    
    if (['.json', '.'].includes(ext)) {
        parser = JSON.parse;
    }
    if (['.yml', '.yaml'].includes(ext)) {
        parser = yaml.load;
    }

    return parser;
};

export default defineParser;
