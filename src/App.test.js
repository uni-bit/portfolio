import { render, screen } from '@testing-library/react';
import App from './App';

test('renders works navigation', () => {
  render(<App />);
  const worksLink = screen.getByRole('link', { name: /works/i });
  expect(worksLink).toBeInTheDocument();
});
