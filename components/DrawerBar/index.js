import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainMenu from '../MainMenu';
import FreeDiscipline from '../FreeDiscipline';
import SideBar from '../SideBar';
import { NavigationContainer } from '@react-navigation/native';
import Application from '../Application';
import StackNav from '../StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerBar = (props) => {

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <MainMenu {...props} userName="Mykyta Vlasov" />}>
        <Drawer.Screen name="Home" component={SideBar} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default DrawerBar;