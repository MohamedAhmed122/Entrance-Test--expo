import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import StoresScreen from './app/screens/StoresScreen'
import SearchInput from './app/component/SearchInput';
import Tabs from './app/component/Tabs';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <StoresScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    backgroundColor: '#fff',

  },
});
