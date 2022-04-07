const filterByLabel = (state, data) => {
  return state.labels.length === 0
    ? data
    : data.filter((product) => state.labels.includes(product.label));
};

const filterByPriority = (state, data) => {
  switch (state.sortByPriority) {
    case "High":
      return data.filter((item) => item.priority === "High");
    case "Medium":
      return data.filter((item) => item.priority === "Medium");
    case "Low":
      return data.filter((item) => item.priority === "Low");
    default:
      return data;
  }
};

const filterByDate = (state, data) => {
  switch (state.sortByDate) {
    case "Oldest":
      return [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
    case "Newest":
      return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    default:
      return data;
  }
};
const Compose =
  (state, ...functions) =>
  (data) => {
    return functions.reduce((acc, curr) => {
      return curr(state, acc);
    }, data);
  };

export { filterByLabel, filterByPriority, filterByDate, Compose };
