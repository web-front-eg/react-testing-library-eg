import { fireEvent, render, screen } from '@testing-library/react';
import ColorButton from './ColorButton';

test('button has correct initial color?', () => {
  render(<ColorButton />);

  const changeColorBtn = screen.getByRole('button', { name: 'Change to blue' });

  expect(changeColorBtn).not.toBeNull();
  expect(changeColorBtn).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns into blue when clicked', () => {
  render(<ColorButton />);

  const changeColorBtn = screen.getByRole('button', { name: 'Change to blue' });
  expect(changeColorBtn).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(changeColorBtn);

  // button bgColor must be blue after clicked
  expect(changeColorBtn).toHaveStyle({ backgroundColor: 'blue' });
  expect(changeColorBtn.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<ColorButton />);

  const changeColorBtn = screen.getByRole('button', { name: 'Change to blue' });
  expect(changeColorBtn).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});
