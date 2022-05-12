import { fireEvent, render, screen } from '@testing-library/react';
import ColorButton, { replaceCamelWithSpaces } from './ColorButton';

test('button has correct initial color?', () => {
  render(<ColorButton />);

  const changeColorBtn = screen.getByRole('button', { name: 'Change to blue' });

  expect(changeColorBtn).not.toBeNull();
  expect(changeColorBtn).not.toHaveStyle({ backgroundColor: 'gray' });
  expect(changeColorBtn).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns into blue when clicked?', () => {
  render(<ColorButton />);

  const changeColorBtn = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(changeColorBtn);

  // button bgColor must be blue after clicked
  expect(changeColorBtn).toHaveStyle({ backgroundColor: 'blue' });
  expect(changeColorBtn.textContent).toBe('Change to red');
});

test('checkbox is unchecked intially?', () => {
  render(<ColorButton />);

  const changeColorBtn = screen.getByRole('button', { name: 'Change to blue' });
  expect(changeColorBtn).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('when checkbox is checked, button should be disabled', () => {
  render(<ColorButton />);

  const changeColorBtn = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });

  // enable checkbox
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(changeColorBtn).toBeDisabled();

  // disable checkbox
  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(changeColorBtn).toBeEnabled();

  // enable checkbox
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(changeColorBtn).toBeDisabled();
});

test('when checkbox is disabled, button color should change to gray', () => {
  render(<ColorButton />);

  const changeColorBtn = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });

  // disable button
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(changeColorBtn).toBeDisabled();
  expect(changeColorBtn).toHaveStyle({ backgroundColor: 'gray' });

  // enable button
  fireEvent.click(checkBox);
  expect(changeColorBtn).not.toHaveStyle({ backgroundColor: 'gray' });
  expect(changeColorBtn).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(changeColorBtn);

  // disable button
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(changeColorBtn).toBeDisabled();
  expect(changeColorBtn).toHaveStyle({ backgroundColor: 'gray' });

  // enable button
  fireEvent.click(checkBox);
  expect(changeColorBtn).not.toHaveStyle({ backgroundColor: 'gray' });
  expect(changeColorBtn).toHaveStyle({ backgroundColor: 'blue' });
});

describe('space between camel-case & capital letters', () => {
  test('Works for no inner capital lettres', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for 1 inner capital lettre', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
