import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    doSignUp() {
      console.log("component::doSignUp");
      this.sendAction();
    }
  }
});
