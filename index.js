#!/usr/bin/env node
"use strict";

const CLI = require("./cli");
const cli = new CLI();

(async () => {
    let args = process.argv.slice(process.argv[0].match(/node(\.exe)?$/g) ? 1 : 0);
    console.log(await cli.invoke(args));
})();