import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppRouter from 'src/navigation/root-switch';
import store from 'src/utils/store'

class App extends Component {
  componentDidMount() {
    
  }

  componentWillUnmount() {
  }
  render() {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Provider store={store}>
              <AppRouter />
          </Provider>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}

export default App;
