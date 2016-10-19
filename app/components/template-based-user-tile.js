import Ember from 'ember';

const { Component, RSVP, isPresent, computed } = Ember;

export default Component.extend({
  firstName: computed.oneWay('user.firstName'),
  lastName: computed.oneWay('user.firstName'),

  actions: {
    validate() {
      let { firstName, lastName } = this.getProperties('firstName', 'lastName');

      if (isPresent(firstName) && isPresent(lastName)) {
        return RSVP.resolve();
      } else {
        return RSVP.reject();
      }
    },

    save() {
      return this.get('user').save();
    }
  }
});
