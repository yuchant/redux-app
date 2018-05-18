export const TOGGLE_TOPIC = "TOGGLE_TOPIC";

export const toggleTopic = topic => {
  return {
    type: TOGGLE_TOPIC,
    topic: topic
  };
};

export const COMPLETE_CONFIGURATION = "COMPLETE_CONFIGURATION";

export const completeConfiguration = () => {
  return {
    type: COMPLETE_CONFIGURATION
    // data is already in state.
  };
};
