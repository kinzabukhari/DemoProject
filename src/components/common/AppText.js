import React from 'react'
import { StyleSheet, Text } from 'react-native'

const AppText = (props) => {
    const {style,children} = props
    return (
        <Text {...props} style={{...styles.container,...style}}>
            {children}
        </Text>
    )
}
const styles = StyleSheet.create({
    container:{
        color:'black',
        fontSize:14
    }
})
export default AppText
