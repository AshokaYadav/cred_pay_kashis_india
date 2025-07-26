// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import BottomTabs from './navigation/BottomTabs';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <BottomTabs />
//     </NavigationContainer>
//   );
// };

// export default App;



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator ';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}





















// // App.js
// import React from 'react';
// import { View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return null; // replace with your component
// }

// function QRScreen() {
//   return null; // replace with your component
// }

// function TransactionsScreen() {
//   return null;
// }

// function ProfileScreen() {
//   return null;
// }

// function NotificationScreen() {
//   return null;
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ color, focused }) => {
//             // let iconName;
//             let iconName: string = 'home'; // 👈 Default value set kari


//             if (route.name === 'Home') {
//               iconName = 'home';
//             } else if (route.name === 'QR') {
//               iconName = 'qr-code-scanner';
//             } else if (route.name === 'Transactions') {
//               iconName = 'receipt';
//             } else if (route.name === 'Profile') {
//               iconName = 'person';
//             } else if (route.name === 'Notifications') {
//               iconName = 'notifications-none';
//             }

//             // ✅ Custom style for QR tab icon
//             if (route.name === 'QR') {
//               return (
//                 <View
//                   style={{
//                     width: 50,
//                     height: 50,
//                     borderRadius: 30,
//                     backgroundColor: 'green',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     // marginBottom: 20, // optional: to make it look floated
//                   }}
//                 >
//                   <Icon name={iconName} size={30} color="#fff" />
//                 </View>
//               );
//             }

//             // 🟡 Default icon
//             return <Icon name={iconName} size={24} color={color} />;
//           },
//           tabBarStyle: {
//             height: 90,          // 👈 Custom height
//             paddingBottom: 10,   // 👈 Optional padding
//             paddingTop: 10,
//           },
//           tabBarActiveTintColor: 'green',
//           tabBarInactiveTintColor: 'gray',
//           tabBarShowLabel: false,
//           headerShown: true, // 👈 Hide header
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Transactions" component={TransactionsScreen} />
//         <Tab.Screen name="QR" component={QRScreen} />
//         <Tab.Screen name="Notifications" component={NotificationScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
