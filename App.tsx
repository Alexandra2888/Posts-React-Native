import AppNavigator from './navigator';
import {SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';

import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
    </Provider>
  );
};

export default App;

