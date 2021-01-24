import React from 'react';
import { Image, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import News from '../News';
import Schedule from '../Schedule';
import StudentBook from '../StudentBook';
import Profile from '../Profile';
import Notifications from '../Notifications';
import Application from '../Application';
import FreeDiscipline from '../FreeDiscipline';
const Tab = createBottomTabNavigator();

const SideBar = () => {
    return (

        <Tab.Navigator
            lazy={true}
            initialRouteName="News"
            tabBarOptions={{
                showLabel:false,
            }}
            barStyle={{ backgroundColor: '#ffffff' }}
        >
            <Tab.Screen
                name="News"
                children={() => <News />}
                options={{
                    tabBarLabel: 'News',
                    tabBarIcon: ({ focused }) => {
                        const image = focused
                            ? require('../assets/home.png')
                            : require('../assets/home.png');
                        return (
                            <Image
                                source={image}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="Schedule"
                children={() => <Schedule />}
                options={{
                    tabBarLabel: 'Schedule',
                    tabBarIcon: ({ focused }) => {
                        const image = focused
                            ? require('../assets/scheduleCheked.png')
                            : require('../assets/schedule.png');
                        return (
                            <Image
                                source={image}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="Notifications"
                children={() => <Notifications />}
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ focused }) => {
                        const image = focused
                            ? require('../assets/notificationChecked.png')
                            : require('../assets/notification.png');
                        return (
                            <Image
                                source={image}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="StudentBook"
                children={() => <StudentBook />}
                options={{
                    tabBarLabel: 'StudentBook',
                    tabBarIcon: ({ focused }) => {
                        const image = focused
                            ? require('../assets/studentBookChecked.png')
                            : require('../assets/studentBook.png');
                        return (
                            <Image
                                source={image}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                children={() => <Profile />}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused }) => {
                        const image = focused
                            ? require('../assets/profileChecked.png')
                            : require('../assets/profile.png');
                        return (
                            <Image
                                source={image}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="Application"
                children={() => <Application />}
                tabBarVisible = {false}
                
            />
            <Tab.Screen
                name="FreeDiscipline"
                children={() => <FreeDiscipline />}
                tabBarOptions={{
                    style:{
                        position: 'fixed'
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default SideBar;