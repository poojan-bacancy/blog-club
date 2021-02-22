import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

const ArticleCard = () => {
    return (
        <View style={styles.articleCard}>
            <Image style={styles.articleImage} source={require('../../assets/images/articleImage.png')} />
            <Text style={styles.articleFirstLine}>A man’s sexuality is never your 
            mind responsibility.</Text>
            <Text style={styles.articleDetailText}>This one got an incredible amount of backlash the last time I said it, so I’m going to say it again: a man’s sexuality is never, ever your responsibility, under any circumstances. Whether it’s the fifth date or your twentieth year of marriage, the correct determining factor for whether or not you have sex with your partner isn’t whether you ought to “take care of him” or “put out” because it’s been a while or he’s really horny — the correct determining factor for whether or not you have sex is whether or not you want to have sex.
        </Text>
        </View>
    )
}

export default ArticleCard

const styles = StyleSheet.create({
    articleCard : {
        backgroundColor : '#ffffff',
        borderTopLeftRadius : 28,
        borderTopRightRadius : 28,
        marginTop : 20 , 
        overflow : 'hidden',
        paddingBottom : 20
    },
    articleImage : {
        width : '100%'
    },
    articleFirstLine : {
        fontWeight : '800',
        fontSize : 18,
        lineHeight : 20,
        color : '#0D253C',
        marginHorizontal :15,
        marginVertical : 15
    },
    articleDetailText : {
        fontWeight : '400',
        fontSize : 14,
        lineHeight : 20,
        marginHorizontal : 16,
    }
})
