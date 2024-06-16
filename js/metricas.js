// const apiKey = 'd74deb1cf3d0495:cmwi1dmv8b5gqjb';
// const url = `https://api.tradingeconomics.com/markets?c=${apiKey}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Aquí procesas y muestras los datos en tu página web
//     console.log(data);
//   })
//   .catch(error => console.error('Error al obtener los datos:', error));


var key = "guest",
    secret = "guest",
    count = 0;
var host = window.document.location.host.replace(/:.*/, "");
var ws = new WebSocket(
  "wss://stream.tradingeconomics.com/?client=" + key + ":" + secret
);

ws.onmessage = function (event) {
  //console.log('Msg: ', event.data);
  count++;
  if (count >= 5) {
    document.getElementById("data_cnt").innerHTML = "";
    count = 0;
  }

  var div = document.createElement("div");
  div.innerHTML = event.data;
  document.getElementById("data_cnt").appendChild(div);
};

ws.onopen = function () {
  console.log("Socket is Open!");
  //subscripe to a topic:
  ws.send('{"topic": "subscribe", "to": "EURUSD:CUR"}');
};