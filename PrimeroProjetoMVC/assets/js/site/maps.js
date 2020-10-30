 let map;

function initMap() {

  var latlong = { lat: -34.397, lng: 150.644 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: latlong,
    zoom: 20,
  });

  // Marcando localização pelo GPS utilizando a geolocation
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
        
  //       const pos = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       };

  //       const marker = new google.maps.Marker({
  //         position: pos,
  //         map: map,
  //       });

  //       map.setCenter(pos);
  //     },
  //     () => {
  //       handleLocationError(true, infoWindow, map.getCenter());
  //     }
  //   );
  // } else {
  //   // Browser doesn't support Geolocation
  //   handleLocationError(false, infoWindow, map.getCenter());
  // }
  // Fim da utilização do geolocation 

  // Marcando localização pelo endereço utilizando geocoder

  geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address': "Lages SC 145 88502030"}, function(results, status) {
    
    if (status === 'OK') {

      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });

      map.setCenter(results[0].geometry.location);

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });

  // Fim da utilização do geocoder
}

