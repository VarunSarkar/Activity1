let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");

let inputArr = process.argv.slice(2);
let command = inputArr[0];

switch(command){
        case "help":
            helpObj.fxn();
            break;

        case "tree":
            treeObj.fxn(inputArr[1]);
            break;

        case "organize":
            organizeObj.fxn(inputArr[1]);
            break;

        default: 
        console.log("Wrong Command");
        }