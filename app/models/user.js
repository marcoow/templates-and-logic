import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName:  attr('string'),
  age:       attr('number'),
  isActive:  attr('boolean'),
  isAdmin:   attr('boolean')
});
