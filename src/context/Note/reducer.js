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
    case "GET_ARCHIVE_NOTES":
      return { ...state, archives: action.payload };
    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };
    case "RESTORE_FROM_ARCHIVE":
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };
    case "DELETE_FROM_ARCHIVE":
      return { ...state, archives: action.payload };
    default:
      return { ...state };
  }
};
