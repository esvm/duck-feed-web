import { FAIL_DUCK_FEED_FORM, RESET_STATE, SUCCESS_DUCK_FEED_FORM } from "./actions";

export const INITIAL_STATE = {
  duckFeedReportFormSubmitted: false,
  duckFeedReportFormError: false,
};

export default function duckFeedReducer(state = INITIAL_STATE, action: { type: any; }) {
  switch (action.type) {
    case SUCCESS_DUCK_FEED_FORM: {
      return {
        ...state,
        duckFeedReportFormSubmitted: true,
        duckFeedReportFormError: false,
      };
    }
    case FAIL_DUCK_FEED_FORM: {
      return {
        ...state,
        duckFeedReportFormSubmitted: false,
        duckFeedReportFormError: true,
      };
    }
    case RESET_STATE: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}