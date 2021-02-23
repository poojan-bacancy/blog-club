import React from 'react'
import { StyleSheet,ImageBackground, View } from 'react-native'
import Text from './Text'
import Carousel from 'react-native-snap-carousel';
import Dimensions from '../constants/Dimensions';

const data = [
    {
        key : 1 , 
        title : 'Techology',
        uri : require('../../assets/images/cardOne.png')
    },
    {
        key : 2 , 
        title : 'Techology',
        uri : require('../../assets/images/cardOne.png')
    },
    {
        key : 3 , 
        title : 'Techology',
        uri : require('../../assets/images/cardOne.png')
    },
    {
        key : 4 , 
        title : 'Techology', 
        uri : require('../../assets/images/cardOne.png')
    }
]

const CarouselCard = ({item,index}) => {
    return( 
        <View key={index} style={styles.carouselCard}>
            <ImageBackground style={styles.carouselImage} source={item.uri}>
            <View style={styles.carouselTitle}>
                <Text style={styles.carouselTitleText}>
                    {item.title}
                </Text>
            </View>
            </ImageBackground>
        </View>
    );
}

const ImageCarousel = () => {
    const isCarousel = React.useRef(null)
    return (
        <Carousel 
            style={{ left : 30}}
            data = {data}
            renderItem = {CarouselCard}
            ref={isCarousel}
            sliderWidth={Dimensions.width * 320}
            itemWidth = {Dimensions.width * 220}    
        />
    )
}

export default ImageCarousel

const styles = StyleSheet.create({
    carouselCard : {
        borderRadius :20,
        height : Dimensions.height * 270,
        width : Dimensions.width * 200 ,
        shadowColor: "black",
        shadowOffset: {
        width: 0,
        height: 10,
        },
        shadowRadius : 5,
        shadowOpacity: 0.1,
        elevation : 12,
        overflow : 'hidden',
        marginVertical : 15
    },
    carouselImage :{
        width : '100%',
        height : '100%',
        borderRadius : 20
    },
    carouselTitle : { 
        flex : 1 , 
        justifyContent : 'flex-end'
    },
    carouselTitleText : { 
        marginBottom : 25 , 
        marginLeft : 20 ,
        fontSize : 18,
        fontWeight : '800',
        lineHeight : 24.59, 
        color : "#ffffff"
    }
})
