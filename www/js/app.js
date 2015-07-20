// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HeaderView.prototype.template = Handlebars.compile($("#header-tpl").html());
    FooterView.prototype.template = Handlebars.compile($("#footer-tpl").html());

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    MapView.prototype.template = Handlebars.compile($("#map-tpl").html());
    NewsView.prototype.template = Handlebars.compile($("#news-tpl").html());
    SettingsView.prototype.template = Handlebars.compile($("#settings-tpl").html());

    //var slider = new PageSlider($('body'));

    router.addRoute('', function() {
        $('body').html(new HeaderView().render().$el);
        $('body').append(new FooterView().render().$el);
        $('body').append(new HomeView().render().$el);
        document.querySelector('#init-toggle').addEventListener('toggle', initRoute);
    });

    router.addRoute('home', function() {
        $('body').html(new HeaderView().render().$el);
        $('body').append(new FooterView().render().$el);

        $('body').append(new HomeView().render().$el);
        $('a.active').removeClass('active');
        $('span.icon-home').parent().addClass('active');
        document.querySelector('#init-toggle').addEventListener('toggle', initRoute);
    });

    router.addRoute('map', function() {
        $('body').html(new HeaderView().render().$el);
        $('body').append(new FooterView().render().$el);

        $('body').append(new MapView().render().$el);
        initializeMap();
        //$('#map-button').click();
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

        // Override default HTML alert with native dialog
        if (navigator.notification) {
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "FurgonTrack", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    function initializeMap() {
        var map = L.map('map').setView([-3.781013, -38.514633], 13);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: false}).addTo(map);
        L.Util.requestAnimFrame(map.invalidateSize,map,!1,map._container);
    }

    function initRoute(){
        alert("Recorrido iniciado");
    }

}());
