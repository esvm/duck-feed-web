import { getDuckFeedReportFormError, getDuckFeedReportFormSubmitted } from "./selectors";

describe('selectors', () => {
  const mockState = (value = false) => {
    return {
      duckFeedReportFormSubmitted: value,
      duckFeedReportFormError: value,
    }
  }

  describe('getDuckFeedReportFormSubmitted', () => {
    describe('when value is true', () => {
      it('should return true', () => {
        const state = mockState(true);
        expect(getDuckFeedReportFormSubmitted(state)).toBeTruthy();
      });
    });

    describe('when value is false', () => {
      it('should return false', () => {
        const state = mockState(false);
        expect(getDuckFeedReportFormSubmitted(state)).toBeFalsy();
      });
    });
  });

  describe('getDuckFeedReportFormError', () => {
    describe('when value is true', () => {
      it('should return true', () => {
        const state = mockState(true);
        expect(getDuckFeedReportFormSubmitted(state)).toBeTruthy();
      });
    });

    describe('when value is false', () => {
      it('should return false', () => {
        const state = mockState(false);
        expect(getDuckFeedReportFormSubmitted(state)).toBeFalsy();
      });
    });
  });
});