import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const NavigationService = {
  navigate: (name: string, params?: any) => {
    if (navigationRef.isReady()) {
      // ✅ Fix: Use type assertion to 'any' instead of 'never'
      (navigationRef.navigate as any)(name, params);
    }
  },
  goBack: () => {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  },
};

// For backward compatibility - you might not need this anymore
export const setNavigationRef = (ref: any) => {
  // This function can be empty since we're using createNavigationContainerRef
};