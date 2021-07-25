const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
let fs = require("fs");
const { type } = require("os");
let path = require("path");

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


    function filter(ext){
        for(let i in types){
            for(let j in types[i]){
                if(types[i][j] === ext){
                    return i;
                }
            }
        }
        return "";
    }

function fn(src) {
    console.log("organize command executed with path " + src);

    let curDir = path.dirname(src);
    let orgFilePath = path.join(curDir,"Organized");
    fs.mkdirSync(orgFilePath);

    let appFilePath = path.join(orgFilePath,"App");
    let docFilePath = path.join(orgFilePath,"Documents");
    let arcFilePath = path.join(orgFilePath,"Archives");
    let medFilePath = path.join(orgFilePath,"Media");
    let othFilePath = path.join(orgFilePath,"Others");

    fs.mkdirSync(appFilePath);
    fs.mkdirSync(docFilePath);
    fs.mkdirSync(arcFilePath);
    fs.mkdirSync(medFilePath);
    fs.mkdirSync(othFilePath);



    let content = fs.readdirSync(src);

    for(let i = 0; i < content.length; i++){
        let ext = path.extname(content[i]);
        ext = ext.slice(1);
        
        let srcFilePath = "";
        let destFilePath = "";

        let swAns =  filter(ext);
        console.log(swAns);
        switch(swAns){
            case "app":
                srcFilePath = path.join(src,content[i]);
                destFilePath = path.join(appFilePath,content[i]);
                fs.copyFileSync(srcFilePath,destFilePath);
                break;
            case "archives":
                srcFilePath = path.join(src,content[i]);
                destFilePath = path.join(arcFilePath,content[i]);
                fs.copyFileSync(srcFilePath,destFilePath);
                break;
            case "media":
                srcFilePath = path.join(src,content[i]);
                destFilePath = path.join(medFilePath,content[i]);
                fs.copyFileSync(srcFilePath,destFilePath);
                break;
            case "documents":
                srcFilePath = path.join(src,content[i]);
                destFilePath = path.join(docFilePath,content[i]);
                fs.copyFileSync(srcFilePath,destFilePath);
                break;
            default:
                srcFilePath = path.join(src,content[i]);
                destFilePath = path.join(othFilePath,content[i]);
                fs.copyFileSync(srcFilePath,destFilePath);
                break;
        }
    }
}



module.exports = {
    fxn: fn
}