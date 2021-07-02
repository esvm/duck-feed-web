import { FAIL_DUCK_FEED_FORM, RESET_STATE, SUCCESS_DUCK_FEED_FORM } from './actions';
import duckFeedReducer from './reducer';

describe('reducer', () => {
  describe('when action is SUCCESS_DUCK_FEED_FORM', () => {
    it('should set duckFeedReportFormSubmitted to true', () => {
      const state = duckFeedReducer(undefined, {
        type: SUCCESS_DUCK_FEED_FORM,
      });

      expect(state.duckFeedReportFormSubmitted).toStrictEqual(true);
    });

    it('should set duckFeedReportFormError to false', () => {
      const state = duckFeedReducer(undefined, {
        type: SUCCESS_DUCK_FEED_FORM,
      });

      expect(state.duckFeedReportFormError).toStrictEqual(false);
    });
  });

  describe('when action is FAIL_DUCK_FEED_FORM', () => {
    it('should set duckFeedReportFormSubmitted to false', () => {
      const state = duckFeedReducer(undefined, {
        type: FAIL_DUCK_FEED_FORM,
      });

      expect(state.duckFeedReportFormSubmitted).toStrictEqual(false);
    });

    it('should set duckFeedReportFormError to true', () => {
      const state = duckFeedReducer(undefined, {
        type: FAIL_DUCK_FEED_FORM,
      });

      expect(state.duckFeedReportFormError).toStrictEqual(true);
    });
  });

  describe('when action is RESET_STATE', () => {
    it('should set duckFeedReportFormSubmitted to false', () => {
      const state = duckFeedReducer(undefined, {
        type: RESET_STATE,
      });

      expect(state.duckFeedReportFormSubmitted).toStrictEqual(false);
    });

    it('should set duckFeedReportFormError to false', () => {
      const state = duckFeedReducer(undefined, {
        type: RESET_STATE,
      });

      expect(state.duckFeedReportFormError).toStrictEqual(false);
    });
  });
});