import { render, screen } from "@testing-library/react";
import React from "react";
import { DuckFeedData, DuckFeedFeatureConfig } from "../../types/types";
import FeedForm from './FeedForm';

const setValue = jest.fn();
const defaultValues = {} as DuckFeedData;
const mockForm = {
  onRegister: setValue,
  control: {
    register: setValue,
    unregister: setValue,
    errorsRef: { current: {} },
    defaultValuesRef: { current: { } },
    setValue,
    fieldArrayNamesRef: { current: Object.keys(defaultValues) },
    fieldsRef: { current: { ...defaultValues } },
    mode: {
      isOnSubmit: true,
    },
    reValidateMode: {},
    formState: {},
  } as any,
  getValues: () => defaultValues,
  setValue,
  errors: {},
};
const defaultConfig: DuckFeedFeatureConfig = mockForm;

const renderComponent = () => {
  return render(
    <FeedForm config={defaultConfig}/>
  );
}

describe('FeedForm', () => {
  beforeEach(() => {
    renderComponent();
  });

  describe('render form', () => {
    it('should render form with fields', () => {
      expect(screen.getByTestId('parkName')).toBeInTheDocument();
    });
  });
});