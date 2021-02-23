import React, { useState } from 'react'
import Colors  from '../constants/Colors'
import { StyleSheet,TouchableOpacity, View , ScrollView, FlatList } from 'react-native'
import Text from '../components/Text'
import Feather from 'react-native-vector-icons/Feather'
import { storyData } from '../constants/storyData'
import StoryImageComponent from '../components/StoryImageComponent'
import NewsCard from '../components/NewsCard'
import StoryModal from '../components/StoryModal'
import ImageCarousel from '../components/ImageCarousel'

const HomeScreen = () => {
    const [insModelOpen,setIsmodelOpen] = useState(false);
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.headerBlock}>
                <Text style={styles.hiText}>Hi, Jonathan!</Text>
                <Feather style={{marginTop : 5}} name="bell" size={25} color="#2D4379" />
            </View>

            <View style={styles.storiesBlock} > 
                <Text style={styles.exploreText}>Explore Today's</Text>
                <FlatList 
                    style={{marginLeft : 20}}
                    horizontal
                    data ={storyData}
                    renderItem={({item}) => <StoryImageComponent uri={item.uri} onPress = {() => setIsmodelOpen(true)} />}
                />
            </View>

            <StoryModal 
                visible = {insModelOpen}
                onClose = {() => setIsmodelOpen(false)}
            />

            <ImageCarousel />

            <View style={styles.newsBlock} >
                <View style={styles.newsTitle}>
                    <Text style={styles.newsText}>Latest News</Text>
                    <TouchableOpacity><Text style={styles.moreNews}>More</Text></TouchableOpacity>
                </View> 
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        backgroundColor : Colors.bg
    },
    headerBlock : {
        marginTop : 30,
        marginHorizontal : 20,
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row'
    },
    hiText : {
        color : Colors.secondary,
        fontSize : 18,
        lineHeight : 25
    },
    exploreText : {
        marginHorizontal :20,
        fontSize : 24,
        lineHeight : 32,
        fontWeight : '800'
    },
    newsTitle : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginVertical : 10
    },
    newsText : {
        fontSize : 20,
        lineHeight : 27,
        fontWeight : '800'
    },
    moreNews : {
        marginRight : 5,
        fontSize : 14,
        fontWeight : '500',
        lineHeight : 19,
        color : Colors.primary
    },
    newsBlock : {
        marginHorizontal : 20
    }
})
