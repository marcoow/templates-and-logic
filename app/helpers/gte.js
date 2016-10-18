import Ember from 'ember';

export function gte([value, compareTo]) {
  return value >= compareTo;
}

export default Ember.Helper.helper(gte);
