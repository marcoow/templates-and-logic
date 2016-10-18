import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  queryParams: ['filterBy'],
  filterBy: '',

  filteredUsers: computed('model', 'filterBy', function() {
    return this.get('model').filterBy(this.get('filterBy'));
  })
});
