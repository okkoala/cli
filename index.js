"use strict";

const CLI = require("./cli");
const cli = new CLI();

(async () => {
    let args = process.argv.slice(process.argv[0].endsWith("node") ? 1 : 0);
    console.log(await cli.invoke(args));
})();