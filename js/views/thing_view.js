var ThingView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#thingtemplate').html()),
    initialize : function() {
    },
    render : function() {
        $(this.el).html(this.template(this.model.toJSON()));
    }
});
