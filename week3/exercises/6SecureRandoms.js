/*
In this exercise you must create a design to produce an object with 6 secure randoms as sketched below:
{
  "title": "6 Secure Randoms",
  "randoms": [
    {"length": 48,"random": "A string with 48 random hex-characters"},
    {"length": 40,"random": "A string with 40 random hex-characters"},
    {"length": 32,"random": "A string with 32 random hex-characters"},
    {"length": 24,"random": "A string with 24 random hex-characters"},
    {"length": 16,"random": "A string with 16 random hex-characters"},
    {"length": 8,"random":  "A string with 8 random hex-characters"}
  ]
}

*/

const crypto = require('crypto');

function getSecureRandom(size) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, function (err, buffer) {
      if (err) {
        reject(err);
      }
      else {
        var secureHex = buffer.toString('hex');
        resolve({ length: size, random: secureHex });
      }
    });
  });
}

function getSecureRandoms(arr) {
  const randoms = [];
  for (let i = 0; i < arr.length; i++) {
    const element = getSecureRandom(arr[i]);
    randoms.push(element);
  }
  return randoms;
};
var array = getSecureRandoms([48,40,32,24,16,8]);
Promise.all(array).then(all => {
  let result = {};
  result.title = "6 Secure Randoms";
  result.randoms = all;
  console.log(result);
}).catch(error => {
  console.log("ERROR: " + error);
})
module.exports.secureRandom = Promise.all(array);

