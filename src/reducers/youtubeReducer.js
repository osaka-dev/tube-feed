import {initialState} from "./initialState";

const youtubeReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_SUCCESS') {
    return {
      ...state,
      channels: action.channels
    };
  }

  return state;
};

export default youtubeReducer;