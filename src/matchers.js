export const shallowMatch = (target, props) => {
  for (let key in target) {
    if (target[key] !== props[key]) {
      return false;
    }
  }
  return true;
};
