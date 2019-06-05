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

// var cities = L.layerGroup();

// L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
// L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
// L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
// L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);


var iconlogo = L.icon({
    iconUrl: 'https://pbs.twimg.com/profile_images/1806426743/INSEJEC_Bolinha.png',
    iconSize: [32,32],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var iconigreja = L.icon({
    iconUrl: 'https://img.icons8.com/metro/420/church.png',
    iconSize: [32,32],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var templo = L.marker([-23.196380, -45.905417], {icon: iconlogo}).bindPopup('<h1>INSEJEC</h1> São José Dos Campos');

var cel = L.geoJSON(celulas, 
            {pointToLayer: function(feature, latlng){
                return L.marker(latlng);
            },
              onEachFeature: function(feature, layer){
                  var nome = feature.properties.nome;
                  var tel = feature.properties.tel;
                  var lider = feature.properties.lider;

                  layer.bindPopup("<p>Nome: " + nome + "</p>"+ 
                  "</br>Telefone: " + tel + 
                  "</br>Lider: " + lider);

                //   layer.on('mouseover', function() {layer.openPopup();});
                //   layer.on('mouseout', function() {layer.closePopup();});
              }
        });

       

var osmAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';

var googleAttr = 'Dados Cartográficos &copy;2019 Google' +
        '<a style="text-decoration: none; cursor: pointer; color: rgb(68, 68, 68);" href="https://www.google.com/intl/pt-BR_US/help/terms_maps.html" target="_blank" rel="noopener">Termos de Uso</a>';

var baserelief = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {});

var osm = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: osmAttr});


googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: googleAttr
});


var map = L.map(document.getElementById('mapDIV'), {
    center: [-23.210362, -45.896853],
    zoom: 12,
    layers: [osm, cel]
});

// celula.addTo(map);


var baseLayers = {
    "Streets": osm,
    "Satélite": googleHybrid,
    "Baserelief": baserelief
};


var overlays = {
    "Templo": templo,
    "Celula": cel
}

L.control.layers(baseLayers, overlays).addTo(map);