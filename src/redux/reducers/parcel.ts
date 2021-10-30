import * as actions from "../types/parcel";

const initialState = {
  isLoading: false,
  parcels: [],
  errorMessage: "",
  showCreateForm: false,
};

export const parcel = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.FIND_ALL_PARCEL_REQUEST:
      return { ...state, isLoading: true };

    case actions.FIND_ALL_PARCEL_REQUEST_SUCCESS:
      const parcelsData = action.data;
      return { ...state, isLoading: false, parcels: parcelsData };

    case actions.FIND_ALL_PARCEL_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: "No parcels availables",
      };

    case actions.HANDLE_SHOW:
      return {
        ...state,
        showCreateForm: !state.showCreateForm,
      };

    case actions.CREATE_PARCEL_REQUEST:
      return { ...state, isLoading: true };

    case actions.CREATE_PARCEL_REQUEST_SUCCESS:
      const parcelData = action.data;
      return {
        ...state,
        isLoading: false,
        parcels: [...state.parcels, parcelData],
      };

    case actions.CREATE_PARCEL_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: "The create operation cannot be completed.",
      };

    default:
      return state;
  }
};

export default parcel;
