const chordReducer = (state, action) => {
  switch (action.type) {
    case "KEY":
      return state = action.keyValue;
    case "QUALITY":
      return state = action.qualityValue;
    case "EXTENSION":
      return state = action.extensionValue;
    case "BASS":
      return state = action.bassValue;
    default:
      return state;
  }
};

export default chordReducer;