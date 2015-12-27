$(document).ready(function () {

  getBtcPrices();

  function getBtcPrices () {
    var url = "https://api.bitcoinaverage.com/ticker/global/all";
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
      if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
      } else {
        var data = JSON.parse(xhr.response);
        console.log(data);
      }
    }

    xhr.send(null);
  }

});