import * as actions from "../types/auth";

const initialState = {
  user: {
    isAuthenticated: false,
    token: "",
  },
  isLoading: false,
  signInForm: {
    errorMessage: "",
  },
};

export const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.SIGN_IN_REQUEST:
      return { ...state, isLoading: true };

    case actions.SIGN_IN_REQUEST_SUCCESS:
      const signInData = action.data;

      const user = {
        ...state.user,
        isAuthenticated: true,
        token: signInData.token,
      };

      return {
        ...state,
        user: user,
        isLoading: false,
        signInForm: initialState.signInForm,
      };

    case actions.SIGN_IN_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        signInForm: {
          ...initialState.signInForm,
          errorMessage: "Incorrect Username or Password.",
        },
      };

    case actions.SIGN_OUT_REQUEST:
      return { ...state, isLoading: true };

    case actions.SIGN_OUT_REQUEST_SUCCESS:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default auth;
