import App from './App';
import { act } from '@testing-library/react';

test('renders app component', () => {
  act(() => <App />);
});
