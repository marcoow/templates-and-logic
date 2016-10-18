import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  activeUsers: computed.filterBy('model', 'isActive', true),
  inactiveUsers: computed.filterBy('model', 'isActive', false)
});
