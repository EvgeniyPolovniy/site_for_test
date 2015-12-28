$(document).ready(function () {

  getBtcPrices();
  randomBg(1, 20);

  $('body').on('click','.js-menu, .js-menu-bg', menuAction);

  $('ul.tabs').tabs();

});

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

function randomBg (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  var bgClass = 'bg-' + rand;
  $('.js-bg').addClass(bgClass);
}

function menuAction () {
  $('body').toggleClass('active-menu');
}