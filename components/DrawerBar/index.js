import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainMenu from '../MainMenu';
import SideBar from '../SideBar';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerBar = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <MainMenu {...props} userName="Mykyta Vlasov" />}>
        <Drawer.Screen name="Home" component={SideBar} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default DrawerBar;