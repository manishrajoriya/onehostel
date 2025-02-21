import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // For icons

import { Text, View, StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: '#1877f2', // Active item color
          drawerInactiveTintColor: '#333', // Inactive item color
          drawerStyle: {
            backgroundColor: '#fff', // Drawer background
          },
          headerStyle: {
            backgroundColor: '#fff', // Header background
          },
          headerTintColor: '#000', // Header text color
        }}
      >
        {/* Home Screen */}
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Overview',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        {/* Member Screen */}
        <Drawer.Screen
          name="member"
          options={{
            drawerLabel: 'Member',
            title: 'Member Overview',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="people" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}



const styles = StyleSheet.create({
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});