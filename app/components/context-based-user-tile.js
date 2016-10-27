import Ember from 'ember';

import { task } from 'ember-concurrency';
const { Component, RSVP, isPresent, computed } = Ember;

export default Component.extend({
  firstName: computed.oneWay('user.firstName'),
  lastName: computed.oneWay('user.lastName'),

  _validate() {
    let { firstName, lastName } = this.getProperties('firstName', 'lastName');

    if (isPresent(firstName) && isPresent(lastName)) {
      return RSVP.resolve();
    } else {
      return RSVP.reject();
    }
  },

  save: task(function* () {
    yield this._validate();
    this.get('user').setProperties(this.getProperties('firstName', 'lastName'));
    yield this.get('user').save();
    this.set('isEditing', false);
  }),

  actions: {
    startEditing() {
      this.set('isEditing', true);
    },

    cancelEditing() {
      this.set('isEditing', false);
    },

    setFirstName(value) {
      this.set('firstName', value);
    },

    setLastName(value) {
      this.set('lastName', value);
    }
  }
});
