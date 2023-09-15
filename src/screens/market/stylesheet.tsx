import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {Fonts} from '../../config';

const styleSheet = StyleSheet.create({
  container: {
    paddingHorizontal: WP('5.5%'),
    paddingVertical: HP('3.5%'),
  },
  listContainer: {
    marginBottom: 35,
    marginLeft: HP('3.5%'),
  },
  catTextContainer: {
    paddingHorizontal: 17,
    marginHorizontal: 2,
    borderRadius: 160,
    height: '92%',
    justifyContent: 'center',
  },
  catText: {
    fontFamily: Fonts.FONT_FAMILIES.FONT_BOLD,
    fontSize: Fonts.FONT_SIZE.b_12,
    fontWeight: '600',
  },
  catView: {
    borderRadius: 150,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  catGap: {
    width: 20,
  },
  catGradient: {
    justifyContent: 'center',
    borderRadius: 100,
  },
  cardContainer: {
    flex: 1,
    borderRadius: 20,
  },
  cardImage: {
    height: 159,
    width: '100%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  cardDetailView: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 18,
  },
  nftNameText: {
    fontFamily: Fonts.FONT_FAMILIES.FONT_BOLD,
    fontSize: Fonts.FONT_SIZE.b_12,
    fontWeight: '600',
    letterSpacing: 0.24,
    paddingBottom: 7,
  },
  nftListContainer: {
    marginHorizontal: HP('2%'),
  },
  favIconView: {
    borderRadius: 30,
    paddingHorizontal:4,
    paddingVertical:3, 
    position: 'absolute',
    right: 10,
    top: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  favText: {
    fontSize: Fonts.FONT_SIZE.b_8,
    fontWeight: '600',
  },
});

export {styleSheet};
