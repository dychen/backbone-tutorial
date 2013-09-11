var Things = Backbone.Collection.extend({
    model: Thing,
    localStorage: new Backbone.LocalStorage('things-backbone')
});
