import React from 'react';
import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RideHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.menuIcon}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={32} color="#4ECB71" fontWeight = 'bold'/>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text>Ride History Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor : '#E7FFE7',
  },
  menuIcon: {
    marginTop: 30,
    marginLeft : 15,
  },
  content: {
    marginTop: 20,
  },
});

export default RideHistory;
