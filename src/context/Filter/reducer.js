export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_LABEL":
      const newLabel = state.labels.includes(action.payload)
        ? state.labels.filter((item) => item !== action.payload)
        : [...state.labels, action.payload];
      return { ...state, labels: newLabel };
    case "SORT_BY_PRIORITY":
      return { ...state, sortByPriority: action.payload };
    case "SORT_BY_DATE":
      return { ...state, sortByDate: action.payload };

    case "CLEAR_FILTER":
      return {
        sortByPriority: "",
        sortByDate: "",
        labels: [],
      };
    default:
      return state;
  }
};
