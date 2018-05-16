import CardBasic from "../cards/CardListBasic";
import CardCTA from "../cards/CardListCTA";

const componentTypes = {
  Basic: CardBasic,
  CTA: CardCTA
};

export const getComponent = type_ => {
  const card = componentTypes[type_];
  return card ? card : null;
};

export default componentTypes;
