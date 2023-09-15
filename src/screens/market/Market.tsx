import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppBackground from '../../components/AppBackground/AppBackground';
import AppHeader from '../../components/AppHeader';
import { ImageUrl } from '../../config';
import { useTheme } from '../../hooks';
import { styleSheet } from './stylesheet';
const categories = [
  {
    name: 'All NFTs',
    key: 'all_nfts',
  },
  {
    name: 'Arts',
    key: 'arts',
  },
  {
    name: 'Collectibles',
    key: 'collectibles',
  },
  {
    name: 'Music',
    key: 'music',
  },
  {
    name: 'Photography',
    key: 'photography',
  },
];

const nftsData = [{
  name: 'Super Influencers',
  tokenId: '#1267',
  price: '6.34',
  image: ImageUrl.CARD_1,
},
{
  name: 'Super Influencers',
  tokenId: '#1268',
  price: '5.34',
  image: ImageUrl.CARD_2,
},
{
  name: 'Super Influencers',
  tokenId: '#1269',
  price: '2.34',
  image: ImageUrl.CARD_3,
},
{
  name: 'Super Influencers',
  tokenId: '#1270',
  price: '3.98',
  image: ImageUrl.CARD_4,
},
{
  name: 'Super Influencers',
  tokenId: '#1271',
  price: '10.34',
  image: ImageUrl.CARD_5,
},
{
  name: 'Super Influencers',
  tokenId: '#1271',
  price: '6.34',
  image: ImageUrl.CARD_1,
}
]

export const Market = () => {
  const { colors } = useTheme()
  const [category, setCategory] = useState(null)
  const isFocused = useIsFocused()

  useEffect(() => {
    !isFocused && setCategory(null)
  }, [isFocused])

  return (
    <>
      <AppBackground />
      <View style={styleSheet.container}>
        <AppHeader showHeader />
      </View>
      <View>
        <FlatList
          contentContainerStyle={{ display: 'flex', justifyContent: 'center' }}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (<View style={styleSheet.catGap} />)}
          data={categories}
          keyExtractor={item => item.key}
          style={styleSheet.listContainer}
          renderItem={({ item }) => (
            <TouchableOpacity style={styleSheet.catView} activeOpacity={0.9} onPress={() => setCategory(item)}>
              <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={category === item ? [colors.buttonLinearPrimaryOne, colors.buttonLinearPrimaryTwo] : [colors.buttonBackGround, colors.buttonBackGround]}
                style={styleSheet.catGradient}
              >
                <View style={{ backgroundColor: colors.buttonBackGround, ...styleSheet.catTextContainer }}>
                  <Text style={{ ...styleSheet.catText, color: colors.primaryText }}>{item?.name}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* NFT card */}
      <FlatList
        columnWrapperStyle={{ gap: 23, marginBottom: 14 }}
        contentContainerStyle={styleSheet.nftListContainer}
        showsVerticalScrollIndicator={false}
        data={nftsData}
        keyExtractor={item => item.tokenId}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ ...styleSheet.cardContainer, backgroundColor: `${colors.secondaryBackGround}30` }}>
            <Image source={item?.image} style={styleSheet.cardImage} resizeMode="cover" />
            <View style={styleSheet.cardDetailView}>
              <Text style={{ ...styleSheet.nftNameText, color: colors.primaryText }}>{item?.name}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ ...styleSheet.nftNameText, color: colors.primaryText, paddingBottom: 0 }}>{item?.tokenId}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                  <Image source={ImageUrl.ETH} />
                  <Text style={{ ...styleSheet.nftNameText, color: colors.primaryText, paddingBottom: 0 }}>{item?.price}</Text>
                </View>
              </View>
            </View>
            <View style={{ ...styleSheet.favIconView, backgroundColor: `${colors.buttonBackGround}25` }}>
              <Image source={ImageUrl.HEART_ICON} tintColor={colors.darkText} />
              <Text style={{ ...styleSheet.favText, color: colors.darkText }}>2</Text>
            </View>
          </View>
        )}
      />
    </>
  );
};
