import {
  FETCHING_STARTED,
  FETCHING_SUCCEEDED,
  FETCHING_FAILED
} from "../constants";

export const fetchingStarted = () => ({
  type: FETCHING_STARTED
});

export const fetchingFailed = () => ({
  type: FETCHING_FAILED
});

export const fetchingSucceeded = quote => ({
  type: FETCHING_SUCCEEDED,
  payload: quote
});
