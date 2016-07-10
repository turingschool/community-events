const fs = require('fs');

module.exports = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, data) => {
      if (error) { reject(error); }
      resolve(data.toString());
    });
  });
};
