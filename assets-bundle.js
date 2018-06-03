console.log('Copying images');
const fs = require('fs-extra');
const dest = './dist/assets/images';
fs.ensureDirSync(dest);
fs.copySync('src/assets/images', dest);
