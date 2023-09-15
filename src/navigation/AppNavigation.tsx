import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { useRef } from 'react';

const Login = ({ navigation }: StackHeaderProps ) => {
    return (
        <View
        style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
        }}
        >
            <Text>Login screen</Text>
            <Button
                title="Dashboard"
                onPress={() => navigation.navigate('dashboard')}
            />
        </View>
    )
}

const Dashboard = ({ navigation }) => {
    return (
        <View
        style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            backgroundColor:'red'
        }}
        >
            <Text>Dashboard screen</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('login')}
            />
        </View>
    )
}

const Stack = createStackNavigator();
export const AppNavigation = () => {
    const navigationRef: any = useRef();
    return (
        <NavigationContainer ref={navigationRef} onReady={() => console.log('Readyyyy')}>
            <Stack.Navigator initialRouteName='dashboard'>
                <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="dashboard" component={Dashboard} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

