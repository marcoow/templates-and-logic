import Ember from 'ember';
import filterBy from '../computeds/filter-by';

const { Controller, computed } = Ember;

export default Controller.extend({
  queryParams: ['filter'],
  filter: 'active',

  filterProperty: computed('filter', function() {
    return {
      active:   'isActive',
      inactive: 'isInactive',
      senior:   'isSenior'
    }[this.get('filter')];
  }),
  users: filterBy('model', 'filterProperty')
});
