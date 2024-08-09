import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link with href to localhost', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /http:\/\/localhost:5173\//i });
  expect(linkElement).toHaveAttribute('href', 'http://localhost:5173/');
});
