import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from 'redux-mock-store';

const store = configureStore();

test('renders Duck Feed Form link', () => {
  render(
    <Provider store={store({})}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Duck Feed Form/i);
  expect(linkElement).toBeInTheDocument();
});
