const axios = require("axios");

(async () => {
  try {
    let responce = await axios.get(
      "http://54.71.133.152:3000/stocks?stockNo=2618&date=202211"
    );
    console.log(responce.data);
  } catch (e) {
    console.error("catch 到的錯誤", e);
  }
})();
