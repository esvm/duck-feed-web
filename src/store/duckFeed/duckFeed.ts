import { DuckFeedData } from "../../types/types";


export interface DuckFeedDataApi {
  uid: number;
  park_name: string;
  country: string;
  food: string;
  food_type: string;
  food_quantity: number;
  ducks_count: number;
  time: Date;
  datetime: Date;
}

export const parseDuckFeedDataToAPI = (values: DuckFeedData): DuckFeedDataApi => {
  return {
    ducks_count: values.ducksCount,
    country: values.country,
    food: values.food,
    food_quantity: values.foodQuantity,
    food_type: values.foodType,
    park_name: values.parkName,
    time: values.time,
  } as DuckFeedDataApi;
}

export const parseDuckFeedFromAPI = (values: DuckFeedDataApi): DuckFeedData => {
  return {
    ducksCount: values.ducks_count,
    country: values.country,
    food: values.food,
    foodQuantity: values.food_quantity,
    foodType: values.food_type,
    parkName: values.park_name,
    time: values.time,
  } as DuckFeedData;
}

export const parseDuckFeedsFromAPI = (values: DuckFeedDataApi[]): DuckFeedData[] => {
  return values.map(e => parseDuckFeedFromAPI(e));
}