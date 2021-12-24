// initialize and add maps
function initMap() {
  // Your location 
  const loc = { lat:27.752476574342552,lng: 85.33229897432592}
  // Centered map on locaion
  const map = new google.maps.Map(document.querySelector('.map'),{
    zoom:14,
    center:loc
  });
  // The marker positioned at location
  const marker = new google.maps.Marker({position:loc, map:map});

}





// 27.752476574342552, 85.33229897432592