import Ember from 'ember';

const { computed, A } = Ember;

export default function join(collection, filterProperty, valueProperty) {
  return computed(collection, `${collection}.@each.${filterProperty}`, valueProperty, function() {
    return A(this.get(collection)).filter((element) => element.get(filterProperty) === this.get(valueProperty));
  });
}
