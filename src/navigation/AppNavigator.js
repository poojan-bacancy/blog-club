import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BlogNavigator from './BlogNavigator'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen'
import Onboarding from '../screens/Onboarding'
import LoginScreen from '../screens/LoginScreen'

const MyStack = createStackNavigator()

const AuthNavigator = () => {
    return(
        <MyStack.Navigator screenOptions={{ headerShown : null}}>
            <MyStack.Screen name="Splash" component={SplashScreen} />
            <MyStack.Screen name="Onboarding" component={Onboarding} />
            <MyStack.Screen name="Login" component={LoginScreen} />
        </MyStack.Navigator>
    );
}

const AppNavigator = () => {
    return(
        <NavigationContainer>
            {/* <AuthNavigator /> */}
            <BlogNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator

