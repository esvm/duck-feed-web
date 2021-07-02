import { AxiosError } from 'axios';
import * as queries from './queries';
import { createSchedule, getDuckFeedData, resetDuckFeedState, sendDuckFeedData } from './thunks';
import { DuckFeedData } from '../../types/types';
import * as actions from './actions';

const successDuckFeedFormSpy = jest.spyOn(actions, 'successDuckFeedForm');
const failDuckFeedFormSpy = jest.spyOn(actions, 'failDuckFeedForm');
const resetDuckFeedFormStateSpy = jest.spyOn(actions, 'resetDuckFeedFormState');

jest.mock('./queries');
jest.mock('./selectors');

const duckFeedData = {
  country: 'brasil',
  ducksCount: 10,
  food: 'banana',
  foodQuantity: 1000,
  foodType: 'fruit',
  parkName: 'park',
  time: new Date('2020-07-01T20:43:00.000Z')
} as DuckFeedData;

const error: AxiosError = {
  name: '',
  message: 'Axios error',
  config: {},
  isAxiosError: true,
  toJSON: jest.fn(),
  response: {
    status: 500,
    statusText: 'failed',
    data: {
      statusCode: 500,
    },
    headers: {},
    config: {},
  },
};

describe('thunks', () => {
  describe('sendDuckFeedData', () => {
    afterAll(() => {
      jest.clearAllMocks();
    });
    
    describe('when success', () => {
      beforeAll(() => {
        (queries.postDuckFeed as jest.Mock).mockImplementation();
      });
    
      it('should dispatch successDuckFeedForm', async () => {
        await sendDuckFeedData(duckFeedData)(jest.fn());
        expect(successDuckFeedFormSpy).toHaveBeenCalled();
      });
    });
    
    describe('when error', () => {
      beforeAll(() => {
        (queries.postDuckFeed as jest.Mock).mockImplementation(() => Promise.reject(error));
      });
    
      it('should dispatch failDuckFeedForm', async () => {
        await sendDuckFeedData(duckFeedData)(jest.fn()).catch(() => {
            expect(failDuckFeedFormSpy).toHaveBeenCalled();
        });
      });
    });
  });
    
  describe('createSchedule', () => {
    afterAll(() => {
      jest.clearAllMocks();
    });
    
    describe('when success', () => {
      beforeAll(() => {
        (queries.postCreateSchedule as jest.Mock).mockImplementation();
      });
    
      it('should dispatch successDuckFeedForm', async () => {
        await createSchedule(duckFeedData)(jest.fn());
        expect(successDuckFeedFormSpy).toHaveBeenCalled();
      });
    });
    
    describe('when error', () => {
      beforeAll(() => {
        (queries.postCreateSchedule as jest.Mock).mockImplementation(() => Promise.reject(error));
      });
    
      it('should dispatch failDuckFeedForm', async () => {
        await createSchedule(duckFeedData)(jest.fn()).catch(() => {
            expect(failDuckFeedFormSpy).toHaveBeenCalled();
        });
      });
    });
  });
    
  describe('getDuckFeedData', () => {
    describe('when success', () => {
      it('should return reports', async () => {
        const response = [{
          country: 'brasil',
          ducks_count: 10,
          food: 'banana',
          food_quantity: 1000,
          food_type: 'fruit',
          park_name: 'park',
          time: new Date('2020-07-01T20:43:00.000Z')
        }];
        
        (queries.getDuckFeedReports as jest.Mock).mockReturnValue(response);
        const duckFeeds = await getDuckFeedData();
        expect(duckFeeds[0]).toStrictEqual(duckFeedData);
      });
    });

    describe('when error', () => {
      beforeAll(() => {
        (queries.getDuckFeedReports as jest.Mock).mockImplementation(() => Promise.resolve(error));
      });

      it('should return empty', async () => {
        const duckFeeds = await getDuckFeedData();
        expect(duckFeeds).toStrictEqual([]);
      });
    });
  });

  describe('resetDuckFeedState', () => {
    it('should dispatch failDuckFeedForm', async () => {
      await resetDuckFeedState()(jest.fn());
      expect(resetDuckFeedFormStateSpy).toHaveBeenCalled();
    });
  });
});