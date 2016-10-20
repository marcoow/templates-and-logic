import Ember from 'ember';

const { keys } = Object;
const { computed, copy } = Ember;

export default function join(first, second, glue = ' ') {
  let args = [first, second, function() {
    return [this.get(first), this.get(second)].join(glue);
  }];
  return computed(...args);
}
