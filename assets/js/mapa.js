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
                  var nome = feature.properties.NomeCelula;
                  var tel = feature.properties.Fone;
                  var lider = feature.properties.Lider;
                  var end = feature.properties.Endereco;
                  var dia = feature.properties.Dia;
                  var horario = feature.properties.Horario;
                  var whats = feature.properties.whats;

                  if(!whats){
                      var icon = "";
                  } else {
                      icon = "<img src=" + whats + ">";
                  }

                  layer.bindPopup("Célula: <strong>" + nome + "</strong>" +
                  "</br>Lider: " + lider +
                  "</br>Contato: " + tel + icon +
                  "</br>Dia da Semana: " + dia +
                  " Horário: " + horario + 
                  "</br>Endereço: " + end);

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