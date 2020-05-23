const path =require('path');

const filename =path.join(__filename);
const dirname =path.join(__dirname);
const basename =path.basename(filename);
const extname =path.extname(filename);
console.log(filename);
console.log(dirname);
console.log(basename);
console.log(extname);