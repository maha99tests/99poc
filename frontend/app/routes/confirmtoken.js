import Ember from 'ember';

export default Ember.Route.extend({
    model(param) {
        return Ember.RSVP.hash({
            confirmation: this.store.findRecord('confirmation', 1),
            token: param.token,
            user: null,
        });
    },
    setupController: function(controller, model) {
        controller.set("confirmation_updated", false);
        controller.set('model', model); 
    }, 
    actions: {
        error: function(error, transition) {
            console.log("I was called");
            this.controller.set('confirmation_updated', true);
            return true;
        },
        didTransition: function() {
            var self=this;
            this.currentModel.confirmation.token=this.currentModel.token;
            this.currentModel.confirmation.save().then(function() {
                self.controller.set('confirmation_updated', true);
                self.currentModel.user=self.store.findRecord('user', self.currentModel.confirmation.get("user_id"));
            }).catch(function() {
                self.controller.set('confirmation_updated', true);
            });
        }
    }
});
