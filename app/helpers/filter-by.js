import Ember from 'ember';

const { isEmpty, A } = Ember;

export function filterBy([collection, filterProperty, filterValue]) {
  if (isEmpty(filterProperty)) {
    return collection;
  } else {
    return A(collection).filterBy(filterProperty, filterValue);
  }
}

export default Ember.Helper.helper(filterBy);
