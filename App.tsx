import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import * as React from 'react';
import { CustomSafeAreaView } from './src/components/SafeArea';
import { ThemeContext } from './src/context';
import { useTheme } from './src/hooks';
import { BottomTabs } from './src/navigation/BottomTabs';

export default function ReactNativeSafeAreaView() {
  const { colors } = useTheme()

  const MyTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.primaryBackGround // screens default bg color
    },
  };

  return (
    <ThemeContext>
      <CustomSafeAreaView>
        <NavigationContainer theme={MyTheme}>
          <BottomTabs />
        </NavigationContainer>
      </CustomSafeAreaView>
    </ThemeContext>
  );
}