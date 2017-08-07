const jspm = require('jspm');

const builder = new jspm.Builder();

builder.loadConfig('./config.js');

(async function() {

    await bundle('./src/test - src/dependency!plugin');
    await bundle('./src/test - src/dependency');
    await bundle('./src/test - src/**/*!plugin');
    await bundle('./src/test - src/*!plugin');
    await bundle('./src/test - **/something!plugin');

    await bundle('./src/test2');
    await bundle('./src/test2 - src/dependency');
    await bundle('./src/test2 - src/**/*');
    await bundle('./src/test2 - src/*');
    await bundle('./src/test2 - **/dependency');

}());

async function bundle(bundleExp) {
    const b = await builder.bundle(bundleExp, null);
    const logExp = bundleExp + new Array(40 - bundleExp.length).join(' ');
    console.log(logExp, b.modules);
}

