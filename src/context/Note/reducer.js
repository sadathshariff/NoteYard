export const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: action.payload };
    case "DELETE_NOTE":
      return { ...state, notes: action.payload };
    case "EDIT_NOTE":
      return { ...state, notes: action.payload };
    case "GET_NOTES":
      return { ...state, notes: action.payload };
    case "TRASHED_NOTES":
      return {
        ...state,
        trashedNotes: [...state.trashedNotes, action.payload],
      };
    case "REMOVE_FROM_TRASH":
      return {
        ...state,
        trashedNotes: [
          ...state.trashedNotes.filter(
            (item) => item._id !== action.payload._id
          ),
        ],
      };

    default:
      return { ...state };
  }
};
