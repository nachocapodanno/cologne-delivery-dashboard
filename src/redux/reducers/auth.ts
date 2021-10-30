import * as actions from "../types/auth";

const initialState = {
  user: {
    isAuthenticated: false,
    token: "",
  },
  isLoading: false,
  signInForm: {
    errorMessage: null,
  },
};

export const auth = (state = initialState, action: any) => {
  switch (action.type) {
    /* case actions.SIGN_IN_RELOADED:
      let userReloaded = action.value;
      userReloaded.isAuthenticated = true;

      return Object.assign({}, state, {
        user: {
          ...initialState.user,
          token: userReloaded.token,
          isAuthenticated: userReloaded.isAuthenticated,
        },
        signInForm: initialState.signInForm,
      }); */

    case actions.SIGN_IN_REQUEST:
      console.log("haciendo SIGN_IN_REQUEST...");
      return Object.assign({}, state, {
        isLoading: true,
      });

    case actions.SIGN_IN_REQUEST_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        signInForm: {
          ...initialState.signInForm,
          errorMessage: "Incorrect Username or Password.",
        },
      });

    case actions.SIGN_IN_REQUEST_SUCCESS:
      console.log("haciendo SIGN_IN_SUCCESS...");
      console.log(action.data);
      const signInData = action.data;

      const user = {
        ...state.user,
        isAuthenticated: true,
        token: signInData.token,
      };

      return Object.assign({}, state, {
        user: user,
        isLoading: false,
        signInForm: initialState.signInForm,
      });

    case actions.SIGN_OUT_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case actions.SIGN_OUT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
      });

    default:
      return state;
  }
};

export default auth;
