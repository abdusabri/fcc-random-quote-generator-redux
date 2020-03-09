import {
  fetchingStarted,
  fetchingFailed,
  fetchingSucceeded
} from "./status-actions";
import { getQuote } from "../api/quotes-api";

export const requestQuote = () => async dispatch => {
  dispatch(fetchingStarted());

  const result = await getQuote();

  if (result === "error") {
    dispatch(fetchingFailed());
  } else {
    dispatch(fetchingSucceeded(result));
  }
};
