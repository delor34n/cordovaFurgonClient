// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    MapView.prototype.template = Handlebars.compile($("#map-tpl").html());
    HeaderView.prototype.template = Handlebars.compile($("#header-tpl").html());
    FooterView.prototype.template = Handlebars.compile($("#footer-tpl").html());

    $('body').html(new HeaderView().render().$el);
    $('body').append(new FooterView().render().$el);

    router.addRoute('', function() {
        $('body').append(new HomeView().render().$el);
        $('a.active').removeClass('active');
        $('span.icon-home').parent().addClass('active');
    });

    router.addRoute('map', function() {
        $('body').append(new MapView().render().$el);
        $('a.active').removeClass('active');
        $('span.icon-search').parent().addClass('active');
    });
    router.start();

    /* --------------------------------- Event Registration -------------------------------- */

    document.addEventListener('deviceready', function () {
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();
        FastClick.attach(document.body);
        initializeMap();
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    function initializeMap() {
        var map = new L.Map('map');

        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © OpenStreetMap contributors';
        var osm = new L.TileLayer(osmUrl, { attribution: osmAttrib });

        map.setView(new L.LatLng(43.069452, -89.411373), 11);
        map.addLayer(osm);
    }

}());
