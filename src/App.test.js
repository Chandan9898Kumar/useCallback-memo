import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My React App/);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeDefined()
});

test('It should be defined', () => {
  render(<App />);
  const linkElement = screen.getByText(/My React App/);
  expect(linkElement).toBeDefined()
});

