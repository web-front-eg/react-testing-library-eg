import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import ColorButton from './ColorButton';

test('button has correct initial color?', () => {
  // arrange
  render(<ColorButton />);
  const changeColorBtn = screen.getByRole('button', { name: 'Change to blue' });

  // act

  // assert
  expect(changeColorBtn).not.toBeNull();
  expect(changeColorBtn).toHaveStyle({ backgroundColor: 'red' });
});

test('button has correct initial text?', () => {});

test('button turns into blue when clicked', () => {
  // arrange
  render(<ColorButton />);
  const changeColorBtn = screen.getByRole('button', { name: 'Change to blue' });

  // act
  fireEvent.click(changeColorBtn);

  // assert
  // button bgColor must be blue after clicked
  expect(changeColorBtn).toHaveStyle({ backgroundColor: 'blue' });
  expect(changeColorBtn.textContent).toBe('Change to red');
});
