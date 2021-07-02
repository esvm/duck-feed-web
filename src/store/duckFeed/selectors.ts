
export type DuckFeedState = {
  duckFeedReportFormSubmitted: boolean;
  duckFeedReportFormError: boolean;
};

export function getDuckFeedReportFormSubmitted(state: DuckFeedState): boolean {
  return state.duckFeedReportFormSubmitted;
}

export function getDuckFeedReportFormError(state: DuckFeedState): boolean {
  return state.duckFeedReportFormError;
}
