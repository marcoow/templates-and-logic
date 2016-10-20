import Ember from 'ember';

const { keys } = Object;
const { computed, copy } = Ember;

export default function join(...properties) {
  let args = [...copy(properties), function() {
    let props = this.getProperties(...properties);
    let values = keys(props).map((key) => props[key]);
    return values.join(' ');
  }];
  return computed(...args);
}
