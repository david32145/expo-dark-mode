import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';

import MainApplication from './src';

const MainApp: React.FC = () => {
  return (
    <AppearanceProvider>
      <MainApplication />
    </AppearanceProvider>
  );
};

export default MainApp;
