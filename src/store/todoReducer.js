const initialState = {
  nextId: 2,
  data: {
    1: {
      content: "Get Hired as a Developer",
      completed: false,
    },
  },
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        nextId: state.nextId + 1,
        data: {
          ...state.data,
          [state.nextId]: {
            content: action.content,
            completed: false,
          },
        },
      };
    case "EDIT_TODO":
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: {
            ...state.data[action.id],
            content: action.content,
          },
        },
      };
      case "DELETE_TODO":
        const { [action.id]: deleted, ...rest } = state.data;
        return {
          ...state,
          data: rest,
        };
    case "TOGGLE_TODO":
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: {
            ...state.data[action.id],
            completed: !state.data[action.id].completed,
          },
        },
      };
    default:
      return state;
  }
};


