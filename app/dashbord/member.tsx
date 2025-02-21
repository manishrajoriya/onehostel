import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Text style={styles.profileName}>Manish Saini</Text>
          <TouchableOpacity style={styles.createProfileButton}>
            <Text style={styles.buttonText}>Create another profile</Text>
          </TouchableOpacity>
          <Text style={styles.profileDescription}>Switch between profiles with one login.</Text>
        </View>

        {/* Reels Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reels</Text>
          {['Messages', 'Groups', 'Friends', 'Video', 'Marketplace', 'Pages', 'Saved', 'Memories', 'Events', 'Games', 'Ads Manager', 'Feeds'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Settings & Privacy Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings & privacy</Text>
          {['Settings', 'Facebook Pay', 'Dark mode', 'Language'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Help & Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Help & support</Text>
          {['Help', 'Account status', 'Support Inbox', 'About', 'Report a problem', 'Also from Meta', 'WhatsApp', 'Log Out'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  scrollContainer: {
    padding: 16,
  },
  profileSection: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  createProfileButton: {
    backgroundColor: '#1877f2',
    padding: 12,
    borderRadius: 6,
    marginTop: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  profileDescription: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default App;