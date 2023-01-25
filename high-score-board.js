export const createScoreBoard = () => {
  return { "The Best Ever": 1000000 };
};

export const addPlayer = (scoreBoard, player, score) => {
  scoreBoard[player] = score;
  return scoreBoard;
};

export const removePlayer = (scoreBoard, player) => {
  delete scoreBoard[player];
  return scoreBoard;
};

export const updateScore = (scoreBoard, player, score) => {
  scoreBoard[player] += score;
  return scoreBoard;
};

export const applyMondayBonus = (scoreBoard) => {
  for (const playerName in scoreBoard) {
    scoreBoard[playerName] += 100;
  }
  return scoreBoard;
};

export const normalizeScore = (params) => {
  const normalization = params["normalizeFunction"];
  return normalization(params["score"]);
};
