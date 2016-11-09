import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('user', {
      title: "",
      first_name: "Maha",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  },
  actions: {
    persist() {
      console.log(this.currentModel.get("first_name"));
      var self=this;
      this.currentModel.save().then(function() {
        self.transitionTo('confirmation', self.currentModel.get("id"));
      });
    }
  }
});
