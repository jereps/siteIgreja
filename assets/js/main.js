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

var map = L.map(document.getElementById('mapDIV'), {
    center: [-23.210362, -45.896853],
    zoom: 12
});

var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {});

var basetopo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/WMTS/tile/1.0.0/USGSTopo/default/default028mm/{z}/{y}/{x}.png', {});

var baserelief = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {});

basemap.addTo(map);

var thetrail = L.geoJSON(trail, {
    color: '#800000',
    weight: 3,
    dashArray: '12 8 12',
});

thetrail.bindTooltip('The Valdez-Eagle Trail')
thetrail.addTo(map);

var baselayers = {
    'Shared Relief': basemap,
    'National Map topo': basetopo
};

var overlays = {
    'The Trail': thetrail
};

L.control.layers(baselayers, overlays).addTo(map);

