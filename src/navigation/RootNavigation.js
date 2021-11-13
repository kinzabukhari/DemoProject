import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import ScreensNavigation from './ScreensNavigation'

const RootNavigation = () => {
    return (
    <NavigationContainer>
        <ScreensNavigation />
    </NavigationContainer>
    )
}

export default RootNavigation
