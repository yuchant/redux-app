const microStepDescriptions = [
  "Doing this is good for you.",
  "Studies show that changing your habits is as easy as doing it.",
  "Just do it.",
  "A recent study by Harvard Professor Jim Jackson revealed that anxiety levels are directly correlated with stuff.",
  "Interestingly, the quick brown fox jumped over the lazy dog."
];

const microStepLabels = ["Meditate", "Walk", "Gratitude"];

const microSteps = [
  {
    index: 0,
    text: "Meditate for 5 minutes",
    description:
      "Studies show that meditating results in increased mood, happiness, and reduces anxiety.",
    category: "Purpose"
  },
  {
    index: 1,
    text: "Go on a nice walk",
    description:
      "Slow down, take a deep breath, and go on a walk. Notice your surroundings, and take a moment to remove yourself from your usual routine.",
    category: "Wellness"
  },
  {
    index: 2,
    text: "Feel gratitude for somebody you love",
    description:
      "Sometimes we're so caught up in our own lives that we don't think of others. Take a moment to appreciate your closest friends, family, pets, or anything else.",
    category: "Wellness"
  }
];

export const addMicroStepsToArticle = article => {
  article.microSteps = microSteps.slice();
};
