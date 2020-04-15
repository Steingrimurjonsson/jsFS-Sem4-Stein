// TEST FILE
/*Create a simple test file that should import the class, make an instance, and test the behaviour by adding the same URL more than once (use setTimeout to make the second call)
Hints: Observe how this code uses JavaScripts Map (not the map-method on an Array, but the type Map) to store URLs, and how the URL itself is used as the key. */
const DOS = require("./dosDetector.js");
const os = require("./OS-info.js");


console.log(os.osInfo());

const myDos = new DOS.DOS_Detector(3000);

//calling
myDos.addUrl('https://www.testtest.test/');

setTimeout(() => {
  myDos.addUrl('https://www.testtest.test/');
}, 2000);

// Attack Found
myDos.on("DosDetected", event => {
  console.log("Hacker Found : ", event);
});
