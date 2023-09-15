import { FlatList, Image, Text, View } from 'react-native';
import { ImageUrl } from '../../config';
import { useTheme } from '../../hooks';
import { styleSheet } from './stylesheet';

const tokensData = [
  {
    name: 'Bored Ape Yacht Club',
    tokenId: '#1957',
    image: ImageUrl.NFT_1,
    usdPrice: '$36,590.00',
    ethPrice: '6.61'
  },
  {
    name: 'Bored Ape Yacht Club',
    tokenId: '#6513',
    image: ImageUrl.NFT_2,
    usdPrice: '$11,590.00',
    ethPrice: '199.8'
  },
  {
    name: 'Bored Ape Yacht Club',
    tokenId: '#1955',
    image: ImageUrl.NFT_3,
    usdPrice: '$23,452.00',
    ethPrice: '123.3'
  },
];

const NftItem: React.FC<any> = ({ token, index }: any) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...styleSheet.tokenView,
        borderColor: colors.inActiveTab,
        borderBottomWidth: index === tokensData.length - 1 ? 0 : 1,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={token?.image} />
        <View style={{ marginLeft: 13 }}>
          <Text style={{ ...styleSheet.tokenSymbol, color: colors.primaryText }}>
            {token?.tokenId}
          </Text>
          <Text style={{ ...styleSheet.tokenName, color: colors.tertertiaryText }}>
            {token?.name}
          </Text>
        </View>
      </View>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 4 }}>
        <Image source={ImageUrl.ETH} style={{ height: 14, width: 14 }} />
        <Text style={{ ...styleSheet.tokenSymbol, color: colors.primaryText, textAlign: 'right' }}>
          {token?.ethPrice}
        </Text>
        </View>
        <Text style={{ ...styleSheet.tokenChange, color: token?.change < 0 ? colors.error : colors.sucess, }}>
          {token?.usdPrice}
        </Text>
      </View>
    </View>
  );
};

const NftsTab = () => {
  return (
    <>
      <View>
        <FlatList
          data={tokensData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.tokenId}
          renderItem={({ item, index }) => (
            <NftItem token={item} index={index} />
          )}
        />
      </View>
    </>
  );
};

export default NftsTab;
