import Ember from 'ember';

const { isEmpty } = Ember;

export function filterBy([collection, filterProperty]) {
  if (isEmpty(filterProperty)) {
    return collection;
  } else {
    return collection.filterBy(filterProperty);
  }
}

export default Ember.Helper.helper(filterBy);
