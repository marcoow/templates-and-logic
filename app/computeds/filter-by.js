import Ember from 'ember';

const { computed, computed: { filter }, A, observer, defineProperty } = Ember;

// This implements a filterBy Computed Property macro where the property that's
// being filtered by is dynamic (only know at runtime).
const DynamicFilterByComputed = Ember.Object.extend({
  // This could be implemented in a base class, e.g. Ember.Computed.
  recompute() {
    // not super happy with this - there might be a better way…
    this.get('context').notifyPropertyChange(this.get('key'));
  },

  contentDidChange: observer('content', function() {
    this.recompute();
  }),

  filterPropertyDidChange: observer('filterProperty', function() {
    let filterProperty = this.get('filterProperty');
    let property = filter(`collection.@each.${filterProperty}`, (item) => item.get(filterProperty));
    defineProperty(this, 'content', property);
  }),

  compute(collection, filterProperty) {
    this.set('collection', collection);
    this.set('filterProperty', filterProperty);

    return this.get('content');
  }
});

// The internals of this could be wrapped in a macro similar Ember.Helper.helper so
// that this could be shortened to sth. like this:
//
// export default function filterBy(collectionName, filterPropertyName) {
//   return Ember.computed.computize(DynamicFilterByComputed);
// }
export default function filterBy(collectionName, filterPropertyName) {
  let computer = DynamicFilterByComputed.create();

  return computed(collectionName, filterPropertyName, function(key) {
    // not super happy with this - there might be a better way…
    computer.setProperties({ context: this, key});

    return computer.compute(this.get(collectionName), this.get(filterPropertyName));
  });
}
