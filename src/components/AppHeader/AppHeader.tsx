import React from 'react';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImageUrl } from '../../config';
import { useTheme } from '../../hooks';
import { styleSheet } from './stylesheet';

interface IProps {
    showHeader?: boolean
}

const AppHeader: React.FC<IProps> = ({ showHeader }: IProps) => {
    const { colors } = useTheme()

    return (
        <>
            <View style={styleSheet.topBar}>
                {showHeader ? <View style={{ flex: 1 }}>
                    <Text style={{ ...styleSheet.header, color: colors.primaryText }}>Market</Text>
                </View> : <View style={styleSheet.profileViewContainer}>
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        colors={[colors.buttonLinearPrimaryOne, colors.buttonLinearPrimaryTwo]}
                        style={styleSheet.profileBgGradient}
                    >
                        <View style={{ ...styleSheet.profileImgView, backgroundColor: colors.primaryBackGround }}>
                            <Image source={ImageUrl.USER} resizeMode='contain' style={styleSheet.profileIcon} />
                        </View>
                    </LinearGradient>
                    <Text style={{ ...styleSheet.userText, color: colors.primaryText }}>Account_1</Text>
                </View>}
                <View style={[showHeader ? { position: 'absolute', right: 0 } : {}]}>
                    <View style={{ ...styleSheet.badgeView, backgroundColor: colors.error }}>
                        <Text style={{ ...styleSheet.baseText, color: colors.primaryText }}>5</Text>
                    </View>
                    <Image source={ImageUrl.BELL_ICON} resizeMode='contain' />
                </View>
            </View>
        </>
    );
};

export default AppHeader
