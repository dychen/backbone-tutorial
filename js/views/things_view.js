var ThingsView = Backbone.View.extend({
    el: '#thingmain',
    events: {
        'keypress #inputthingname': 'createThing'
    },
    initialize : function() {
        this.things = new Things();
    },
    getInputValue : function() {
        return {
            name: this.$("#inputthingname").val().trim()
        }
    },
    createThing : function(e) {
        if (e.which === ENTER_KEY) {
            var value = this.getInputValue();
            if (value) {
                var newThing = new Thing(value);
                this.things.add(newThing); 
                this.$("#inputthingname").val('');
                this.showCreatedThing(newThing);
            }
        }
    },
    showCreatedThing : function(thing) {
        var newThingView = new ThingView({ model: thing });
        newThingView.render();
        $('#thingtable').append(newThingView.el);
    }
});

