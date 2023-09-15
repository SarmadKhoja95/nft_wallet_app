import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground, View } from 'react-native';
import { useTheme } from '../../hooks';


const CustomSafeAreaView = ({ children }) => {
    const { colors } = useTheme();
    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView
                    style={{ flex: 1, backgroundColor: colors.secondaryBackGround }}
                    mode={'padding'}
                    edges={['top', 'bottom']}
                >
                    {/* top notch bg color */}
                    <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, backgroundColor: colors.primaryBackGround }} />
                    {children}
                </SafeAreaView>
            </SafeAreaProvider>
        </>

    );
};

export default CustomSafeAreaView
