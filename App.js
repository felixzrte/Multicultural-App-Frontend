import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Events from './Screen/Events';

const stackNavigator = createStackNavigator({
    Events: Events
});

const App = createAppContainer(stackNavigator);

export default App;
