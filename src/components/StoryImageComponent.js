import React from 'react'
import { StyleSheet, TouchableOpacity , Image } from 'react-native'
import Colors from '../constants/Colors'
import Dimensions from '../constants/Dimensions'

const StoryImageComponent = (props) => {
    return <TouchableOpacity style={styles.storyComponent}>
        <Image style={{...styles.storyPlaceHolder , ...props.style}} source={props.uri} />
    </TouchableOpacity>
}

export default StoryImageComponent

const styles = StyleSheet.create({
    storyComponent : {
        borderColor : Colors.primary,
        borderWidth : 1,
        borderRadius : 24,
        padding : 4,
        marginHorizontal : 5,
        marginVertical : 20
    },
    storyPlaceHolder : {
        height : Dimensions.height * 60,
        width : Dimensions.width * 55,
        borderRadius : 18
    }
})
