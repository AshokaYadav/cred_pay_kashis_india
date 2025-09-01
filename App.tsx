import './global.css'; // 👈 yeh import zaruri hai
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator ';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { navigationRef, setNavigationRef } from './services/NavigationService';

export default function App() {
  return (
    
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer
      ref={navigationRef}
  onReady={() => {
    setNavigationRef(navigationRef);
  }}
      >
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
