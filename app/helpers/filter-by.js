import Ember from 'ember';

const { isEmpty } = Ember;

export function filterBy([collection, filterProperty, filterValue]) {
  if (isEmpty(filterProperty)) {
    return collection;
  } else {
    return collection.filterBy(filterProperty, filterValue);
  }
}

export default Ember.Helper.helper(filterBy);
