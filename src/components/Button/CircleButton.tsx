import useTheme from '../../hooks/useTheme';
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ImageSourcePropType,
    Image,
    Text,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import { Fonts } from '../../config';


interface CBProps {
    onPress?: Function;
    startColor: string;
    endColor: string;
    image: ImageSourcePropType;
    label?: string
}
export const CircleButton = (props: CBProps) => {
    const { colors } = useTheme();

    return (

        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                props.onPress();
            }}
            >
            <View>
                <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={[props.startColor, props.endColor]}
                    style={[styleSheet.BtnContainer]}>
                    <Image
                        source={props.image}
                        style={{ ...styleSheet.optionIcon }}
                        resizeMode="contain"
                    />
                </LinearGradient>
                {props?.label && <Text style={styleSheet.label}>{props?.label}</Text>}
            </View>
        </TouchableOpacity>
    );
};
const styleSheet = StyleSheet.create({
    BtnContainer: {
        height: HP('8.2%'),
        width: HP('8.2%'),
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    optionIcon: {
        height: HP('3.5%'),
        width: WP('6.8%'),
    },
    label: {
        color: '#E9E9E9',
        fontFamily: Fonts.FONT_FAMILIES.FONT_BOLD,
        fontWeight: '600',
        fontSize: Fonts.FONT_SIZE.b_14,
        textAlign: 'center',
        paddingTop: HP('1%')
    }
});
