import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://60.60.60.60:3000/'
});
