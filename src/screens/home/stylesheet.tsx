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
  baseText: {
    fontSize: Fonts.FONT_SIZE.b_12,
    fontFamily: Fonts.FONT_FAMILIES.FONT_BOLD,
    fontWeight: 'bold',
  },
  dropdownIcon: { position: 'absolute', alignSelf: 'center', right: -24 },
  analyticsView: {
    alignItems: 'center',
    gap: 9,
    paddingTop: HP('4.1%'),
    paddingBottom: HP('4.1%'),
  },
  priceChangeView: {
    flexDirection: 'row',
    gap: 11,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 50,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: WP('8.5%'),
  },
  tabsView: {
    paddingTop: HP('3%'),
  },
  sceneContainer: {
    paddingTop: HP('1.4%'),
    paddingHorizontal: WP('5.5%'),
  },
  tokenView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 17
  },
  tokenSymbol: {
    fontFamily: Fonts.FONT_FAMILIES.FONT_BOLD,
    fontSize: Fonts.FONT_SIZE.h_16,
    fontWeight: 'bold',
  },
  tokenName: {
    fontFamily: Fonts.FONT_FAMILIES.FONT_MEDIUM,
    fontSize: Fonts.FONT_SIZE.b_12,
  },
  tokenChange: {
    fontFamily: Fonts.FONT_FAMILIES.FONT_MEDIUM,
    fontSize: Fonts.FONT_SIZE.b_12,
    fontWeight: '600',
    alignSelf: 'flex-end',
  }
});

export { styleSheet };
