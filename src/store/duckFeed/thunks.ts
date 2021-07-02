import { bindActionCreators, Dispatch } from 'redux';
import { DuckFeedData } from '../../types/types';
import logger from "../../utils/logger";
import { failDuckFeedForm, resetDuckFeedFormState, successDuckFeedForm } from "./actions";
import { DuckFeedDataApi, parseDuckFeedDataToAPI, parseDuckFeedsFromAPI } from "./duckFeed";
import { getDuckFeedReports, postCreateSchedule, postDuckFeed } from "./queries";

export const sendDuckFeedData = (values: DuckFeedData) => async dispatch => {
  const body = parseDuckFeedDataToAPI(values);

  try {
      await postDuckFeed(body);
      dispatch(successDuckFeedForm());
  } catch (error) {
      logger.error(error, {
          context: {
            file: 'src/duckFeed/thunks.ts',
            description: 'Error on sendDuckFeedData',
          },
      });
      dispatch(failDuckFeedForm());
  }
};

export const createSchedule = (values: DuckFeedData) => async dispatch => {
  const body = parseDuckFeedDataToAPI(values);

  try {
      await postCreateSchedule(body);
      dispatch(successDuckFeedForm());
  } catch (error) {
      logger.error(error, {
          context: {
            file: 'src/duckFeed/thunks.ts',
            description: 'Error on createSchedule',
          },
      });
      dispatch(failDuckFeedForm());
  }
};

export const getDuckFeedData = async () => {
  try {
    const reportsJson = await getDuckFeedReports();
    const duckFeeds = parseDuckFeedsFromAPI(reportsJson as DuckFeedDataApi[]);

    return duckFeeds;
  } catch (error) {
    logger.error(error, {
      context: {
        file: 'src/duckFeed/thunks.ts',
        description: 'Error on getDuckFeedData',
      },
    });

    return [];
  }
}

export const resetDuckFeedState = () => async dispatch => {
  dispatch(resetDuckFeedFormState());
}

export const useDuckFeedThunks = (dispatch: Dispatch) =>
  bindActionCreators({ sendDuckFeedData, createSchedule, resetDuckFeedState }, dispatch);