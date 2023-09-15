import React from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import AppBackground from '../../components/AppBackground/AppBackground';
import { Fonts, ImageUrl } from '../../config';
import { styleSheet } from './stylesheet';
import { TabView, TabBar } from 'react-native-tab-view';
import {
  widthPercentageToDP as WP
} from 'react-native-responsive-screen';
import { useTheme } from '../../hooks';
import { CircleButton } from '../../components/Button/CircleButton';
import TokensTab from './TokensTab';
import NftsTab from './NftsTab';
import AppHeader from '../../components/AppHeader';

const renderScene = ({ route }) => {
  switch (route.key) {
    case 'tokens':
      return <TokensTab />;
    case 'nfts':
      return <NftsTab />;
    default:
      return null;
  }
};

export const Home = () => {
  const { colors } = useTheme()
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'tokens', title: 'Tokens' },
    { key: 'nfts', title: 'NFTs' },
  ]);

  return (
    <>
      <AppBackground />
      <View style={styleSheet.container}>
        <AppHeader />
        {/* Analytics */}
        <View style={styleSheet.analyticsView}>
          <Text style={{ ...styleSheet.baseText, color: colors.primaryText, fontSize: Fonts.FONT_SIZE.b_14, letterSpacing: 0.28 }}>Current Wallet Balance</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ ...styleSheet.baseText, color: colors.primaryText, fontSize: Fonts.FONT_SIZE.h_36 }}>$ 5,323.00</Text>
            <Image source={ImageUrl.DROPDOWN_ICON} resizeMode='contain' style={styleSheet.dropdownIcon} />
          </View>
          <View style={{ ...styleSheet.priceChangeView, backgroundColor: colors.buttonBackGround }}>
            <Text style={{ ...styleSheet.baseText, color: colors.primaryText, fontWeight: '500', letterSpacing: 0.24 }}>BTC : 0.00335</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Image source={ImageUrl.UP_ICON} resizeMode='contain' />
              <Text style={{ ...styleSheet.baseText, color: colors.sucess, letterSpacing: 0.24 }}>+6.54%</Text>
            </View>
          </View>
        </View>
        {/* Buy Sell Buttons */}
        <View style={styleSheet.buttonsView}>
          <CircleButton
            startColor={colors.secondaryBackGround}
            endColor={colors.secondaryBackGround}
            image={ImageUrl.SEND_ICON}
            label={'Send'}
            onPress={() => console.log('Clicked')} />
          <CircleButton
            startColor={colors.secondaryOne}
            endColor={colors.secondaryTwo}
            image={ImageUrl.ADD_ICON}
            label={'Buy'}
            onPress={() => console.log('Clicked')} />
          <CircleButton
            startColor={colors.secondaryBackGround}
            endColor={colors.secondaryBackGround}
            image={ImageUrl.RECEIVE_ICON}
            label={'Receive'}
            onPress={() => console.log('Clicked')} />
        </View>
      </View>
      {/* Tabs */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={styleSheet.tabsView}
        sceneContainerStyle={styleSheet.sceneContainer}
        renderTabBar={prop => (
          <TabBar {...prop}
            tabStyle={{
              marginVertical: 6,
              marginHorizontal: 6
            }}
            style={{
              backgroundColor: colors.inActiveTab,
              borderRadius: 50,
              marginHorizontal: WP('5.5%')
            }}
            indicatorStyle={{
              backgroundColor: colors.activeTab,
              height: '100%',
              borderRadius: 50,
            }}
            pressColor={'transparent'}
            renderLabel={({ route, focused }) => (
              <View>
                <Text
                  style={[
                    { fontSize: Fonts.FONT_SIZE.b_14, fontWeight: '600' },
                    focused
                      ? {
                        color: colors.primaryText,
                      }
                      : {
                        color: `${colors.tertertiaryText}90`
                      },
                  ]}>
                  {route.title}
                </Text>
              </View>
            )}
          />
        )}
      />
    </>
  );
};
