// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HeaderView.prototype.template = Handlebars.compile($("#header-tpl").html());
    FooterView.prototype.template = Handlebars.compile($("#footer-tpl").html());

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    MapView.prototype.template = Handlebars.compile($("#map-tpl").html());
    NewsView.prototype.template = Handlebars.compile($("#news-tpl").html());
    SettingsView.prototype.template = Handlebars.compile($("#settings-tpl").html());

    router.addRoute('', function() {
        $('body').html(new HeaderView().render().$el);
        $('body').append(new FooterView().render().$el);
        $('body').append(new HomeView().render().$el);
    });

    router.addRoute('home', function() {
        $('body').html(new HeaderView().render().$el);
        $('body').append(new FooterView().render().$el);

        $('body').append(new HomeView().render().$el);
        $('a.active').removeClass('active');
        $('span.icon-home').parent().addClass('active');
    });

    router.addRoute('map', function() {
        $('body').html(new HeaderView().render().$el);
        $('body').append(new FooterView().render().$el);
        
        $('body').append(new MapView().render().$el);
        $('a.active').removeClass('active');
        $('span.icon-search').parent().addClass('active');
    });

    router.addRoute('news', function() {
        $('body').html(new HeaderView().render().$el);
        $('body').append(new FooterView().render().$el);
        
        $('body').append(new NewsView().render().$el);
        $('a.active').removeClass('active');
        $('span.icon-info').parent().addClass('active');
    });

    router.addRoute('settings', function() {
        $('body').html(new HeaderView().render().$el);
        $('body').append(new FooterView().render().$el);
        
        $('body').append(new SettingsView().render().$el);
        $('a.active').removeClass('active');
        $('span.icon-gear').parent().addClass('active');
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
