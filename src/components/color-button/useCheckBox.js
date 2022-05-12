import { useState } from 'react';

export const useCheckBox = () => {
  const [isChecked, setChecked] = useState(false);

  return {
    state: [isChecked, setChecked],
    onClick: isChecked => setChecked(isChecked)
  };
};
