import { StyleSheet } from 'react-native';
import { Fonts } from '../../config';

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: Fonts.FONT_FAMILIES.FONT_MEDIUM,
        fontSize: Fonts.FONT_SIZE.h_24,
    }
});

export { styleSheet };
