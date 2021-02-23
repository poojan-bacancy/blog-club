import React from 'react'
import { ScrollView,StyleSheet, View , TouchableOpacity } from 'react-native'
import Text from '../components/Text'
import Entypo from 'react-native-vector-icons/Entypo'
import MyPostsContainer from '../components/MyPostsContainer'
import ProfileCard from '../components/ProfileCard'
import Colors from '../constants/Colors'

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.profileTitle}>
                <Text style={styles.profileTitleText}>Profile</Text>
                <TouchableOpacity><Entypo name="dots-three-horizontal" size={25}  /></TouchableOpacity>
            </View>
            <ProfileCard />
            <MyPostsContainer />
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        backgroundColor : Colors.bg
    },
    profileTitle : {
        flexDirection : 'row',
        marginHorizontal : 25,
        marginTop : 25,
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    profileTitleText : {
        fontSize : 24,
        lineHeight : 32,
        fontWeight : '800'
    },
})
