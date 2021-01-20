import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Avatar } from 'react-native-elements';
import DrawerBar from '../DrawerBar';

export default (props) => {


    return (
        <View
            style={{
                zIndex: 100,
                position:'absolute',
                left: 0,
                top: 50,
            }}
        >
            <Avatar
                rounded
                size={110}
                source={{
                    uri:
                        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                }}
                containerStyle={{
                    marginTop: 30,
                    marginLeft: 20,
                    marginBottom: 20,
                }}
            />
            <Text
                style={{
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                }}
            >{props.userName}</Text>
        </View>
    )
}