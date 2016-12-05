import Ember from 'ember';

const { computed, A, observer, addObserver, run: { once } } = Ember;

const Computer = Ember.Object.extend({
  init() {
    this._super(...arguments);
  },

  _observeElements() {
    let filterProperty = this.get('filterProperty');
    this.get('collection').map((element) => {
      return element.addObserver(filterProperty, () => {
        once(() => {
          this.set('computedValue', this.compute());
          this.get('context').notifyPropertyChange(this.get('key'));
        });
      });
    });
  },

  dependenciesDidChange: observer('collection.[]', 'filterProperty', function() {
    this.set('computedValue', this.compute());
    this.get('context').notifyPropertyChange(this.get('key'));
    this._observeElements();
  }),

  compute() {
    return A(this.get('collection')).filterBy(this.get('filterProperty'));
  }
});

export default function filterBy(collectionName, filterPropertyName) {
  let computer = Computer.create({
    collection: computed.oneWay(`context.${collectionName}`),
    filterProperty: computed.oneWay(`context.${filterPropertyName}`)
  });
  return computed(collectionName, filterPropertyName, function(key) {
    computer.setProperties({ context: this, key});
    computer._observeElements();

    return computer.compute();
  });
}
