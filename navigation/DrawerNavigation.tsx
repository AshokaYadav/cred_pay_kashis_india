import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { DrawerParamList } from '../types/navigation';
import BottomTabs from './BottomTabs';
import DrawerContent from '../components/DrawerContent';
import { DrawerParamList } from '../Types/navigation';
// import DrawerContent from '../components/DrawerContent';
// import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerContent />}
    >
      <Drawer.Screen
        name="BottomTabs"
        component={BottomTabs}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;