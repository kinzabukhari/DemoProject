import React from 'react'
import { StyleSheet, View } from 'react-native'

const Screen = (props) => {
    const {style,children} = props
    return (
        <View style={{...styles.container,...style}}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffffff'
    }
})

export default Screen
