import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from './Input'
import CustomButton from './CustomButton'
import Dimensions from '../constants/Dimensions'
import { TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import { SocialIcon } from 'react-native-elements'

const SignupForm = props => {
    return (
        <View style={styles.form} >
            
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.signinText}>Sign up to enjoy our application</Text>
            
            <View style={styles.userNamePasswordBlock}>
                <Input label="Username"  />
                <Input label="Password" password />
                <CustomButton style={styles.button}>
                    <Text style={{color : '#ffffff'}}>SIGNUP</Text>
                </CustomButton>
                
            </View>

            <View style={styles.sigininButtonsBlock} >
                <Text>OR SIGN UP WITH</Text>
                <View style={styles.iconsBlock}>
                    <SocialIcon type="google" />
                    <SocialIcon type="facebook" />
                    <SocialIcon type="twitter" />
                </View>
            </View>

        </View>
    )
}

export default SignupForm

const styles = StyleSheet.create({
    form : {
        flex : 1
    },
    welcomeText : {
        fontSize : 24,
        lineHeight : 32,
        fontWeight : '800',
        marginVertical : 5
    },
    signinText : {
        marginVertical : 5,
        fontSize : 14,
        lineHeight : 18,
        fontWeight : '400',
        color : '#2D4379'
    },
    userNamePasswordBlock : { 
        marginVertical : 15 
    },
    button : {
        width : '100%',
        marginVertical : 10,
        height : Dimensions.height * 50
    },
    belowButtonBlock : { 
        flexDirection : 'row' , 
        justifyContent : 'center' , 
        alignItems : 'center'
    },
    sigininButtonsBlock : {
        marginVertical : 10,
        alignItems : 'center'
    },
    iconsBlock : {
        flexDirection : 'row' , 
        justifyContent : 'space-around' , 
        alignItems : 'center' , 
        marginVertical : 5 
    }
})
