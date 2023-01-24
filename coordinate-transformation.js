export const translate2d = (dx, dy) => {
  return (x, y) => {
    return [dx + x, dy + y];
  };
};

export const scale2d = (sx, sy) => {
  return (x, y) => {
    return [sx * x, sy * y];
  };
};

export const composeTransform = (f, g) => {
  return (x, y) => {
    return g(f(x, y)[0], f(x, y)[1]);
  };
};

export const memoizeTransform = (f) => {
  let previousX, previousY, previousResult;
  const memoize = (x, y) => {
    if (previousX === x && previousY === y) {
      return previousResult;
    }
    previousX = x;
    previousY = y;
    return (previousResult = f(x, y));
  };
  return memoize;
};
