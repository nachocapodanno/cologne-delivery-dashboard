import * as actions from "../types/parcel";

const initialState = {
  isLoading: false,
  parcels: [],
  errorMessage: "",
  showSideContainer: false,
  showEditStatus: false,
  editData: {
    id: "",
    status: "",
  },
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

    case actions.SHOW_CREATE_FORM:
      return {
        ...state,
        showSideContainer: true,
        showEditStatus: false,
      };

    case actions.HIDE_SIDE_CONTAINER:
      return {
        ...state,
        showSideContainer: false,
        showEditStatus: false,
      };

    case actions.SHOW_EDIT_FORM:
      const editData = action.data;
      return {
        ...state,
        showSideContainer: true,
        showEditStatus: true,
        editData: { id: editData.id, status: editData.status },
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

    case actions.UPDATE_PARCEL_REQUEST:
      return { ...state, isLoading: true };

    case actions.UPDATE_PARCEL_REQUEST_SUCCESS:
      const parcelDataUpdate = action.data;
      const parcelList: any = state.parcels;
      let parcelToUpdate = parcelList.findIndex(
        (e: any) => e.id === parcelDataUpdate.id
      );
      parcelList[parcelToUpdate] = parcelDataUpdate;
      return {
        ...state,
        isLoading: false,
        parcels: [...parcelList],
      };

    case actions.UPDATE_PARCEL_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: "The update operation cannot be completed.",
      };

    default:
      return state;
  }
};

export default parcel;
