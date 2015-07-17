// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());

    router.addRoute('', function() {
        $('body').html(new HomeView().render().$el);
    });
    router.start();

    /* --------------------------------- Event Registration -------------------------------- */

    document.addEventListener('deviceready', function () {
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();
        FastClick.attach(document.body);


    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */

}());
