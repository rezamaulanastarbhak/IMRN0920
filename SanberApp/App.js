import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import YoutubeUI from './Tugas/Tugas12/App'
// import AboutScreen from './Tugas/Tugas13/AboutMe';
// import LoginScreen from './Tugas/Tugas13/LoginScreen';
// import Register from './Tugas/Tugas13/Register';
import Main from './Tugas/Tugas14/Main';

export default function App() {
  return (
    
    <Main/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
