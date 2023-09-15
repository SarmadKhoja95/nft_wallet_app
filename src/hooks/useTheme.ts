import {useContext} from 'react';
import {Theme} from '../context/ThemeContext';

const useTheme = () => {
  const {theme, toggleTheme} = useContext(Theme);
  const {colors} = theme;
  return {
    colors,
    theme,
    toggleTheme,
  };
};
export default useTheme;
