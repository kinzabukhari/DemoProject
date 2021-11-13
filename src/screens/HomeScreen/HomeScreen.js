import React from 'react'
import { Button, Text, View } from 'react-native'
import { Screen } from '../../components/common'
import styles from './styles'

const HomeScreen = (props) => {

    const handleNavigation = () =>{
        props.navigation.navigate("AddressScreen")
    }

    return (
        <Screen style={styles.container}>
            <Text style={styles.heading}>Go to Address Screen</Text>
            <Button title="Address Screen" onPress={handleNavigation} />
        </Screen>
    )
}

export default HomeScreen
