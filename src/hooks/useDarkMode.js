import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useLocalStorage(
    'darkMode',
    false
  );

  useEffect(() => {
    const body = document.querySelector('body');

    if (isDarkModeEnabled) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkModeEnabled]);

  return [isDarkModeEnabled, setIsDarkModeEnabled];
};

export default useDarkMode;
