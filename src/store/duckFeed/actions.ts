import { createAction } from 'redux-actions';

export const SUCCESS_DUCK_FEED_FORM = 'duckFeed/SUCCESS_DUCK_FEED_FORM';
export const FAIL_DUCK_FEED_FORM = 'duckFeed/FAIL_DUCK_FEED_FORM';
export const RESET_STATE = 'duckFeed/RESET_STATE';

export const successDuckFeedForm = createAction(SUCCESS_DUCK_FEED_FORM);
export const failDuckFeedForm = createAction(FAIL_DUCK_FEED_FORM);
export const resetDuckFeedFormState = createAction(RESET_STATE);