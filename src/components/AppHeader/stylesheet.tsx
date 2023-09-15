import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import { Fonts } from '../../config';
const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: WP('5.5%'),
    paddingVertical: HP('3.5%'),
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileBgGradient: {
    height: 46,
    width: 46,
    borderRadius: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImgView: {
    height: 42,
    width: 42,
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    height: 34,
    width: 34,
  },
  userText: {
    fontSize: Fonts.FONT_SIZE.b_14,
    fontFamily: Fonts.FONT_FAMILIES.FONT_BOLD,
    fontWeight: 'bold',
  },
  header: {
    fontFamily: Fonts.FONT_FAMILIES.FONT_BOLD,
    fontWeight: 'bold',
    fontSize: Fonts.FONT_SIZE.h_24,
    textAlign: 'center'
  },
  badgeView: {
    height: 22,
    width: 22,
    borderRadius: 22,
    position: 'absolute',
    right: -6,
    top: -10,
    zIndex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontSize: Fonts.FONT_SIZE.b_12,
    fontFamily: Fonts.FONT_FAMILIES.FONT_BOLD,
    fontWeight: 'bold',
  }
});

export { styleSheet };
