import * as actionTypes from "../types/parcel";
import parcelService from "../../services/parcel";

export const findAllBySenderId = (id: any) => {
  const request = () => {
    return { type: actionTypes.FIND_ALL_PARCEL_REQUEST };
  };
  const success = (data: any) => {
    return { type: actionTypes.FIND_ALL_PARCEL_REQUEST_SUCCESS, data };
  };
  const failure = (error: any) => {
    return { type: actionTypes.FIND_ALL_PARCEL_REQUEST_FAIL, error };
  };

  return (dispatch: any) => {
    dispatch(request());

    parcelService.findAllBySenderId(id).then(
      (data: any) => {
        dispatch(success(data));
      },
      (error: any) => {
        dispatch(failure(error.toString()));
      }
    );
  };
}

export const handleShow = () => {
  return { type: actionTypes.HANDLE_SHOW };
}

export const create = (params: any) => {
  const request = (data: any) => {
    return { type: actionTypes.CREATE_PARCEL_REQUEST, data };
  };
  const success = (data: any) => {
    return { type: actionTypes.CREATE_PARCEL_REQUEST_SUCCESS, data };
  };
  const failure = (error: any) => {
    return { type: actionTypes.CREATE_PARCEL_REQUEST_FAIL, error };
  };

  return (dispatch: any) => {
    dispatch(request({ params }));
    
    parcelService.create({params}).then(
      (data: any) => {
        dispatch(success(data));
        dispatch(handleShow());
      },
      (error: any) => {
        dispatch(failure(error.toString()));
      }
    );
  };
}