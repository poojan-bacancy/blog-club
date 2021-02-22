import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import Dimensions from '../constants/Dimensions'

const ProfileButton = props => {

    const [whoIsFocused,setWhoIsFocused] = useState('posts');
    

    return (
        <View style={styles.button}>
            <TouchableOpacity 
                style={{...styles.subsetButton , backgroundColor : whoIsFocused === 'posts' ? '#2151CD' : Colors.primary}}
                onPress={ () => setWhoIsFocused('posts')}
            >
                <Text style={styles.number}>{props.posts}</Text>
                <Text style={styles.text}>Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{...styles.subsetButton , backgroundColor : whoIsFocused === 'following' ? '#2151CD' : Colors.primary}}
                onPress={ () => setWhoIsFocused('following')}
            >
                <Text style={styles.number}>{props.following}</Text>
                <Text style={styles.text}>Follwing</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{...styles.subsetButton , backgroundColor : whoIsFocused === 'followers' ? '#2151CD' : Colors.primary}}
                onPress={ () => setWhoIsFocused('followers')}
            >
                <Text style={styles.number}>{props.followers}</Text>
                <Text style={styles.text}>Followers</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileButton

const styles = StyleSheet.create({
    button : {
        position : 'absolute',
        overflow : 'hidden',
        flexDirection : 'row',
        backgroundColor : Colors.primary,
        borderRadius : 12,
        paddingRight : 3,
        height : Dimensions.height * 67
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
        width : '33.3%',
        justifyContent : 'center',
        alignItems : 'center',
    }
})


