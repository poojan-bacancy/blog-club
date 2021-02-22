import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'
import Dimensions from '../constants/Dimensions'
import CustomButton from '../components/CustomButton'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../constants/Colors'

const Onboarding = () => {
    return (
        <View style={styles.screen} >
            
            <View style={styles.imageBlock} >
                <Image style={styles.image} source={require('../../assets/images/LogoImage.png')} />
            </View>
            
            <View style={styles.secondBlock} >
                <View style={styles.detailBlock} >
                    
                    <Text style={styles.detailTitle} >
                        Read the article you want instantly.
                    </Text>
                    
                    <Text style={styles.detail} >
                        You can read thousands of articles on Blog Club, save them in the application and share them with your loved ones.
                    </Text>
                    
                    <View style={styles.indicatorAndButtonBlock} >
                        <Text>HIi</Text>
                        <CustomButton style={styles.button}>
                            <AntDesign name="arrowright" size={30} color="#ffffff"/>
                        </CustomButton>
                    </View>

                </View>
            </View>
        
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    screen : {
        flex:1 , 
        backgroundColor : Colors.bg
    },
    imageBlock : {
        justifyContent : "center",
        alignItems : 'center',
        marginTop : 100
    },
    image : {
        height : Dimensions.height * 342,
        width : Dimensions.width * 295
    },
    secondBlock : {
        flex : 1 , 
        justifyContent : 'flex-end'
    },
    detailBlock : {
        borderTopLeftRadius : 30 ,
        borderTopRightRadius : 30,
        backgroundColor : '#ffffff',
        padding : 35 
    },
    detailTitle : {
        fontSize : 24,
        lineHeight : 32,
        fontWeight : '800'
    },
    detail : {
        fontSize : 14,
        lineHeight : 22,
        fontWeight : '400',
        color : '#2D4379',
        marginVertical : 20
    },
    indicatorAndButtonBlock : {
        paddingHorizontal : 5,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    button : {
        height : Dimensions.height * 50,
        width : Dimensions.width * 70
    },
    
})
