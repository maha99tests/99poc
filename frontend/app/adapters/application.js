import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://60.60.60.60:3000/apiv2'
});
