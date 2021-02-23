import React from 'react'
import { ImageBackground } from 'react-native'
import { Modal , Image, StyleSheet, View , TouchableOpacity  } from 'react-native'
import Text from './Text'
import Colors from '../constants/Colors'
import Dimensions from '../constants/Dimensions'
import Feather from 'react-native-vector-icons/Feather'
import CustomButton from './CustomButton' 
import AntDesign from 'react-native-vector-icons/AntDesign'

const StoryModal = (props) => {
    return (
        <Modal
            animationType = "fade"
            transparent={false}
            visible={props.visible}
        >
            <TouchableOpacity activeOpacity={1} style={styles.modalScreen} onPress = {props.onClose} >
                <View style={styles.modalBox}>
                    <ImageBackground resizeMode="cover" style={styles.image} source={require('../../assets/images/storyPlaceholder.png')}>
                        <View style={styles.articleNameContent}>
                            <View style={{flexDirection : 'row'}}>
                                <Image style={styles.userImage} source={require('../../assets/images/authorLogo.png')} />
                                <View style={{ justifyContent : 'space-around'}}>
                                    <Text style={{ color : '#ffffff' , fontWeight : '800' , fontSize : 16}}>Richard Gervain</Text>
                                    <Text style={{ color : '#ffffff'}}>2m ago</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection : 'row'}}>
                                <TouchableOpacity onPress={props.onClose} >
                                    <Feather style={{marginHorizontal : 10}} name="x" size={30} color="#ffffff" />
                                </TouchableOpacity>
                            </View> 
                        </View>
                    </ImageBackground>      
                </View>

                <View style={styles.readMoreButtonContainer}>
                    <View style={{ alignItems : 'center'}}>
                        <AntDesign name="up" color ="#ffffff" size={20} />
                        <CustomButton style={{ backgroundColor : '#ffffff'}} >
                            <Text style={{color : Colors.primary , marginHorizontal : 5 ,fontWeight : '800' , fontSize :14 }} >Read more</Text>
                        </CustomButton>
                    </View> 
                    <View style={{ marginRight : 5 , marginTop : 10 }}>
                    <AntDesign size={25} name="heart" color="#FF3743" />
                    <Text style={{color : '#ffffff' , fontWeight : '800' , fontSize :16}}>450k</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

export default StoryModal

const styles = StyleSheet.create({
    modalScreen: {
        flex : 1,
        backgroundColor : Colors.primary
    },
    modalBox : {
        height : Dimensions.height * 600,
        width : '100%',
        borderBottomLeftRadius : 28,
        borderBottomRightRadius : 28,
        overflow : 'hidden',
    },
    image : {
        height :'100%',
        width : '100%'
    },
    articleNameContent : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginHorizontal : 25,
        marginVertical : 50
    },
    userImage : {
        marginRight : 10
    },
    readMoreButtonContainer : {
        left : Dimensions.width * 55,
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        marginTop : 50
    }
})
