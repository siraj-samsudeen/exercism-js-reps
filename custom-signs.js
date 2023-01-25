export const buildSign = (occasion, name) => {
  return `Happy ${occasion} ${name}!`;
};

export const buildBirthdaySign = (age) => {
  const praise = age >= 50 ? "mature" : "young";
  return `Happy Birthday! What a ${praise} fellow you are.`;
};

export const graduationFor = (name, year) => {
  return `Congratulations ${name}!\nClass of ${year}`;
};

export const costOf = (sign, currency) => {
  const signCost = (20 + sign.length * 2).toFixed(2);
  return `Your sign costs ${signCost} ${currency}.`;
};
