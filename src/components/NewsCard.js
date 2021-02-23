import React from 'react'
import { StyleSheet, View , Image } from 'react-native'
import Colors from '../constants/Colors'
import Dimensions from '../constants/Dimensions'
import Text from './Text'

const NewsCard = ({children}) => {
    return (
        <View style={styles.newsCard}>
            <Image style={styles.newsImage} source={require('../../assets/images/newsImage.png')} />
            <View style={styles.newsDetailBlock}>
                <Text style={styles.newsTitleText}>BIG DATA</Text>
                <Text style={styles.newsDetailText}>Why Big Data needs thick Data?</Text>
                {children}
            </View>
        </View>
    )
}

export default NewsCard

const styles = StyleSheet.create({
    newsCard : {
        flexDirection : 'row',
        alignItems : 'center',
        marginVertical : 10,
        backgroundColor : '#ffffff',
        borderRadius : 15
    },
    newsImage : {
        height : Dimensions.height * 140
    },
    newsDetailBlock : {
        paddingBottom : 20,
        justifyContent : 'space-around',
        paddingLeft:  5,
    },
    newsTitleText : {
        fontSize : 14,
        lineHeight : 20,
        fontWeight : '800',
        marginVertical : 10,
        color : Colors.primary
    },
    newsDetailText :{
        fontSize : 14,
        lineHeight : 20,
        fontWeight : '800',
        color : Colors.secondary
    }
})
