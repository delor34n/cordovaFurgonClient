var HomeView = function (service) {

    this.initialize = function () {
        this.$el = $('<div class="content"></div>');
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        return this;
    };

    this.initialize();
}