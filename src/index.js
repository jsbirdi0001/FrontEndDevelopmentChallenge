var $ = require("jquery");
import "./styles/styles.scss";

console.log("You are the best");

///////////////////////////////////////////////////////////////////////////
// Fetching DATA from MSFT API
fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=JQ1LE8WZCWJRAMXL")
.then((resp) => resp.json())
.then(function(data){
  var hello = data["Time Series (5min)"];
  var idx = 0; // key2
  var key = Object.keys(hello)[idx];
  var value1 = hello[key]["4. close"];
  document.getElementById("msft").innerHTML = value1;

  var idxx = 1; // key2
  var key = Object.keys(hello)[idxx];
  var value2 = hello[key]["4. close"];

    if(value1 > value2){
        $("#msft").siblings("i").addClass("fa-arrow-up");
    } else{
        $("#msft").siblings("i").addClass("fa-arrow-down");
    }
})


// For BTCUSD API
function fetchingFunction(url) {
	fetch(url)
    .then((resp) => resp.json())
    .then(function(data){

    var idx = 0; // key2
    var key = Object.keys(data)[idx];
    var value1 = data[key]["8. Bid Price"]
    var value2 = data[key]["9. Ask Price"]
    
    if(value1 > value2){
        $("#btcusd").siblings("i").addClass("fa-arrow-up");
    } else{
        $("#btcusd").siblings("i").addClass("fa-arrow-down");
    }

    for(var props in data){
      let a = data[props]["5. Exchange Rate"];
      document.getElementById("btcusd").innerHTML = a;
      break;
    }
  })

}
fetchingFunction("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=JQ1LE8WZCWJRAMXL");


//////////////////////////////////////////////////////////////////
///// AJAX DUMMY Endpoint

$("#subscribe").submit(function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: action,
      crossDomain: true,
      data: new FormData(this),
      dataType: "json",
      contentType: "multipart/form-data",
      processData: false,
      contentType: false,
      headers: {
        "Accept": "application/json"
      }
    }).done(function() {
       alert("The data has been sent");
    }).fail(function() {
       alert('An error occurred please try again later.')
    });
  });