export const frontDoorResponse = (line) => {
  return line.charAt(0);
};

export const frontDoorPassword = (line) => {
  const firstLetter = line.charAt(0).toUpperCase();
  const remainingLetters = line.slice(1).toLowerCase();
  return firstLetter + remainingLetters;
};

export const backDoorResponse = (line) => {
  const trimmedSentences = line.trim();
  return trimmedSentences.charAt(trimmedSentences.length - 1);
};

export const backDoorPassword = (line) => {
  return `${frontDoorPassword(line)}, please`;
};
