const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
let fs = require("fs");
const { type } = require("os");
let path = require("path");

function fn(src) {
    console.log("tree command executed with path " + src);

    const indent =  "      ";

    let content = fs.readdirSync(src);
    let curDir = path.basename(src);

    console.log(indent + curDir);

    for(let i = 0; i < content.length; i++){
        console.log(indent + "   |______" + content[i]);
    }
}

module.exports = {
    fxn: fn
}