var HeaderView = function() {

	this.initialize = function() {
		this.$el = $('<div class="header"></div>');
  		this.$el.html(this.template());
  	};

	this.render = function() {
  		this.$el.html(this.template());
      	return this;
  	};

  	this.initialize();

}