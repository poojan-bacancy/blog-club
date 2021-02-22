import React, { useState } from 'react'
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import Colors from '../constants/Colors'
import Dimensions from '../constants/Dimensions'
import { KeyboardAvoidingView } from 'react-native'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

const LoginScreen = () => {

    const [login,setlogin] = useState(true);

    const loginButtonStyle = {
        ...styles.signupLoginText , 
        color : !login ? "rgba(255, 255, 255, 0.25)" : "#ffffff"
    }

    const signupButtonStyle  = {
        ...styles.signupLoginText , 
        color : login ? "rgba(255, 255, 255, 0.25)" : "#ffffff"
    }
    return (
        <KeyboardAvoidingView style={styles.screen} behavior="height">
       
            <View style={styles.logoBlock} >
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            </View>

            <View style={styles.signupLoginBlock} >

                <View style={styles.signupLoginButtonBlock} >
                    <TouchableOpacity onPress={() => setlogin(true)} >
                        <Text style={loginButtonStyle}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setlogin(false)} >
                        <Text style={signupButtonStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.whatToRenderBlock}>
                    { login 
                    ? <LoginForm/>
                    : <SignupForm/>}
                </View>

            </View>
            
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        backgroundColor : Colors.bg
    },
    logoBlock : {
        marginTop : 50,
        marginBottom : 30,
        justifyContent : 'center',
        alignItems : 'center'
    },
    logo : {
        height : Dimensions.height * 70,
        width : Dimensions.width * 125
    },
    signupLoginBlock : {
        flex : 1,
        backgroundColor : Colors.primary,
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30
    },
    signupLoginButtonBlock : {
        flexDirection : 'row',
        padding : 12,
        justifyContent : 'space-around',
        alignItems : 'center'
    },
    signupLoginText : {
        fontSize : 20,
        fontWeight : '600'
    },  
    whatToRenderBlock : {
        flex : 1,
        backgroundColor : '#ffffff',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        padding : 32
    },
    welcomeText : {
        fontSize : 24,
        fontWeight : '800',
        marginVertical : 5,
        lineHeight : 32
    },
    belowWelcomeText : {
        marginVertical : 5,
        fontSize : 14,
        lineHeight : 18,
        fontWeight : '400',
        color : "rgba(45, 67, 121, 1)"
    }
})
