/* eslint-disable no-unused-vars */
// import a library to help create a component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// Create a component 
const App = () => (
    <View style={{ flex: 1 }}>
         <Header headerText={'Albums'} />
         <AlbumList />
     </View>
 );
// render it to the device 
AppRegistry.registerComponent('RNAPP', () => App);

