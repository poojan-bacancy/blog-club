import React from 'react'
import { StyleSheet, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Colors from '../constants/Colors'
import NewsCard from './NewsCard'
import Text from './Text'

const MyPost = () => {
    return(
        <NewsCard>
                <View style={styles.likesTimeSavedBlock}>
                    <EvilIcons name="like" size={20} />
                    <Text style={{marginLeft : 5 , marginRight : 15, color : Colors.secondary,}} >2.1k</Text>
                    <EvilIcons name="clock" size={20}  />
                    <Text style={{marginLeft : 5 , marginRight : 15 , color : Colors.secondary,}} >1 hr ago</Text>
                    <Ionicons size={20} name="bookmark" color={Colors.primary} />
                </View>
            </NewsCard>
    );
}

var posts = [];
    for ( let i=0 ; i < 5 ; i++){
        posts.push(
            <View key={i}>
                <MyPost />
            </View>
            
        )
    }

const MyPostsContainer = props => {
    return (
        <View style={styles.myPostsContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText} >My Posts</Text>
                <View style={styles.iconContainer}>
                    <Feather name="grid" style={styles.icon} size={20} color={Colors.primary} />
                    <Feather name="list" style={styles.icon} size={20} color={Colors.primary} />
                </View>
            </View>
            {posts}
        </View>
    )
}

export default MyPostsContainer

const styles = StyleSheet.create({
    myPostsContainer : {
        backgroundColor : '#ffffff',
        borderTopLeftRadius : 28,
        borderTopRightRadius : 28,
        marginTop : 40 , 
        padding : 25,
    },
    titleContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        marginVertical : 10,
        justifyContent : 'space-between'
    },
    titleText : {
        fontWeight : '800',
        fontSize : 20,
        lineHeight : 27
    },
    iconContainer : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        marginRight : 10
    },
    icon : {
        marginHorizontal : 10
    },
    likesTimeSavedBlock : {
        marginTop : 20,
        flexDirection : 'row',
        alignItems : 'center'
    }
})
