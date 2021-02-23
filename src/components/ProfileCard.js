import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'
import Dimensions from '../constants/Dimensions'
import ProfileButton from './ProfileButton'
import StoryImageComponent from './StoryImageComponent'
import Text from './Text'

const ProfileCard = props => {
    const uri = require('../../assets/images/placeholder.png')
    return (
        <View style={styles.profileCard}>
            <View style={styles.imageAndTextBlock}>
                <StoryImageComponent uri = {uri} style={styles.avatar} />
                <View style={{marginLeft : 15 , marginBottom : 5}}> 
                    <Text style={styles.username}>@joviedan</Text>
                    <Text style={styles.name}>Jovi Daniel</Text>
                    <Text style={styles.role}>UX Designer</Text>
                </View>
            </View>
            <Text style={styles.about}>
                About Me
            </Text>
            <Text style={styles.aboutText}>
            Madison Blackstone is a director of user experience design, with experience managing global teams.
            </Text>
            <View style={{marginVertical : 10}}></View>
            <View >
            <ProfileButton posts={52} following={250} followers="4.5k" />
            </View>
            
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    profileCard : {
        overflow : 'visible',
        backgroundColor : '#ffffff',
        marginHorizontal : 40,
        borderRadius : 25,
        paddingTop : 20,
        paddingBottom :  50,
        paddingHorizontal : 30,
        marginVertical : 20,
        shadowColor : 'black',
        shadowOpacity : 0.5,
        shadowOffset : {
            height : 2,width :5
        },
        elevation : 2
    },
    avatar : {
        height : Dimensions.height * 70,
        width : Dimensions.width * 65,
    },
    imageAndTextBlock : {
        flexDirection : 'row',
        alignItems :'center'
    },
    username : {
        color : Colors.secondary,
        fontSize : 14,
        lineHeight : 19,
        fontWeight : '400',
    },
    name : {
        fontSize : 18,
        lineHeight : 25,
        fontWeight : '800',
        marginVertical : 5
    },
    role : {
        fontSize : 16,
        lineHeight : 20,
        fontWeight : 'normal',
        color : Colors.primary
    },
    about : {
        fontSize : 16,
        lineHeight : 22,
        fontWeight : '800'
    },
    aboutText : {
        color : Colors.secondary,
        marginVertical : 5,
        fontSize : 14,
        lineHeight : 20,
        fontWeight : '400'
    }
})
