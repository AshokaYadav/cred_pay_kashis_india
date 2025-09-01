export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Add: undefined;
  Notifications: undefined;
  Menu: undefined;
};

export type DrawerParamList = {
  BottomTabs: undefined;
};

export type DrawerItemProps = {
  icon: string;
  label: string;
  onPress?: () => void;
  hasChevron?: boolean;
};