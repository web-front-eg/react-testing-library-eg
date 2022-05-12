import { useState } from 'react';

export const replaceCamelWithSpaces = colorName => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

const ColorButton = () => {
  const [isChecked, setChecked] = useState(false);
  const [buttonColor, setButtonColor] = useState(false);

  const onClickCheckbox = isChecked => setChecked(isChecked);
  const onClickChangeColorButton = () => setButtonColor(x => !x);

  const changeColorBtnStyle = () => {
    if (isChecked) {
      return { backgroundColor: 'gray' };
    }

    return { backgroundColor: buttonColor ? 'blue' : 'red' };
  };

  const changeColorBtnText = () =>
    buttonColor ? 'Change to red' : 'Change to blue';

  return (
    <>
      <button
        style={{ color: 'white', ...changeColorBtnStyle() }}
        onClick={onClickChangeColorButton}
        disabled={isChecked}
      >
        {changeColorBtnText()}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={isChecked}
        aria-checked={isChecked}
        onChange={e => onClickCheckbox(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </>
  );
};

export default ColorButton;
