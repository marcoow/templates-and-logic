import Ember from 'ember';
import filterBy from '../computeds/filter-by';

const { Controller, computed } = Ember;

export default Controller.extend({
  queryParams: ['filter'],
  filter: 'active',

  filterValue: computed.equal('filter', 'active'),
  users: filterBy('model', 'isActive', 'filterValue')
});
