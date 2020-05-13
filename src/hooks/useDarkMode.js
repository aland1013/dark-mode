import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useLocalStorage(
    'darkMode',
    false
  );

  useEffect(() => {
    const body = document.querySelector('body');
    const lines = document.querySelectorAll('.chart-line path');

    if (isDarkModeEnabled) {
      body.classList.add('dark-mode');
      lines.forEach((line) => line.setAttribute('stroke', 'red'));
    } else {
      body.classList.remove('dark-mode');
      lines.forEach((line) => line.setAttribute('stroke', '#8884d8'));
    }
  }, [isDarkModeEnabled]);

  return [isDarkModeEnabled, setIsDarkModeEnabled];
};

export default useDarkMode;
