import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import DrawerBar from '../DrawerBar';
import Header from '../Header';

export default () => {
    return (
        <>
            {/* <DrawerBar /> */}
            <Header
                pageName="Profile"
            />
            <View>
                <Text>Hello Profile!</Text>
            </View>
        </>
    )
}