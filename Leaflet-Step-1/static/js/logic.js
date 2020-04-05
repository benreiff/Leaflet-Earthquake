// USGS website for GeoJSON data for all earthquakes in the last day
// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson


// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, createMarkers);


function createMap(allEarthquakes) {

  var streetMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-basic",
    accessToken: API_KEY
  });

  var satMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.satellite",
  accessToken: API_KEY
});


  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    "Satellite View": satMap,
    "Street View": streetMap    
  };

  // Create an overlayMaps object to hold the bikeStations layer
  var overlayMaps = {
    "All Earthquakes": allEarthquakes
  };

  // Create a map object
  var myMap = L.map("map", {
    center: [49.20, -116.33],
    zoom: 3,
    layers: [streetMap, satMap, allEarthquakes]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}



function createMarkers(response) {

  // Pull the "earthquakes" property off of response
  var earthquakes = response.features;
  console.log(earthquakes);

  // Initialize an array to hold earthquake markers
  var earthquakeMarkers = [];

  // Loop through the earthquakes array
  for (var index = 0; index < earthquakes.length; index++) {
    var earthquake = earthquakes[index];

    // For each earthquake, create a marker and bind a popup with the earthquake's name
    var earthquakeMarker = L.circle([earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]], {
      fillOpacity: .5,
      color: color,
      weight: 1,
      fillColor: color,
      radius: earthquake.properties.mag * 70000
    }).bindPopup("<h3>" + earthquake.properties.place + "<h3><h3>Magnitude: " + earthquake.properties.mag + "</h3>");
    
    // Designating colors for earthquake magnitudes 
    var color = "";
    if (earthquake.properties.mag > 5) {
      color = "#ff0000";
    }
    else if (earthquake.properties.mag > 4) {
      color = "#ffbf00";
    }
    else if (earthquake.properties.mag > 3) {
      color = "#ffbf00";
    }
    else if (earthquake.properties.mag > 2) {
      color = "#40ff00";
    }
    else if (earthquake.properties.mag > 1) {
      color = "#0040ff";
    }
    else {
      color = "#ff00ff";
    }

    // Add the marker to the earthquakeMarkers array
    earthquakeMarkers.push(earthquakeMarker);
  }

  // Create a layer group made from the earthquake markers array, pass it into the createMap function
  createMap(L.layerGroup(earthquakeMarkers));
}