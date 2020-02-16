var $ = require("jquery");
import "./styles/styles.scss";

console.log("You are the best");

var hello;
fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=JQ1LE8WZCWJRAMXL")
.then((resp) => resp.json())
.then(function(data){
  hello = data["Time Series (5min)"];
  var idx = 0; // key2
  var key = Object.keys(hello)[idx];
  var value = hello[key]["4. close"]
  console.log(value);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
  
  document.getElementById("msft").innerHTML = value;

  var idxx = 1; // key2
  var key = Object.keys(hello)[idxx];
  var value = hello[key]["4. close"]
  
  console.log(value);

  
})


