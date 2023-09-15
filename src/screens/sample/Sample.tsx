import React from 'react';
import { Text, View } from 'react-native';
import AppBackground from '../../components/AppBackground/AppBackground';
import { useTheme } from '../../hooks';
import { styleSheet } from './stylesheet';

export const Sample = () => {
  const { colors } = useTheme()
  return (
    <>
    <AppBackground />
      <View style={styleSheet.container}>
        <Text style={{ ...styleSheet.title, color: colors.primaryText }}>
          Coming soon...
        </Text>
      </View>
    </>
  );
};
