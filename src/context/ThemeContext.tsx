// import EncryptedStorage from 'react-native-encrypted-storage';
// import {Constant} from '../config';
import React, {
  createContext,
  useState,
  useLayoutEffect,
  useEffect,
} from 'react';
import {Themes} from '../theme/theme';
// import SystemNavigationBar from 'react-native-system-navigation-bar';

export const Theme = createContext({
  theme: Themes[0],
  toggleTheme: (themeNumber: number) => {},
});
const ThemeContext = (props: any) => {
  const [theme, setTheme] = useState(Themes[0]);
//   const checkForTheme = async () => {
//     try {
//       const value = await EncryptedStorage.getItem(
//         Constant.AsyncStorageKey.ThemeSelected,
//       );
//       value != undefined && value != null
//         ? setTheme(Themes[JSON.parse(value)])
//         : setTheme(Themes[0]);
//     } catch (error) {
//       setTheme(Themes[0]);
//     }
//   };
//   const updateingTheme = async () => {
//     SystemNavigationBar?.setNavigationColor(
//       theme?.colors?.primaryBackGroundLinearTwo,
//       false,
//     );
//   };

//   useEffect(() => {
//     updateingTheme();
//   }, [theme]);

  const toggleTheme = async (themeNumber: number) => {
    setTheme(Themes[themeNumber]);
    // await EncryptedStorage.setItem(
    //   Constant.AsyncStorageKey.ThemeSelected,
    //   JSON.stringify(themeNumber),
    // );
  };
//   useLayoutEffect(() => {
//     checkForTheme();
//   }, []);

  return (
    <Theme.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
      }}>
      {props.children}
    </Theme.Provider>
  );
};
export default ThemeContext;
