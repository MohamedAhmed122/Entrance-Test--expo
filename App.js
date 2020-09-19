import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import StoresScreen from './app/screens/StoresScreen'
import SearchInput from './app/component/SearchInput';
import Tabs from './app/component/Tabs';
import MapScreen from './app/screens/MapScreen';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <MapScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
