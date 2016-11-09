import DS from 'ember-data';

export default DS.Model.extend({
    user_id: DS.attr(),
    token: DS.attr(),
    confirmation_sent: DS.attr(),
    user_confirmed: DS.attr()
});
