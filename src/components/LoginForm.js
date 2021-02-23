import React from 'react'
import { StyleSheet,TouchableOpacity, View } from 'react-native'
import Text from './Text'
import Input from './Input'
import CustomButton from './CustomButton'
import Dimensions from '../constants/Dimensions'
import Colors from '../constants/Colors'
import { SocialIcon } from 'react-native-elements'

const LoginForm = props => {
    return (
        <View style={styles.form} >
            
            <Text style={styles.welcomeText}>Welcome back </Text>
            <Text style={styles.signinText}>Sign in with your account</Text>
            
            <View style={styles.userNamePasswordBlock}>
                <Input label="Username"  />
                <Input label="Password" password />
                <CustomButton style={styles.button}>
                    <Text style={{color : '#ffffff'}}>LOGIN</Text>
                </CustomButton>
                <View style={styles.belowButtonBlock} >
                    <Text>Forgot your password</Text> 
                    <TouchableOpacity><Text style={{color : Colors.primary}}> Reset here</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.sigininButtonsBlock} >
                <Text>OR SIGN IN WITH</Text>
                <View style={styles.iconsBlock}>
                    <TouchableOpacity><SocialIcon type="google" /></TouchableOpacity>
                    <TouchableOpacity><SocialIcon type="facebook" /></TouchableOpacity>
                    <TouchableOpacity><SocialIcon type="twitter" /></TouchableOpacity>                    
                </View>
            </View>

        </View>
    )
}

export default LoginForm

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
