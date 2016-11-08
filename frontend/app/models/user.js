import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr(),
  last_name: DS.attr(),
  email: DS.attr(),
  password: DS.attr('string', { defaultValue: "**********"}),
  password_confirmation: DS.attr('string', { defaultValue: "**********"}),
});
