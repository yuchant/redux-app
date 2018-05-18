const microStepDescriptions = [

  
];

const microStepLabels = ["Meditate", "Walk", "Gratitude"];



const allMicroSteps = [
  {
    id: 0,
    text: "Meditate for 5 minutes",
    description:
      "Studies show that meditating results in increased mood, happiness, and reduces anxiety.",
    category: "Purpose"
  },
  {
    id: 1,
    text: "Go on a nice walk",
    description:
      "Slow down, take a deep breath, and go on a walk. Notice your surroundings, and take a moment to remove yourself from your usual routine.",
    category: "Well-Being"
  },
  {
    id: 2,
    text: "Feel gratitude for somebody you love",
    description:
      "Sometimes we're so caught up in our own lives that we don't think of others. Take a moment to appreciate your closest friends, family, pets, or anything else.",
    category: "Well-Being"
  },
  {
    id: 3,
    text: "Do something",
    description:
        "Interestingly, the quick brown fox jumped over the lazy dog.",
    category: "Well-Being"
  },
  {
    id: 4,
    text: "Count your blessings",
    description:
      "A recent study by Harvard Professor Jim Jackson revealed that anxiety levels are directly correlated with stuff.",
    category: "Wisdom"
  },
  {
    id: 5,
    text: "Open up to somebody",
    description:
        "Studies show that changing your habits is as easy as doing it.",
    category: "Wonder"
  },
  {
    id: 6,
    text: "Compliment a stranger",
    description:
        "Doing this is good for you.",

    category: "Wonder"
  },
  {
    id: 7,
    text: "Take a break",
    description:
      "Just do it.",
  
    category: "Well-Being"
  },
  {
    id: 8,
    text: "Write in your journal",
    description:
      "Sometimes we're so caught up in our own lives that we don't think of others. Take a moment to appreciate your closest friends, family, pets, or anything else.",
    category: "Purpose"
  }
];

const getRandomItem = (items) => items[Math.floor(Math.random()*items.length)]


export const addMicroStepsToArticle = article => {
  const MAX_STEPS = 4;
  const randomStepCount = Math.ceil(Math.random() * (MAX_STEPS));
  const microSteps = [];
  for (let i = 0; i < randomStepCount; i++) {
    const randomMicroStep = getRandomItem(allMicroSteps);
    const isNotUnique = microSteps.some(step => step.id == randomMicroStep.id);
    if (!isNotUnique) {
      microSteps.push(randomMicroStep);
    }
  }
  console.log("Adding microsteps to article: ", microSteps);
  article.microSteps = microSteps;
};
