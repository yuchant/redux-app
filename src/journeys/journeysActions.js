export const TOGGLE_TOPIC = "TOGGLE_TOPIC";

export const toggleTopic = topic => {
  return {
    type: TOGGLE_TOPIC,
    topic: topic
  };
};
