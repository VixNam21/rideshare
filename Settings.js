import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.menuIcon}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={32} color="#4ECB71" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text>Settings Content</Text>
      </View>
    </View>
  );
};

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#E7FFE7',
  },
  menuIcon: {
    paddingTop: 30,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  content: {
    marginTop: 20,
  },
});

export default Settings;
