"use strict";

const self = require("self");

exports.main = function() {
    require("sdk/page-mod").PageMod({
        include: "*",
        contentScriptWhen: "ready",
        contentScriptFile: self.data.url("hopla.js")
    });
};
