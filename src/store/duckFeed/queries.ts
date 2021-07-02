import axios from 'axios';
import logger from '../../utils/logger';
import { DuckFeedDataApi } from './duckFeed';

const baseUrl = "https://duck-feed-api.herokuapp.com";

export const postDuckFeed = (values: DuckFeedDataApi) => {
  return axios
    .post(
      `${baseUrl}/reports/`,
      { ...values },
    )
    .then(resp => resp.data)
    .catch(error => {
      logger.error(error, {
        context: {
          file: 'src/store/duckFeed/queries.ts',
          description: 'postDuckFeed: Error when trying to post duck feed to API',
        },
      });

      throw error;
    });
};

export const postCreateSchedule = (values: DuckFeedDataApi) => {
  return axios
    .post(
      `${baseUrl}/reports/schedule/`,
      { ...values },
    )
    .then(resp => resp.data)
    .catch(error => {
      logger.error(error, {
        context: {
          file: 'src/store/duckFeed/queries.ts',
          description: 'postCreateSchedule: Error when trying to create schedule in API',
        },
      });

      throw error;
    });
};

export const getDuckFeedReports = () => {
  return axios
    .get(
      `${baseUrl}/reports/`,
    )
    .then(resp => resp.data)
    .catch(error => {
      logger.error(error, {
        context: {
          file: 'src/store/duckFeed/queries.ts',
          description: 'getDuckFeedReports: Error when trying to get duck feeds from API',
        },
      });

      throw error;
    });
}