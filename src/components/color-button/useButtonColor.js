import { useState } from 'react';

export const useButtonColor = () => {
  const [buttonColor, setButtonColor] = useState(false);

  return {
    onClick: () => setButtonColor(x => !x),
    style: () => ({ backgroundColor: buttonColor ? 'blue' : 'red' }),
    text: () => (buttonColor ? 'Change to red' : 'Change to blue')
  };
};
