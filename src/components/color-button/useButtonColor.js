import { useState } from 'react';

export const useButtonColor = isChecked => {
  const [buttonColor, setButtonColor] = useState(false);

  const onClick = () => setButtonColor(x => !x);

  const style = () => {
    if (isChecked) {
      return { backgroundColor: 'gray' };
    }

    return { backgroundColor: buttonColor ? 'blue' : 'red' };
  };

  const text = () => (buttonColor ? 'Change to red' : 'Change to blue');

  return {
    state: [buttonColor, setButtonColor],
    onClick,
    style,
    text
  };
};
