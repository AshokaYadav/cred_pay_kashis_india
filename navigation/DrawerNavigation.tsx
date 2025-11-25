// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// // import { DrawerParamList } from '../types/navigation';
// import BottomTabs from './BottomTabs';
// import DrawerContent from '../components/DrawerContent';
// import { DrawerParamList } from '../Types/navigation';
// import HelpSupportScreen from '../screens/drawerScreen/HelpSupportScreen';
// import AboutUsScreen from '../screens/drawerScreen/AboutUsScreen';
// import FaqsScreen from '../screens/drawerScreen/FaqsScreen';
// import PrivacyPolicyScreen from '../screens/drawerScreen/PrivacyPolicyScreen';
// import TermsConditionScreen from '../screens/drawerScreen/TermsConditionScreen';
// import ReturnRefundScreen from '../screens/drawerScreen/ReturnRefundScreen';
// // import DrawerContent from '../components/DrawerContent';
// // import DrawerContent from '../components/DrawerContent';

// const Drawer = createDrawerNavigator<DrawerParamList>();

// const DrawerNavigation: React.FC = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerPosition: "right",
//         headerShown: false,
//       }}
//       drawerContent={(props) => <DrawerContent {...props}/>}
//     >
//       <Drawer.Screen
//         name="BottomTabs"
//         component={BottomTabs}
//       />
//       <Drawer.Screen name="AboutUs" component={AboutUsScreen} />

//       <Drawer.Screen name="FaqsScreen" component={FaqsScreen} />

//       <Drawer.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />

//       <Drawer.Screen name="TermsConditionScreen" component={TermsConditionScreen} />

//       <Drawer.Screen name="HelpSupport" component={HelpSupportScreen} />
//       <Drawer.Screen name="ReturnRefundScreen" component={ReturnRefundScreen} />
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigation;



import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import DrawerContent from '../components/DrawerContent';
import HelpSupportScreen from '../screens/drawerScreen/HelpSupportScreen';
import AboutUsScreen from '../screens/drawerScreen/AboutUsScreen';
import FaqsScreen from '../screens/drawerScreen/FaqsScreen';
import PrivacyPolicyScreen from '../screens/drawerScreen/PrivacyPolicyScreen';
import TermsConditionScreen from '../screens/drawerScreen/TermsConditionScreen';
import ReturnRefundScreen from '../screens/drawerScreen/ReturnRefundScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* 🔝 Custom Green Bar */}
      <View
        style={{
          height: 26,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      </View>

      {/* 📦 Drawer Screens under the green bar */}
      <View style={{ flex: 1 }}>
        <Drawer.Navigator
          screenOptions={{
            drawerPosition: 'right',
            headerShown: false,
          }}
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="BottomTabs" component={BottomTabs} />
          <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
          <Drawer.Screen name="FaqsScreen" component={FaqsScreen} />
          <Drawer.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
          <Drawer.Screen name="TermsConditionScreen" component={TermsConditionScreen} />
          <Drawer.Screen name="HelpSupport" component={HelpSupportScreen} />
          <Drawer.Screen name="ReturnRefundScreen" component={ReturnRefundScreen} />
        </Drawer.Navigator>
      </View>
    </View>
  );
};

export default DrawerNavigation;
