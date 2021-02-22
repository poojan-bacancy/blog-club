import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BlogNavigator from './BlogNavigator'

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <BlogNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator

