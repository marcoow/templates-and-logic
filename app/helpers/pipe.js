import Ember from 'ember';

const { typeOf } = Ember;

export function pipe(actions = []) {
  return function(...args) {
    return actions.reduce((acc, current, i) => {
      if (i === 0) {
        return current(...args);
      }

      if (typeOf(acc.then) === 'function') {
        return acc.then(current);
      } else {
        return current(acc);
      }
    }, undefined);
  };
}

export default Ember.Helper.helper(pipe);
