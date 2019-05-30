var breakpoints = {
    xs: '(max-width: 600px)',
    sm: '(min-width: 601px) and (max-width: 749px)',
    md: '(min-width: 750px) and (max-width: 979px)',
    lg: '(min-width: 980px) and (max-width: 1179px)',
    xl: '(min-width: 1180px) and (max-width: 1235px)',
    xlm: '(min-width: 1260px) and (max-width: 1400px)',
    sxl: '(min-width: 1410px) and (max-width: 1490px)',
    xxl: '(min-width: 1512px)'
};


Object.keys(breakpoints).forEach(function (breakpoint) {
    var mql = window.matchMedia(breakpoints[breakpoint]);

    if (mql.matches) {
        console.log(breakpoint);
        // alert(breakpoint);
        // window.location.reload();
    }

    mql.addListener(function (mql) {
        if (mql.matches) {
            console.log(breakpoint);
            window.location.reload();
        }
    });
});

// ---------> logica para colocar mapas das celulas  <--------------

// var map = L.map(document.getElementById('mapDIV'), {
//     center: [-23.210362, -45.896853],
//     zoom: 12
// });

// var cities = L.layerGroup();

// L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
// L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
// L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
// L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);

var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {});

var basetopo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/WMTS/tile/1.0.0/USGSTopo/default/default028mm/{z}/{y}/{x}.png', {});

var baserelief = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {});

var osm = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {});
var opencyclemap = L.tileLayer('http://tile.thunderforest.com/cycle/{z}/{x}/{y}.png', {});
var thunderforest = L.tileLayer('http://a.tile.thunderforest.com/transport/{z}/{x}/{y}.png', {});
var mapquest = L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {});
var migurski = L.tileLayer('http://tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg', {});
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


var map = L.map(document.getElementById('mapDIV'), {
    center: [-23.210362, -45.896853],
    zoom: 12,
    layers: [mapquest]
});

// basemap.addTo(map);
// baserelief.addTo(map);

// var thetrail = L.geoJSON(trail, {
//     color: '#800000',
//     weight: 3,
//     dashArray: '12 8 12',
// });

// thetrail.bindTooltip("The Valdez-Eagle Trail")
// thetrail.addTo(map);

var baseLayers = {
    "OSM": osm,
    "Basemap": basemap,
    "Shared Relief": basetopo,
    "National Map topo": baserelief,
    "OpenCycleMap": opencyclemap,
    "Thunderforest": thunderforest,
    "MapQuest": mapquest,
    "Migurski": migurski,
    "Esri_WorldImagery": Esri_WorldImagery,
    "googleHybrid": googleHybrid
};

// var overlays = {
//     "Cities": cities
// };

// var overlays = {
//     "The Trail": thetrail
// };

var overlays = {
    "base": baserelief
}

L.control.layers(baseLayers, overlays).addTo(map);



// exemplo
// var cities = L.layerGroup();

// L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
// L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
// L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
// L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);


// var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
//         '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

// // var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
// //     streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

//     var basetopo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/WMTS/tile/1.0.0/USGSTopo/default/default028mm/{z}/{y}/{x}.png', {});
// var baserelief = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {});

// var map = L.map('mapDIV', {
//     center: [39.73, -104.99],
//     zoom: 10,
//     // layers: [basetopo, cities]
// });

// basetopo.addTo(map);

// var baseLayers = {
//     "Grayscale": basetopo,
//     "Streets": baserelief
// };

// var overlays = {
//     "Cities": cities
// };

// L.control.layers(baseLayers, overlays).addTo(map);





// var map = L.map(document.getElementById('mapDIV'), {
//     center: [62.7, -144.0],
//     zoom: 6
// });

// // Base maps
// var basetopo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/WMTS/tile/1.0.0/USGSTopo/default/default028mm/{z}/{y}/{x}.png', {});
// var baserelief = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {});

// basetopo.addTo(map);

// // The trail
// var thetrail = L.geoJSON(trail, {
//     color: '#800000',
//     weight: 3,
//     dashArray: '12 8 12',
// });

// thetrail.bindTooltip("The Valdez-Eagle Trail")
// thetrail.addTo(map);

// var baselayers = {
//     "Shaded Relief": baserelief,
//     "National Map topo": basetopo
// };
// var overlays = {
//     "The Trail": thetrail
// };
// L.control.layers(baselayers, overlays).addTo(map);

// // Add scalebar

// var scale = L.control.scale()
// scale.addTo(map)

// // Add attribution
// map.attributionControl.addAttribution("National Map Topo");
// map.attributionControl.addAttribution("OpenTopoMap");