import { DeepMap, FieldError, FieldValues, SubmitErrorHandler, UnpackNestedValue, UseFormRegister } from "react-hook-form";

export declare type SubmitHandler<TFieldValues extends FieldValues> = (
  data: UnpackNestedValue<TFieldValues>,
  event?: React.BaseSyntheticEvent
) => void | Promise<void>;

export interface DuckFeedFields {
  parkName: string;
  country: string;
  food: string;
  foodType: string;
  foodQuantity: number;
  ducksCount: number;
  time: Date;
}

export interface DuckFeedData extends DuckFeedFields  {
  handleSubmit: <TSubmitFieldValues extends FieldValues>(
    onValid: SubmitHandler<TSubmitFieldValues>,
    onInvalid?: SubmitErrorHandler<TSubmitFieldValues>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export type DuckFeedFeatureConfig = {
  onRegister: UseFormRegister<DuckFeedData>;
  errors: DeepMap<DuckFeedData, FieldError>;
}
