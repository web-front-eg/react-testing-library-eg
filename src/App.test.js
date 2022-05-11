import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByRole('link', {
    name: /learn react/i
  });

  // 2. assertion
  expect(linkElement).toBeInTheDocument();
});
