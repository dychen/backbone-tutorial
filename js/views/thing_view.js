var ThingView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#thingtemplate').html()),
    events: {
        'click #thingname': 'updateName',
        'keypress #editname': 'nameOnEnter',
        'blur #editname': 'close'
    },
    initialize : function() {
    },
    render : function() {
        $(this.el).html(this.template(this.model.toJSON()));
        this.name = $(this.el).find('#thingname');
        this.edit = $(this.el).find('#editname');
        this.edit.hide();
    },
    getInputValue : function() {
        return this.edit.val().trim();
    },
    updateName : function() {
        this.name.hide();
        this.edit.show();
        this.edit.focus();
    },
    nameOnEnter : function(e) {
        if (e.which == ENTER_KEY) {
            var value = this.getInputValue();
            if (value) {
                this.model.save({ name: value });
                this.render();
            }
            this.close();
        }
    },
    close : function() {
        this.name.show();
        this.edit.hide();
    }
});
