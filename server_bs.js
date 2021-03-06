const browserSync = require("browser-sync").create();

// Argument parsing
const myArgs = require('optimist').argv;

// Argument: Should browser-sync open a window. Valid values are true/false/"external"/"local"
const browserSyncOpen = myArgs.bsOpen ? myArgs.bsOpen : false;

// Browser-Sync
browserSync.init({
    port : 2003,
    open : browserSyncOpen,
    ui   : {
        port: 2004
    },
    files: ["scss/main.css", "scss/demo.css"],
    proxy: "localhost:2002"
});