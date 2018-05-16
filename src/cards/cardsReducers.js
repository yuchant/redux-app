const log = console.log.bind(this, "[cardsReducers.js]");

export default (cards = [], action) => {
  log("cardsReducer", cards, action);
  return cards;
  switch (action.type) {
    default:
      log("Default: cards", cards);
  }
};
