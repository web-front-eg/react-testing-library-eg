import { useState } from 'react';

export const useButtonColor = () => {
  const [buttonColor, setButtonColor] = useState('red');
  const onClickColorChangeBtn = () => {
    setButtonColor(x => ('red' ? 'blue' : 'red'));
  };

  const buttonStyle = () => ({ backgroundColor: buttonColor });
  const buttonText = () =>
    buttonColor === 'red' ? 'Change to blue' : 'Change to red';

  return {
    state: [buttonColor, setButtonColor],
    onClickColorChangeBtn,
    buttonStyle,
    buttonText
  };
};
