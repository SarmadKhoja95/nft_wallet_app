import {FlatList, Image, Text, View} from 'react-native';
import {ImageUrl} from '../../config';
import {useTheme} from '../../hooks';
import {styleSheet} from './stylesheet';

const tokensData = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    image: ImageUrl.BITCOIN_ICON,
    price: '$36,590.00',
    change: '+6.21'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    image: ImageUrl.ETH_ICON,
    price: '$2500.00',
    change: '-5.21'
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    image: ImageUrl.SOLANA_ICON,
    price: '$390.00',
    change: '-2.21'
  },
];

const TokenItem: React.FC<any> = ({token, index}: any) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        ...styleSheet.tokenView,
        borderColor: colors.inActiveTab,
        borderBottomWidth: index === tokensData.length - 1 ? 0 : 1,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={token?.image} />
      <View style={{marginLeft: 13}}>
        <Text style={{...styleSheet.tokenSymbol, color: colors.primaryText}}>
          {token?.symbol}
        </Text>
        <Text style={{...styleSheet.tokenName, color: colors.tertertiaryText}}>
          {token?.name}
        </Text>
      </View>
      </View>

      <View>
      <Text style={{...styleSheet.tokenSymbol, color: colors.primaryText }}>
          {token?.price}
        </Text>
        <Text style={{...styleSheet.tokenChange, color: token?.change < 0 ? colors.error : colors.sucess,    }}>
          {token?.change}
        </Text>
      </View>
    </View>
  );
};

const TokensTab = () => {
  return (
    <>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={tokensData}
          keyExtractor={item => item.symbol}
          renderItem={({item, index}) => (
            <TokenItem token={item} index={index} />
          )}
        />
      </View>
    </>
  );
};

export default TokensTab;
