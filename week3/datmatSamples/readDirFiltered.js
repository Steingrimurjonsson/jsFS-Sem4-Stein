const fs = require("fs");
const path = require("path");
  
var readDirFiltered = function(pathToDir,extension,cb){
  const ext = "." + extension;
  fs.readdir(pathToDir,(err,data)=>{
    if(err){
     return cb(err);
    }
    var files = data.filter(filename=>path.extname(filename) === ext);
    cb(null,files);
  });
}

module.exports = readDirFiltered;