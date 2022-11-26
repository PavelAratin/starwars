import { omit } from "lodash";
import { ADD_PERSON_TO_FAVORIT, REMOVE_PERSON_TO_FAVORITE } from "../constans/actionTypes";
const initialState = {};
const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORIT:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_PERSON_TO_FAVORITE:
      return omit(state, [action.payload])
    default:
      return state;
  }
}

export default favoriteReducer;