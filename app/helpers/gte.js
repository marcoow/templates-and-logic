import Ember from 'ember';

export function gte([value, reference]) {
  return value >= reference;
}

export default Ember.Helper.helper(gte);
