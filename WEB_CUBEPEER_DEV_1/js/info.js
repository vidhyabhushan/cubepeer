var cpApp = angular.module('cubepeer', ['ngRoute']);

cpApp.directive('cubepeerFooter', function(){
  return {
    restrict: 'E',
    templateUrl: 'cubepeer-footer.html'
  };
});


cpApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "cubepeer-main.html"
  })
  .when("/services", {
    templateUrl : "services.html"
  })
  .when("/careers", {
    templateUrl : "careers.html"
  })
  .when("/about", {
    templateUrl : "about.html"
  })
  .when("/contacts", {
    templateUrl : "contacts.html"
  })
  .otherwise({
    redirectTo:'/'
  });
});

//https://jsfiddle.net/Xeoncross/k5c2ndyL/
cpApp.controller('MapController',function(){

  google.maps.event.addDomListener(window, 'click', initMap);
  function initMap() {
    var sPath = window.document.URL;
    console.log(sPath);
    if(sPath.search("contacts") > 0){
        console.log("Finally map " + sPath);
        var cubepeer = {lat: 12.913065, lng: 77.664432};
        var map = new google.maps.Map(document.getElementById('map_canvas'), {
          center: cubepeer,
          zoom: 12,
          styles: [	{
            "featureType":"landscape",
            "stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
          });
          var locations = [
            ['CubePeer Bhilai', 21.2060410, 81.3486400],
            ['CubePeer Bangalore', 12.913065, 77.664432],
            ['CubePeer Pune', 18.511291, 73.871437]];
            var image = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
            var marker, i;
            for (i=0;i< locations.length;i++){
              marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                animation: google.maps.Animation.DROP,
                icon: image,
                title: locations[i][0]
              });
            }
        }
      }
    });
