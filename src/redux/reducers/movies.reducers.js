const initialState = {
    is_loading: false,
    pop_movies: [],
    error: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "POP_MOVIES_FETCHING":
        return {
          ...state,
          is_loading: true,
        };
  
      case "POP_MOVIES_FETCH_SUCCESSFUL":
        return {
          ...state,
          is_loading: false,
          pop_movies: action.payload,
          error: null,
        };
  
      case "POP_MOVIES_FETCH_FAILED":
        return {
          ...state,
          is_loading: false,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };
  