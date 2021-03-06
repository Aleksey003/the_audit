$(document).ready(function(){
	//model
	Audit = Backbone.Model.extend({
		url : function(){
			return "/audits/" + this.get("id") + ".json";
		}
	});

	//collections
	Audits = Backbone.Collection.extend({
		model : Audit
	});
	var audits = new Audits();
	audits.url = '/audits.json';
	audits.fetch({
		success : function(){
			audits_view = new AuditsView({});
			_.each(audits.models, function(model){
				audits_view.addOne(model);
			});
		}
	});

	//view collection
	var AuditsView = Backbone.View.extend({
		el: "#screencast",
		addOne : function(model){
			view = new AuditView({model :model});
			$('ul.screencast').append(view.render());
		}
	});

	//view model
	var AuditView = Backbone.View.extend({
		tagName: "li",
		render : function() {
			return $(this.el).text(this.model.get('user_agent'));
		}
	});


});
