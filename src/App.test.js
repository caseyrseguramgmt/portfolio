import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link with herf to localhost', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
    expect(linkElement).toHaveAttribute('href', 'http://localhost:5173/');
  });
