import axios from "axios";
import { DuckFeedDataApi } from "./duckFeed";
import { getDuckFeedReports, postCreateSchedule, postDuckFeed } from "./queries";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('actions', () => {
  const duckFeedData = {
    country: 'brasil',
    ducks_count: 10,
    food: 'banana',
    food_quantity: 1000,
    food_type: 'fruit',
    park_name: 'park',
    time: new Date('2020-07-01T20:43:00.000Z')
  } as DuckFeedDataApi;

  describe('postDuckFeed', () => {
    it('should call post duck feed data endpoint', async () => {
      mockedAxios.post.mockResolvedValue({ data: true } as any);

      await postDuckFeed(duckFeedData);
      expect(axios.post).toHaveBeenCalledWith(
        'https://duck-feed-api.herokuapp.com/reports/',
        duckFeedData,
      );
    });
  });

  describe('postCreateSchedule', () => {
    it('should call post duck feed data endpoint', async () => {
      mockedAxios.post.mockResolvedValue({ data: true } as any);

      await postCreateSchedule(duckFeedData);
      expect(axios.post).toHaveBeenCalledWith(
        'https://duck-feed-api.herokuapp.com/reports/schedule/',
        duckFeedData,
      );
    });
  });

  describe('getDuckFeedReports', () => {
    it('should call post duck feed data endpoint', async () => {
      mockedAxios.get.mockResolvedValue({ data: true } as any);

      await getDuckFeedReports();
      expect(axios.get).toHaveBeenCalledWith(
        'https://duck-feed-api.herokuapp.com/reports/',
      );
    });
  });
});