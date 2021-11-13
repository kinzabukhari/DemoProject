import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {HomeScreen, AddressScreen} from '../screens'

const Stack = createNativeStackNavigator()

const ScreensNavigation = () => {
    return (
       <Stack.Navigator screenOptions={{headerShown : false}}>
           <Stack.Screen name="HomeScreen" component={HomeScreen} />
           <Stack.Screen name="AddressScreen" component={AddressScreen} />
       </Stack.Navigator>
    )
}

export default ScreensNavigation
