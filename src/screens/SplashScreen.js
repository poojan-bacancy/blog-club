import React from 'react'
import { StyleSheet, ImageBackground  } from 'react-native'

// add time interval for navigation

const SplashScreen = () => {
    return (
        <ImageBackground 
            source={require('../../assets/images/Splashscreen.png')} 
            style={styles.screen}
        />
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        height : '100%',
        width : '100%'
    }
})
