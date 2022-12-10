const fs = require("fs");

const p = function (fileName) {
    let doreadFile = new Promise((resolve, reject) => {
      fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
          reject("發生錯誤了", err);
        } else {
          resolve(`成功讀到資料: ${data}`);
        }
      });
    });
    return doreadFile;
  };
  
  p('test.txt')
    .then((data) => {
      console.log("收到", data);
     return p('test1.txt')
    })
    .catch((err) => {
      console.log("沒收到", err);
    })