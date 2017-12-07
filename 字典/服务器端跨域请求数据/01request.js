var https = require("https");

/*
 * 配置服务器选项
 */
//https://m.kaola.com/v250/suggest.html?t=1509363772567&key=b
var options = {
  hostname: "https://m.mi.com",
  port: 443,//如果是https协议，统一为443，如果为http协议，统一为80，
  path:"/v1/home/page",
  methods:"POST"
}

var req = https.request(options,(res) => {
  var str = ""
  res.on("data", (data) => {
    str += data;
  })
  res.on("end", () => {
    console.log(str);
  })
  
  
  
})
req.on("error",function(){
  
})
req.end();
