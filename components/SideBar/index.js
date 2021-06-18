import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text, } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import News from '../News';
import Schedule from '../Schedule';
import StudentBook from '../StudentBook';
import Profile from '../Profile';
import Notifications from '../Notifications';
import Application from '../Application';
import FreeDiscipline from '../FreeDiscipline/index.js';
import Map from '../Map';
import { v4 } from 'uuid';
import DetailDvv from '../FreeDiscipline/detail.js';
import ApplicationDetail from '../Application/detail';
import NewsDetail from '../News/detailNews';

/* import HomeIcon from '../assets/home.svg';
import ScheduleIcon from '../assets/schedule.svg';
import ScheduleChekedIcon from '../assets/scheduleCheked.svg';
import NotificationIcon from '../assets/notification.svg';
import NotificationCheckedIcon from '../assets/notificationChecked.svg';
import StudentBookIcon from '../assets/studentBook.svg';
import StudentBookCheckedIcon from '../assets/studentBookChecked.svg';
import ProfileIcon from '../assets/profile.svg';
import ProfileCheckedIcon from '../assets/profileChecked.svg'; */
const Tab = createBottomTabNavigator();

const SideBar = () => {
    const CustomBar = ({ state, descriptors, navigation }) => {
        const focusedOptions = descriptors[state.routes[state.index].key].options;

        if (focusedOptions.tabBarVisible === false) {
            return null;
        }

        return (
            <View style={{ flexDirection: 'row' }}>
                {state.routes.slice(0, 5).map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const home = require('../assets/home.png');
                    const schedule = require('../assets/schedule.png');
                    const scheduleChecked = require('../assets/scheduleCheked.png');
                    const notification = require('../assets/notification.png');
                    const notificationChecked = require('../assets/notificationChecked.png');
                    const studentBook = require('../assets/studentBook.png');
                    const studentBookChecked = require('../assets/studentBookChecked.png');
                    const profile = require('../assets/profile.png');
                    const profileChecked = require('../assets/profileChecked.png');

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            onPress={onPress}
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                padding: 10,
                                borderTopWidth: 1,
                                borderTopColor: 'rgba(159,159,159,1)',
                            }}
                            key={v4()}
                        >
                            {index == 0 ?
                                <Image source={home} /> :
                                <></>}
                            {index == 1 ?
                                isFocused ?
                                    <Image source={scheduleChecked} /> :
                                    <Image source={schedule} /> : <></>}
                            {index == 2 ?
                                isFocused ?
                                    <Image source={notificationChecked} /> :
                                    <Image source={notification} /> : <></>}
                            {index == 3 ?
                                isFocused ?
                                    <Image source={studentBookChecked} /> :
                                    <Image source={studentBook} /> : <></>}
                            {index == 4 ?
                                isFocused ?
                                    <Image source={profileChecked} /> :
                                    <Image source={profile} /> : <></>}
                            
                            {/* {index == 0 ?
                                <HomeIcon width={28} height={28} /> :
                                <></>}
                            {index == 1 ?
                                isFocused ?
                                    <ScheduleChekedIcon width={28} height={28} /> :
                                    <ScheduleIcon width={28} height={28} /> : <></>}
                            {index == 2 ?
                                isFocused ?
                                    <NotificationCheckedIcon width={28} height={28} /> :
                                    <NotificationIcon width={28} height={28} /> : <></>}
                            {index == 3 ?
                                isFocused ?
                                    <StudentBookCheckedIcon width={28} height={28} /> :
                                    <StudentBookIcon width={28} height={28} /> : <></>}
                            {index == 4 ?
                                isFocused ?
                                    <ProfileCheckedIcon width={28} height={28} /> :
                                    <ProfileIcon width={28} height={28} /> : <></>} */}

                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    return (
        <Tab.Navigator
            initialRouteName="News"
            tabBar={props => <CustomBar {...props} />}
        >
            <Tab.Screen
                name="News"
                children={() => <News />}
            />
            <Tab.Screen
                name="Schedule"
                children={() => <Schedule />}
            />
            <Tab.Screen
                name="Notifications"
                children={() => <Notifications />}
            />
            <Tab.Screen
                name="StudentBook"
                children={() => <StudentBook />}
            />
            <Tab.Screen
                name="Profile"
                children={() => <Profile />}
            />
            <Tab.Screen
                name="Application"
                children={() => <Application />}
            />
            <Tab.Screen
                name="FreeDiscipline"
                children={() => <FreeDiscipline />}
            />
            <Tab.Screen
                name="Map"
                children={() => <Map />}
            />
            <Tab.Screen
                name="DetailDvv"
                children={() => <DetailDvv />}
            />
            <Tab.Screen
                name="ApplicationDetail"
                children={() => <ApplicationDetail />}
            />
            <Tab.Screen
                name="NewsDetail"
                children={() => <NewsDetail />}
            />
        </Tab.Navigator>
    )
}

export default SideBar;