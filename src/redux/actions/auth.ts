import * as actionTypes from "../types/auth";
import authService from "../../services/auth";
import { history } from "../../utils/history";

export const signIn = (params: any) => {
  const request = (data: any) => {
    return { type: actionTypes.SIGN_IN_REQUEST, data };
  };
  const success = (data: any) => {
    return { type: actionTypes.SIGN_IN_REQUEST_SUCCESS, data };
  };
  const failure = (error: any) => {
    return { type: actionTypes.SIGN_IN_REQUEST_FAIL, error };
  };

  return (dispatch: any) => {
    dispatch(request({ params }));

    authService.login(params.username, params.password).then(
      (user: any) => {
        dispatch(success(user));
        history.push("/");
      },
      (error: any) => {
        dispatch(failure(error.toString()));
      }
    );
  };
}

export const signOut = () => {
  authService.logout();
  return { type: actionTypes.SIGN_OUT_REQUEST };
}
