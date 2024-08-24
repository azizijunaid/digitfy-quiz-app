const steps = [
  {
    title: "How was your weekend overall?",
    options: [
      { emoji: "👍", label: "Good" },
      { emoji: "🤔", label: "Satisfied" },
      { emoji: "👎", label: "Bad" },
    ],
  },
  {
    title: "How was your month overall?",
    options: [
      { emoji: "👍", label: "Good" },
      { emoji: "🤔", label: "Satisfied" },
      { emoji: "👎", label: "Bad" },
    ],
  },
  {
    title: "How was your year overall?",
    options: [
      { emoji: "👍", label: "Good" },
      { emoji: "🤔", label: "Satisfied" },
      { emoji: "👎", label: "Bad" },
    ],
  },
  // Add more steps as needed
];

const getSteps = async () => {
  return new Promise((resolve, reject) => {
    resolve(steps);
  });
};

export { getSteps };
