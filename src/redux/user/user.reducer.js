import { userActionTypes } from './user.types';

// Initial State
const INITIAL_STATE = {
  currentUser: null,
};

/* Initialize state params with user reducer initial state
 ** action is an object with "type" and "payload" key
 */
const userReducer = (state = INITIAL_STATE, action) => {
  /* Use Switch Case Instead of If...else statement to know with state to
   ** Return New State - other objects in INITIAL_STATE and payload in "action object"
   ** Or by default return state
   */
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
