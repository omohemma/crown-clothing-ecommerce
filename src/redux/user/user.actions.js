import { userActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

// Another Approach
// export const setCurrentUser = (user) => {
//   return {
//     type: 'SET_CURRENT_USER',
//     payload: user,
//   };
// };
