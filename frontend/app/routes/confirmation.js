import Ember from 'ember';

export default Ember.Route.extend({
    model(param) {
        return Ember.RSVP.hash({
            confirmation: this.store.createRecord('confirmation', {
                user_id: param.id
            }),
            user: this.store.findRecord("user", param.id),
        });
    },
    setupController: function(controller, model) {
        controller.set('confirmation_processed', false);
        controller.set('model', model);
    },
    actions: {
        loading: function() {
            return true;
        },
        didTransition: function() {
            var self=this;
            this.currentModel.confirmation.save().then(function() {
                console.log("success!");
                self.controller.set('confirmation_processed', true); 
            }).catch(function() {
                console.log("failure!");
                self.controller.set('confirmation_processed', true); 
            });
        }
    }
});
