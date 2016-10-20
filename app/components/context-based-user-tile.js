import Ember from 'ember';

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
    },

    save() {
      this._validate().then(() => {
        this.get('user').setProperties(this.getProperties('firstName', 'lastName'));
        return this.get('user').save();
      }).then(() => {
        this.set('isEditing', false)
      });
    }
  }
});
