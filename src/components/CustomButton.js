import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

const CustomButton = props => {
    return (
        <TouchableOpacity 
            style={{...props.style , ...styles.buttonStyle}}
            onPress = { props.onPress }
        >
            {props.children}
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : Colors.primary,
        borderRadius : 12,
        padding : 10,
    }
})
