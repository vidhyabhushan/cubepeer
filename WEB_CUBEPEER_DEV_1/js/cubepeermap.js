/*Wait of rready signal*/
$(document).ready(function(){
	/*select th element*/
	// Wait for window to finish then create our google map below
	google.maps.event.addDomListener(window, 'load', initMap);
	function initMap() {
	var cubepeer = {lat: 16.503249, lng: 77.937012};
	var map = new google.maps.Map(document.getElementById('map_canvas'), {
		center: cubepeer,
		zoom: 5,
		styles: [	{
		"featureType":"landscape",
		"stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
	});
	var locations = [
		['CubePeer Bhilai', 21.2060410, 81.3486400],
		['CubePeer Bangalore', 12.915548, 77.682615],
		['CubePeer Pune', 18.511291, 73.871437]];
	var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
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
/*Modify the element*/
});