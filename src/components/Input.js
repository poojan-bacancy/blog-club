import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import Dimensions from '../constants/Dimensions'

const Input = (props) => {
    
    const [isFocus,setIsFocus] = useState(false);
    const [isVisible,setIsVisible] = useState(false);

    const inputBlockStyle = {
        ...styles.inputBlock , 
        borderBottomColor : isFocus ? Colors.primary : Colors.bg
    }

    return (
        <View style={{...styles.inputContainer , ...props.inputBlockStyle}}>
            { props.label && <Text style={styles.label} >{props.label}</Text>}
            <View style={inputBlockStyle}>
                <TextInput 
                    value={props.value}
                    style={{...styles.input , ...props.inputStyle}}
                    onFocus = {() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    secureTextEntry = {props.password && !isVisible}
                />
                {props.password && <TouchableOpacity onPress={() => setIsVisible(prevState => !prevState)} >
                    <Text style={styles.showButton}>Show</Text>
                </TouchableOpacity>}
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer : {
        marginVertical : 10
    },
    inputBlock : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        height : Dimensions.height *50,
        borderBottomWidth : 2
    },  
    label : {
        fontSize : 14,
        fontWeight : '400',
        color : '#2D4379'
    },
    input : {
        flex : 1,
    },
    showButton : {
        fontSize : 12,
        color : Colors.primary
    }
})
