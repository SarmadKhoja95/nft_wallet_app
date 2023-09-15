import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../hooks';
import { Home } from '../screens/home';
import { Animated, Image, View } from 'react-native'
import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import { ImageUrl } from '../config';
import fonts from '../config/fonts';
import { Sample } from '../screens/sample';
import { Root } from './Root';
import { Market } from '../screens/market';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    const { colors } = useTheme()
    const av = new Animated.Value(0);
    av.addListener(() => { return });
    return (
        <Tab.Navigator initialRouteName={Root.HOME} 
            screenListeners={{
                focus: () => {
                    Animated.timing(av, {
                        toValue: 1,
                        duration: 200,
                        useNativeDriver: true,
                    }).start();
                },
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.activeBottomTab,
                tabBarInactiveTintColor: colors.inActiveBottomTab,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: colors.secondaryBackGround,
                    height: HP('11%'),
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                },
                tabBarLabelStyle: {
                    fontSize: fonts.FONT_SIZE.b_12,
                    fontWeight: '600',
                    textTransform: 'capitalize',
                },
                tabBarItemStyle: {
                    paddingTop: WP('1%'),
                },
            }}
        >
            <Tab.Screen name={Root.HOME} component={Home} options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        source={ImageUrl.HOME_ICON}
                        resizeMode="contain"
                        style={{
                            width: WP('8%'),
                            tintColor: color,
                        }}
                    />
                ),
            }} />
            <Tab.Screen name={Root.WALLET} component={Sample}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={ImageUrl.WALLET_ICON}
                            resizeMode="contain"
                            style={{
                                width: WP('8%'),
                                tintColor: color,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen name={Root.SWAP} component={Sample}
                options={{
                    tabBarIcon: () => (
                        <View style={{
                            height: 72, width: 72, borderRadius: 64,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            backgroundColor: '#0061FF',
                            top: -37
                        }}>
                            <Image
                                source={ImageUrl.SWAP_ICON}
                                resizeMode="contain"
                                style={{
                                    width: WP('8%'),
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name={Root.MARKET} component={Market}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={ImageUrl.MARKET_ICON}
                            resizeMode="contain"
                            style={{
                                width: WP('8%'),
                                tintColor: color,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen name={Root.PROFILE} component={Sample}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={ImageUrl.PROFILE_ICON}
                            resizeMode="contain"
                            style={{
                                width: WP('8%'),
                                tintColor: color,
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

