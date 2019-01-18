// .header-wraper PARALLAX
$(window).scroll(function() {
    var st = $(this).scrollTop();
    $(".header-text").css({
        "transform" : "translate(0%, " + st /-6 + "%"
    });
    var st = $(this).scrollTop();
    $(".carousel-control-prev_scroll , .carousel-control-next-scroll").css({
        "transform" : "translate(0%, " + st /-14 + "%"
    });
    var st = $(this).scrollTop();
    $(".row-header").css({
        "transform" : "translate(0%, " + st /-1 + "%"
    });
});

//  Animation navbar-btn
$(document).ready(function () { 
  $('.navbar-btn').on('click', function () {
    $('.animated-icon').toggleClass('open');
  });
});

// #map_little-falls YANDEX MAP JS API
var spinner1 = $('.ymap-container-1').children('.loader');
var check_if_load1 = false;
var check_if_load_api = false;
var myMapTemp1, myPlacemarkTemp1;
 
function init1 () {
  var myMapTemp1 = new ymaps.Map("map_little-falls", {
    center: [40.875339, -74.199921], 
    zoom: 12,
    controls: ['fullscreenControl']
    },
    {
        suppressMapOpenBlock: true
    },
    {
        searchControlProvider: 'yandex#search'
    }),
    myPlacemarkTemp1 = new ymaps.Placemark(myMapTemp1.getCenter(), {
        hintContent: 'Our office from Little Falls',
    }, 
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-location.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [0, -27]
    });

    myMapTemp1.geoObjects
    .add(myPlacemarkTemp1)
    var layer = myMapTemp1.layers.get(0).get(0);
    waitForTilesLoad(layer).then(function() {
    spinner1.removeClass('is-active');
  });
}
 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else { 
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
var ymap1 = function() {
  $('.ymap-container-1').mouseenter(function(){
      if (!check_if_load1) {
        check_if_load1 = true; 
        spinner1.addClass('is-active');             
      }
      if (!check_if_load_api) {
        check_if_load_api = true; 
        loadScript("https://api-maps.yandex.ru/2.1/?apikey=<ce0c97a2-2c50-4033-b63e-788ce447e46a>&lang=en_US", function(){
            ymaps.load(init1);
         });    
      } else {
        $(function() {
            ymaps.load(init1);
         });   
      }
    }
  );  
}
$(function() {
  ymap1();
});

// #map_Passaic YANDEX MAP JS API
var spinner2 = $('.ymap-container-2').children('.loader');
var check_if_load2 = false;
var myMapTemp2, myPlacemarkTemp2;
 
function init2 () {
  var myMapTemp2 = new ymaps.Map("map_Passaic", {
    center: [40.868502, -74.125134], 
    zoom: 11,
    controls: ['fullscreenControl']
    },
    {
        suppressMapOpenBlock: true
    },
    {
        searchControlProvider: 'yandex#search'
    }),
    myPlacemarkTemp3 = new ymaps.Placemark(myMapTemp2.getCenter(), {
        hintContent: 'Our office from Passaic',
    }, 
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-location.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [0, -27]
    });

    myMapTemp2.geoObjects
    .add(myPlacemarkTemp3)
    var layer = myMapTemp2.layers.get(0).get(0);
    waitForTilesLoad(layer).then(function() {
    spinner2.removeClass('is-active');
  });
}
 

function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else { 
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
var ymap2 = function() {
    $('.ymap-container-2').mouseenter(function(){
        if (!check_if_load2) {
          check_if_load2 = true; 
          spinner2.addClass('is-active');             
        }
        if (!check_if_load_api) {
          check_if_load_api = true; 
          loadScript("https://api-maps.yandex.ru/2.1/?apikey=<ce0c97a2-2c50-4033-b63e-788ce447e46a>&lang=en_US", function(){
              ymaps.load(init2);
           });    
        } else {
          $(function() {
              ymaps.load(init2);
           });   
        }
      }
    );  
  }
  $(function() {
    ymap2();
  });


// #map-Crimea YANDEX MAP JS API
var spinner3 = $('.ymap-container-3').children('.loader');
var check_if_load3 = false;
var myMapTemp3, myPlacemarkTemp3;
 
function init3 () {
  var myMapTemp3 = new ymaps.Map("map_Paterson", {
    center: [40.945223, -74.164868], 
    zoom: 11,
    controls: ['fullscreenControl']
    },
    {
        suppressMapOpenBlock: true
    },
    {
        searchControlProvider: 'yandex#search'
    }),
    myPlacemarkTemp3 = new ymaps.Placemark(myMapTemp3.getCenter(), {
        hintContent: 'Our office from Paterson',
    }, 
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-location.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [0, -27]
    });

    myMapTemp3.geoObjects
    .add(myPlacemarkTemp3)
    var layer = myMapTemp3.layers.get(0).get(0);
    waitForTilesLoad(layer).then(function() {
    spinner3.removeClass('is-active');
  });
}
 

function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else { 
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
var ymap3 = function() {
    $('.ymap-container-3').mouseenter(function(){
        if (!check_if_load3) {
          check_if_load3 = true; 
          spinner3.addClass('is-active');             
        }
        if (!check_if_load_api) {
          check_if_load_api = true; 
          loadScript("https://api-maps.yandex.ru/2.1/?apikey=<ce0c97a2-2c50-4033-b63e-788ce447e46a>&lang=en_US", function(){
              ymaps.load(init3);
           });    
        } else {
          $(function() {
              ymaps.load(init3);
           });   
        }
      }
    );  
  }
  $(function() {
    ymap3();
  });
