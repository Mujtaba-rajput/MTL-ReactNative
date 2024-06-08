import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/lib/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
