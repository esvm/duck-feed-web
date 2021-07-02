import React from 'react';
import { render, screen } from '@testing-library/react';
import { DuckFeedData, DuckFeedFeatureConfig } from '../../types/types';
import DuckFeedFields from './DuckFeedFields';

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
    <DuckFeedFields config={defaultConfig}/>
  );
}

describe('DuckFeedFields', () => {
  describe('render', () => {
    beforeEach(() => {
      renderComponent();
    });

    describe('render fields correctly', () => {
      it.each([
        'parkName',
        'country',
        'food',
        'foodType',
        'foodQuantity',
        'ducksCount',
        'time',
      ])(`should render %s field`, name => {
        expect(screen.getByTestId(name)).toBeInTheDocument();
      });
    });
  });
});