import initialState from "../store/initial-state";
import { FETCHING_SUCCEEDED, FETCHING_FAILED } from "../constants";

export default function quote(state = initialState.quote, action) {
  switch (action.type) {
    case FETCHING_SUCCEEDED:
      return { ...action.payload };
    case FETCHING_FAILED:
      return { ...initialState.quote };
    default:
      return state;
  }
}
