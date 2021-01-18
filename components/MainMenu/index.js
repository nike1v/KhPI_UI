import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Avatar } from 'react-native-elements';

export default (props) => {


    return (
        <>
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
            <Text>{props.userName}</Text>
        </>
    )
}