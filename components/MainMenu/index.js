import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Avatar } from 'react-native-elements';

export default (props) => {


    return (
        <View
        /* style={{
            zIndex: 100,
            position:'absolute',
            left: 0,
            top: 50,
        }} */
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
                    paddingLeft: 16,
                    fontSize: 24,
                }}
            >{props.userName}</Text>
            <View
                style={{
                    width: '100%',
                }}
            >
                <TouchableOpacity
                    style={{
                        width: '100%',
                        marginLeft: 16,
                        marginTop: 5,
                    }}
                    onPress={() => props.navigation.navigate('Application')}
                >
                    <Text
                        style={{
                            fontSize: 18,
                        }}
                    >Application</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '100%',
                        marginLeft: 16,
                        marginTop: 5,
                    }}
                    onPress={() => props.navigation.navigate('FreeDiscipline')}
                >
                    <Text
                        style={{
                            fontSize: 18,
                        }}
                    >Discipline of free choice</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '100%',
                        marginLeft: 16,
                        marginTop: 5,
                    }}
                    onPress={() => (props.navigation.navigate('FreeDiscipline'))}
                >
                    <Text
                        style={{
                            fontSize: 18,
                        }}
                    >Directory</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.closeDrawer();
                    }}
                >
                    <Text> Close </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}