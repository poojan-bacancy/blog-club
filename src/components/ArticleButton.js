import React , { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Dimensions from '../constants/Dimensions'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'

const data = [
    {
        key : '1',
        name : 'x',
        icon : Feather
    },
    {
        key : '2',
        name : 'image',
        icon : Feather
    },
    {
        key : '3',
        name : 'play-circle',
        icon : Feather
    },
    {
        key : '4',
        name : 'list',
        icon : Feather
    },
    {
        key : '5',
        name : 'link',
        icon : Feather
    },
    {
        key : '6',
        name : 'text-size',
        icon : Octicons
    },
]


const IconButtonComponent = ({name , Icon , onPress , whoIsFocused} ) => {
    return(
        <TouchableOpacity 
            style={{...styles.subsetButton , backgroundColor : whoIsFocused === name ? '#ffffff' : '#0D253C'}}
            onPress = {onPress}
        >
            <Icon size={25} name={name} color={ whoIsFocused === name ? '#0D253C' : '#ffffff'} />   
        </TouchableOpacity>
    );
}

const ArticleButton = () => {

    const [whoIsFocused,setWhoIsFocused] = useState('x');

    return (
        <View style={styles.button}>
            { data.map( item => 
            <IconButtonComponent 
                key={item.key}
                whoIsFocused={whoIsFocused} 
                onPress={() => setWhoIsFocused(item.name)} 
                Icon={item.icon} 
                name={item.name} 
            />
            )}
        </View>
    )
}

export default ArticleButton

const styles = StyleSheet.create({
    button : {
        flex : 1,
        alignItems : 'center',
        overflow : 'hidden',
        flexDirection : 'row',
        justifyContent : 'center',
        backgroundColor : "#0D253C",
        borderRadius : 30,
        paddingVertical : 3,
        height : Dimensions.height * 42
    },
    number : {
        fontSize : 20,
        lineHeight : 22,
        fontWeight : '800',
        color : '#ffffff'
    },
    text : {
        marginTop : 3,
        fontSize : 12,
        lineHeight : 18,
        fontWeight : '400',
        color : '#ffffff'
    },
    subsetButton : {
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius  : 30,
        padding : 5,
        marginHorizontal : 5
    }
})
