import userActionTypes from './user.types';

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
