  import React from 'react';
  import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
  import {View} from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';

  import HomeScreen from '../screens/HomeScreen';
  import QRScreen from '../screens/QRScreen';
  import TransactionsScreen from '../screens/TransactionsScreen';
  import ProfileScreen from '../screens/ProfileScreen';
  import NotificationScreen from '../screens/NotificationScreen';
  import {DrawerNavigationProp} from '@react-navigation/drawer';

  export type TabParamList = {
    Home: undefined;
    QR: undefined;
    Transactions: undefined;
    Profile: undefined;
    Notifications: undefined;
    Menu: undefined;
  };

  const Tab = createBottomTabNavigator<TabParamList>();

  type BottomTabsProps = {
    navigation: DrawerNavigationProp<any>;
  };

  const BottomTabs: React.FC<BottomTabsProps> = ({navigation}) => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let iconName: string = 'home';

            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'QR') iconName = 'qr-code-scanner';
            else if (route.name === 'Transactions') iconName = 'receipt';
            else if (route.name === 'Profile') iconName = 'person';
            else if (route.name === 'Notifications')
              iconName = 'notifications-none';

            if (route.name === 'QR') {
              return (
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    backgroundColor: 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name={iconName} size={30} color="#fff" />
                </View>
              );
            }

            return <Icon name={iconName} size={24} color={color} />;
          },
          tabBarStyle: {
            height: 90,
            paddingBottom: 10,
            paddingTop: 10,
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Transactions" component={TransactionsScreen} />
        <Tab.Screen name="QR" component={QRScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
        <Tab.Screen
          name="Menu"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="menu" color={color} size={size} />
            ),
          }}
          listeners={{
            tabPress: e => {
              e.preventDefault();
              navigation.openDrawer();
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  export default BottomTabs;
