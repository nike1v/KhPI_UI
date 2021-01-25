import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Avatar } from 'react-native-elements';

export default (props) => {

    const [isDirectory, setIsDirectory] = useState(false);
    const SubMenu = () => {
        return (
            <View>
                <TouchableOpacity
                    style={{
                        width: '100%',
                        marginLeft: 26,
                        marginTop: 5,
                    }}
                    onPress={() => props.navigation.navigate('Map')}
                >
                    <Text
                        style={{
                            fontSize: 16,
                        }}
                    >Map</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '100%',
                        marginLeft: 26,
                        marginTop: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                        }}
                    >Additional points</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '100%',
                        marginLeft: 26,
                        marginTop: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                        }}
                    >Contacts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '100%',
                        marginLeft: 26,
                        marginTop: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                        }}
                    >Suggestions for improvement</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View {...props}>
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
                    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
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
                    {...props}
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
                    onPress={() => setIsDirectory(!isDirectory)}
                >
                    <Text
                        style={{
                            fontSize: 18,
                        }}
                    >Directory</Text>
                </TouchableOpacity>
                {isDirectory ?
                    <SubMenu /> :
                    <>
                    </>
                }
            </View>
        </View>
    )
}