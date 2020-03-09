import initialState from "../store/initial-state";
import { FETCHING_SUCCEEDED, FETCHING_FAILED } from "../constants";

export default function status(state = initialState.quote, action) {
  switch (action.type) {
    case FETCHING_SUCCEEDED:
      return {
        quoteText: action.payload.quoteText,
        quoteAuthor: action.payload.quoteAuthor
      };
    case FETCHING_FAILED:
      return { ...initialState.quote };
    default:
      return state;
  }
}
