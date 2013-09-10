var ThingsView = Backbone.View.extend({
    el: '#thingmain',
    events: {
        'keypress #inputthingname': 'createThing'
    },
    initialize : function() {
        this.things = new Things();
    },
    getInputValues : function() {
        return {
            name: this.$("#inputthingname").val().trim()
        }
    },
    createThing : function(e) {
        if (e.which === ENTER_KEY) {
            var value = this.getInputValues();
            if (value) {
                var newThing = new Thing(value);
                this.things.add(newThing); 
                this.showCreatedThing(newThing);
                this.$("#inputthingname").val('');
            }
        }
    },
    showCreatedThing : function(thing) {
        var newThingView = new ThingView({ model: thing });
        newThingView.render();
        $('#thinglist').append(newThingView.el);
    }
});
