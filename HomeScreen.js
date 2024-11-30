import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';  // Import for insets
import { LinearGradient } from 'expo-linear-gradient'; 
import { SafeAreaView } from 'react-native-safe-area-context';


const COLORS = {
  primary: 'white',        
  textPlaceholder: '#8B8B8B',
  borderColor: 'white',    
  white: '#F9F9F9',        
  quickBookBackground: '#00CED1',  
  rideWithFriendsBackground: '#FF6B6B',
  background: '#121212',     
  black: 'black',          
};

const recentRides = [
  { name: 'Central Park', address: '123 Elm Street, NY' },
  { name: 'Times Square', address: '456 Oak Avenue, NY' },
  { name: 'Brooklyn Bridge', address: '789 Pine Drive, NY' },
  { name: 'Statue of Liberty', address: '101 Maple Lane, NY' },
  { name: 'Empire State', address: '202 Birch Boulevard, NY' },
];

const SPACING = {
  small: 5,
  medium: 10,
  large: 20,
  extraLarge: 30,
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();  // Use safe area insets

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={[styles.container]}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.openDrawer()}
            accessibilityLabel="Open menu"
          >
            <Ionicons name="menu-outline" size={32} color={'#D9A1FF'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textInputContainer}
            onPress={() => navigation.navigate('Destination')}
            accessibilityLabel="Where to?"
          >
            <Text style={styles.textInputPlaceholder}>Where to?</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Book Section with Gradient and Raised Effect */}
        <LinearGradient
          colors={['#7FDBFF', '#D9A1FF']} // Gradient from aqua to purple
          style={styles.quickBookContainer}
        >
          <View style={styles.quickBookHeader}>
            <Text style={styles.quickBookHeaderText}>Quick Book</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.quickRideOptions}
            >
              <QuickBookOption icon="home-outline" label="Home" />
              <QuickBookOption icon="briefcase-outline" label="Work" />
              <QuickBookOption icon="add-circle-outline" />
            </ScrollView>
          </View>
        </LinearGradient>

        {/* Ride with Friends Section with Gradient and Raised Effect */}
        <LinearGradient
          colors={['#FFB6C1', '#D9A1FF']} // Gradient from pink to purple
          style={styles.rideWithFriendsContainer}
        >
          <Text style={styles.rideWithFriendsHeader}>Ride with Friends</Text>
          <Text style={styles.rideWithFriendsDescription}>
            Invite your friends to join the ride by creating or joining a code.
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Create Code')}>
              <Text style={styles.buttonText}>Create Code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Join Code')}>
              <Text style={styles.buttonText}>Join Code</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Recent Rides Section with Gradient and Raised Effect */}
        <LinearGradient
          colors={['#B0E0E6', '#D9A1FF']}
          style={styles.recentRidesContainer}
        >
          <Text style={styles.recentRidesHeader}>Recent Rides</Text>
          {recentRides.map((ride, index) => (
            <View key={index} style={styles.rideCard}>
              <Ionicons name="time-outline" size={20} color={COLORS.black} />
              <View style={styles.rideDetails}>
                <Text style={styles.rideName}>{ride.name}</Text>
                <Text style={styles.rideAddress}>{ride.address}</Text>
              </View>
            </View>
          ))}
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};
// QuickBookOption Component
const QuickBookOption = ({ icon, label }) => (
  <TouchableOpacity 
    style={styles.bookOption} 
    accessibilityLabel={label ? `Book ${label}` : 'Add new destination'}
  >
    <Ionicons name={icon} size={25} color={COLORS.black} />
    {label && <Text style={styles.bookOptionText}>{label}</Text>}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.large,
    marginLeft: SPACING.medium,
    paddingLeft: 10,
  },
  textInputContainer: {
    flex: 1,
    height: 50,
    borderColor: '#D9A1FF',
    borderWidth: 2,  
    borderRadius: 18,
    justifyContent: 'center',
    paddingHorizontal: SPACING.large,
    marginRight: SPACING.large * 3,
    marginLeft: SPACING.large,
    backgroundColor: COLORS.background,
    shadowColor: '#D9A1FF',  
    shadowOpacity: 0.7,  // Adjusted opacity for more visible shadow
    shadowRadius: 12,  // Radius for uniform shadow
    elevation: 12,  // Elevation for Android (for uniform shadow effect)
  },
  textInputPlaceholder: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },

  // Quick Book Section with Gradient and Raised Effect
  quickBookContainer: {
    borderRadius: SPACING.large,
    marginTop: SPACING.extraLarge * 1.5,
    marginHorizontal: SPACING.medium,
    padding: SPACING.medium,
    shadowColor: '#fff',  // White shadow color
    shadowOpacity: 0.7,  // Adjusted opacity for more visible shadow
    shadowRadius: 1,  // Uniform shadow radius
    elevation: 16,  // Elevation for Android (for uniform shadow effect)
  
  },
  quickBookHeader: {
    marginBottom: SPACING.small,
    paddingHorizontal: SPACING.medium,
    shadowColor: '#fff',  // White shadow color
    shadowOpacity: 1,  // Adjusted opacity for more visible shadow
    shadowRadius: 12,  // Uniform shadow radius
    elevation: 16,  // Elevation for Android (for uniform shadow effect)
    
  },
  quickBookHeaderText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
    paddingBottom: SPACING.small,
    paddingTop: SPACING.medium,
  },
  quickRideOptions: {
    flexDirection: 'row',
    paddingBottom: SPACING.large,
    paddingTop: SPACING.large, 
  },
  bookOption: {
    alignItems: 'center',
    marginRight: 30,
    padding: SPACING.medium,
  },
  bookOptionText: {
    marginTop: SPACING.small,
    color: COLORS.black,
    fontWeight: '600',
    fontSize: 8,
  },

  // Ride with Friends Section with Gradient and Raised Effect
  rideWithFriendsContainer: {
    borderRadius: SPACING.large,
    padding: SPACING.medium,
    marginHorizontal: SPACING.medium,
    marginTop: SPACING.large,
    shadowColor: '#fff',  // White shadow color
    shadowOpacity: 0.7,  // Adjusted opacity for more visible shadow
    shadowRadius: 12,  // Uniform shadow radius
    elevation: 16,  // Elevation for Android (for uniform shadow effect)
  },
  rideWithFriendsHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    marginBottom: SPACING.small,
    marginTop: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  rideWithFriendsDescription: {
    fontSize: 14,
    color: 'black',
    marginBottom: SPACING.medium,
    marginTop: SPACING.small,
    paddingHorizontal: SPACING.medium,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: SPACING.medium,
    paddingBottom: SPACING.large,
  },
  button: {
    flex: 0.5,
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.medium,
    marginHorizontal: SPACING.small,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#fff',  // White shadow color
    shadowOpacity: 0.7,  // Adjusted opacity for more visible shadow
    shadowRadius: 10,  // Uniform shadow radius
    elevation: 12,  // Elevation for Android (for uniform shadow effect)
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.background,
    fontWeight: '600',
  },
  recentRidesContainer: {
    borderRadius: SPACING.large,
    marginTop: SPACING.large,
    marginHorizontal: SPACING.medium,
    padding: SPACING.medium,
    paddingBottom: SPACING.large,
  },
  recentRidesHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginBottom: SPACING.medium,
    marginTop: SPACING.small,
    paddingHorizontal: SPACING.medium,
  },
  rideCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    borderWidth: 0,
    borderColor: COLORS.borderGray,
    padding: SPACING.medium,
    marginBottom: 3,
    shadowColor: '#fff',  // White shadow color
    shadowOpacity: 0.7,  // Adjusted opacity for more visible shadow
    shadowRadius: 5,  // Uniform shadow radius
    elevation: 12, 
  },
  rideDetails: {
    marginLeft: SPACING.medium,
  },
  rideName: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
  },
  rideAddress: {
    fontSize: 12,
    color: COLORS.secondaryText,
  },
});

export default HomeScreen;
