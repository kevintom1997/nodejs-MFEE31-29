const fs = require("fs");

// Promise 是一個表示非同步運算的最終完成或失敗的物件。
let p = new Promise((resolve, reject) => {
  // error-first callback
  fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

// IIEF
(async () => {
  try {
    let data = await p;
    console.log("用 await 拿到的結果", data);
  } catch (e) {
    console.error("catch 到的錯誤", e);
  }
})();
