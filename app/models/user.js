import Ember from 'ember';
import DS from 'ember-data';
import join from '../computeds/join';

const { attr } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName:  attr('string'),
  age:       attr('number'),
  isActive:  attr('boolean'),

  isSenior: computed.gte('age', 65),
  fullName: join('firstName', 'lastName')
});
