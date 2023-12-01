// AppNavigator.js
// @ts-ignore
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// @ts-ignore
import  Home from './../layout/Home';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            {/* Add other screens here */}
        </Stack.Navigator>
    );
};

export default AppNavigator;


