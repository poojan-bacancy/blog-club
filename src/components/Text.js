import React from 'react'
import { Text } from 'react-native'

const CustomText = ({ style , children}) => {
    return (
        <Text style={{ fontFamily : 'Avenir' , ...style}} >{children}</Text>
    )
}

export default CustomText

