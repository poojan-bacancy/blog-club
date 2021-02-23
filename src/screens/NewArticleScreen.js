import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet,ScrollView, View } from 'react-native'
import Text from '../components/Text'
import Feather from 'react-native-vector-icons/Feather'
import ArticleButton from '../components/ArticleButton'
import Colors from '../constants/Colors'

const TagComponent = ({tagName}) => {
    return(
        <View style={styles.tag}>
            <Text style={styles.tagNameText}>{tagName}</Text>
            <TouchableOpacity style={{ borderRadius : 35, backgroundColor : 'rgba(55, 106, 237, 0.15)'}} ><Feather name="x" size={20} color={Colors.primary} /></TouchableOpacity>
        </View>
    );
}

const NewArticleScreen = () => {

    const [tags,setTags] = useState(["Art","Design","Culture","Production"])
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.titleBlock}>
                <Text style={styles.title} >New Article</Text>
                <Feather name="download" size={30} />
            </View>
            <Text style={styles.titleText}>The art of begin an artist</Text>
            <Text style={styles.subTitleText} >Simplified products</Text>
            <View style={styles.tagsBlock}>
                <TouchableOpacity><Text style={styles.addTagsText}>Add Tags</Text></TouchableOpacity>
                {tags.map( tag => <TagComponent key={tag} tagName = {tag} />)}
            </View>
            <View style={styles.articleContent}>
                <Text style={styles.articleContentTitleText}>Article Content</Text>
                <Text style={styles.articleContentDetailText}>This one got an incredible amount of backlash the last time I said it, so I’m going to say it again: a man’s sexuality is never, ever your responsibility, under any circumstances. Whether it’s the fifth date or your twentieth year of marriage, the correct determining factor for whether or not you have sex with your partner isn’t whether you ought to “take care of him” or “put out” because it’s been a while or he’s really horny.</Text>
            </View>
            <View style={{alignItems : 'center' , marginTop : 20}}>
            <ArticleButton />
            </View>
        </ScrollView>
    )
}

export default NewArticleScreen

const styles = StyleSheet.create({
    screen : {
        flex :1,
        padding : 20,
        backgroundColor : Colors.bg
    },
    titleBlock : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginVertical : 15
    },
    title : {
        fontWeight : '800',
        fontSize : 24,
        lineHeight :33
    },
    titleText : {
        marginVertical : 10,
        paddingVertical : 3,
        fontWeight : '800',
        fontSize : 22,
        lineHeight : 30,
        borderBottomColor : 'rgba(123, 139, 178, 0.26)',
        borderBottomWidth : 1,
    },
    subTitleText : {
        marginVertical : 8,
        paddingVertical : 3,
        fontWeight : '500',
        fontSize : 18,
        lineHeight :20,
        borderBottomColor : 'rgba(123, 139, 178, 0.26)',
        borderBottomWidth : 1,
    },
    articleTitleText : {
        fontSize : 22,
        lineHeight : 30,
        fontWeight : '800'
    },
    articleSubtitleText : {
        fontSize : 18,
        lineHeight : 20,
        fontWeight : '500'
    },
    tagsBlock : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignItems : 'flex-start',
        marginVertical : 20,
    },
    addTagsText : {
        fontWeight : '800',
        marginRight : 5,
        marginBottom : 10,
        fontSize : 14,
        lineHeight :21,
        color : Colors.primary
    },
    tag:{
        padding : 1,
        marginHorizontal : 10, 
        flexDirection : 'row',
        borderRadius : 30,
        borderColor : Colors.primary,
        borderWidth  :1
    },
    tagNameText : {
        fontWeight : '800',
        fontSize : 12,
        lineHeight :18,
        color : Colors.primary,
        marginHorizontal : 10
    },
    articleContent : {
        marginVertical : 15,
    },
    articleContentTitleText : {
        paddingVertical : 3,
        fontWeight : '500',
        fontSize : 14,
        lineHeight :21,
        borderBottomColor : 'rgba(123, 139, 178, 0.26)',
        borderBottomWidth : 1,
    },
    articleContentDetailText : {
        color : Colors.secondary,
        marginVertical : 12,
        fontWeight : '400',
        fontSize : 14,
        lineHeight :20,
    }
})
