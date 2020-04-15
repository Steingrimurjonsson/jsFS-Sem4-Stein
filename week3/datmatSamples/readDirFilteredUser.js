const readDirFiltered = require("./demo2Module");

const directory = process.argv[2];
const filter = process.argv[3];

readDirFiltered(directory, filter, (err, files) => {
  if(err){
    console.log("UUUPs"+err);
  }
  console.log(files.join("\n"));
});