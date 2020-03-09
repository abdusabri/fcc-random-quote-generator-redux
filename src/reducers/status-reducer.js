import initialState from "../store/initial-state";
import {
  FETCHING_STARTED,
  FETCHING_SUCCEEDED,
  FETCHING_FAILED
} from "../constants";

export default function status(state = initialState.status, action) {
  switch (action.type) {
    case FETCHING_STARTED:
      return { ...state, isLoading: true };
    case FETCHING_SUCCEEDED:
      return { isLoading: false, isError: false };
    case FETCHING_FAILED:
      return { isLoading: false, isError: true };
    default:
      return state;
  }
}
