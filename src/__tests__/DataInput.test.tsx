import { render, screen } from '@testing-library/react';
import DataInput from 'src/components/DataInput';

test('renders name input correctly', () => {
  render(<DataInput />);
  const nameInput = screen.getByLabelText('Name');
  expect(nameInput).toBeInTheDocument();
});

test('renders date input correctly', () => {
  render(<DataInput />);
  const dateInput = screen.getByLabelText('Encounter date');
  expect(dateInput).toBeInTheDocument();
});

test('renders location input correctly', () => {
  render(<DataInput />);
  const locationInput = screen.getByLabelText('Location');
  expect(locationInput).toBeInTheDocument();
});
