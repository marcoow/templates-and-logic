import Ember from 'ember';
import DS from 'ember-data';

const { attr } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName:  attr('string'),
  age:       attr('number'),
  isActive:  attr('boolean'),
  isAdmin:   attr('boolean'),

  isSenior: computed.gte('age', 65)
});
