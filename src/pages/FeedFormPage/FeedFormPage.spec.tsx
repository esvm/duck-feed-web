import React from "react";
import { Provider } from "react-redux";
import FeedFormPage from "./index";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen } from "@testing-library/react";

const renderComponent = () => {
  const mockStore = configureStore([thunk]);

  return render(
    <Provider store={mockStore()}>
      <FeedFormPage />
    </Provider>
  );
}

describe('FeedFormPage', () => {
  describe('render', () => {
    beforeEach(() => {
      renderComponent();
    });

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