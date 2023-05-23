/* 
Author: Rodrigo Borges
Date: 2023-03-03
Description: Code created to answer Assingment 3C, PROG2700, IT Data Analytics program
Michael's Sources: All the sources you gave in the assignment, specially https://leafletjs.com/examples/geojson/ and https://github.com/bbecquet/Leaflet.RotatedMarker
Other Sources: https://stackoverflow.com/questions/39975275/javascript-google-maps-api-auto-refresh-reload-a-simple-map, https://leafletjs.com/reference.html#map-eachlayer,
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
*/

// IIFE
(() => {

    //create variables
    var interval = 7000;

    var myIcon = L.icon({
        iconUrl: 'bus.png',
        iconSize: [20, 25],
    });

    //create map in leaflet and tie it to the div called 'theMap'
    const map = L.map('theMap').setView([44.650627, -63.597140], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


    //Get data from Halifax Transit (function created to refresh all markers)
    function refresh() {
        fetch('https://prog2700.onrender.com/hrmbuses')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);

            // Delete existing Marks (to delete any marker when refreshing the page)
            map.eachLayer(layer => {
                if (layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
           });
            // create function to show each route on the map
            function routes (route) {

                // create GeoJSON FeatureCollection
                const featureCollection = {
                    type: "FeatureCollection",
                    features: [],
                }

                // create GeoJSON features Array of Objects
                const features = route.entity

                // filter Routes 1-10
                .filter(route => parseInt(route.vehicle.trip.routeId) < 11)

                // create GeoJSON feature Objects
                .map((object) => {
                    const feature = {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: {
                                latitude: object.vehicle.position.latitude, 
                                longitude: object.vehicle.position.longitude,
                            },
                        }, 
                        properties: {
                            route: object.vehicle.trip.routeId,
                            id: object.id,    
                            bearing: object.vehicle.position.bearing,
                            startDate: object.vehicle.trip.startDate,
                            trip: object.vehicle.trip.tripId,
                        },
                    }; 
                    return feature;
                });
            
                // pass features to featuresCollection
                featureCollection.features = features;

                console.log(featureCollection);

                // Create a new marker for each feature and create the popup with selected info
                const markers = featureCollection.features.map((feature) => {
                    return L.marker([feature.geometry.coordinates.latitude, feature.geometry.coordinates.longitude], {icon: myIcon, rotationAngle: feature.properties.bearing})
                    .bindPopup(
                        `<strong>Route:</strong> ${feature.properties.route}<br>
                        <strong>ID:</strong> ${feature.properties.id}<br>
                        <strong>Trip_ID:</strong> ${feature.properties.trip}<br>
                        <strong>StartDate:</strong> ${Date(feature.properties.startDate)}`
                    );
                });

                // Add each marker to map
                const markerLayer = L.layerGroup(markers).addTo(map);
            }
            console.log(routes(json));

            // refresh every 7 sec
            setTimeout(refresh, interval);
        })
    }

    // call refresh the first time
    refresh();

})();