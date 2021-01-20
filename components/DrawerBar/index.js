import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainMenu from '../MainMenu';
import FreeDiscipline from '../FreeDiscipline';

const Drawer = createDrawerNavigator();

const DrawerBar = () => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="Menu" component={MainMenu} />
        <Drawer.Screen name="FreeDiscipline" component={FreeDiscipline} />
      </Drawer.Navigator>
    </>
  )
}
export default DrawerBar;