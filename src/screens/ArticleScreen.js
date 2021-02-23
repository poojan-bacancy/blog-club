import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { StyleSheet , ScrollView ,Image , View,TouchableOpacity } from 'react-native'
import Text from '../components/Text'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../constants/Colors'
import Dimensions from '../constants/Dimensions'
import ArticleCard from '../components/ArticleCard'
import CustomButton from '../components/CustomButton'

const ArticleScreen = () => {

    return (
        <View style={{ flex : 1}}>
            <ScrollView style={styles.screen}>
                <View style={styles.header}>
                    <TouchableOpacity><MaterialCommunityIcons size={30} name="less-than"/></TouchableOpacity>
                    <TouchableOpacity><Entypo style={{marginRight : 10}} name="dots-three-horizontal" size={30} /></TouchableOpacity>
                </View>
                <Text style={styles.titleText}>
                    Four Things Every Woman Needs To Know
                </Text>
                <View style={styles.articleAuthorContent}>
                    <View style={{flexDirection : 'row'}}>
                        <Image style={styles.authorImage} source={require('../../assets/images/authorLogo.png')} />
                        <View style={{ justifyContent : 'space-around'}}>
                            <Text style={{color:Colors.secondary}} >Richard Gervain</Text>
                            <Text style={{color:Colors.secondary}} >2m ago</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection : 'row'}}>
                        <TouchableOpacity>
                            <Feather style={{marginHorizontal : 10}} name="send" size={25} color={Colors.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather style={{marginHorizontal : 10}} name="bookmark" size={25} color={Colors.primary} />
                        </TouchableOpacity>
                    </View> 
                </View>
                <ArticleCard />   
            </ScrollView>
            <CustomButton style={styles.button} >
                <EvilIcons name="like" size={30} color="#ffffff" />
                <Text style={styles.buttonText}>2.1k</Text>
            </CustomButton>
        </View>
    )
}

export default ArticleScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        backgroundColor : Colors.bg
    },
    header : {
        marginVertical : 25,
        marginHorizontal : 15,
        flexDirection : 'row', 
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    titleText : {
        fontSize : 24,
        lineHeight : 32,
        fontWeight : '800',
        marginHorizontal : 25,
        marginVertical : 10
    },
    articleAuthorContent : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginHorizontal : 25,
        marginVertical : 25
    },
    authorImage : {
        marginRight : 10
    },
    button : { 
        flexDirection : 'row' , 
        justifyContent : 'space-around' , 
        position : 'absolute' , 
        left : Dimensions.width* 220 , 
        top : Dimensions.height * 600
    },
    buttonText : {
        color : '#ffffff' , 
        fontSize : 16 , 
        marginHorizontal : 10}
})
