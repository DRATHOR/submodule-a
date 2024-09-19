import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import logo from './logo.svg';

test('renders learn react link', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
  expect(logoElement).toHaveAttribute('src', logo);

  const paragraphElement = screen.getByText(/and save to reload/i);

  expect(paragraphElement).toBeInTheDocument();
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
});
