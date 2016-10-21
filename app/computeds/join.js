import Ember from 'ember';

const { computed } = Ember;

export default function join(first, second, glue = ' ') {
  let args = [first, second, function() {
    return [this.get(first), this.get(second)].join(glue);
  }];
  return computed(...args);
}
