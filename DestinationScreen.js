import React, { useEffect, useRef } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const COLORS = {
  background: 'white',
  topSectionBackground: '#121212',
  textPlaceholder: 'white',
};

const SPACING = {
  small: 5,
  medium: 10,
  large: 20,
};

const DestinationScreen = () => {
  const navigation = useNavigation();
  const secondInputRef = useRef(null);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      keyboardDidShowListener.remove();
    });

    const timer = setTimeout(() => {
      secondInputRef.current.focus();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.topSection, { paddingTop: insets.top }]}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color={'#D9A1FF'} />
        </TouchableOpacity>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <View style={styles.iconSquare} />
            <TextInput
              style={styles.textInput}
              placeholder="Current Location"
              placeholderTextColor={COLORS.textPlaceholder}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={[styles.iconSquare, { borderColor: '#FF6B6B' }]} />
            <TextInput
              ref={secondInputRef}
              style={styles.textInput}
              placeholder="Destination"
              placeholderTextColor={COLORS.textPlaceholder}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  topSection: {
    backgroundColor: COLORS.topSectionBackground,
    paddingBottom: SPACING.large,
    borderBottomLeftRadius: SPACING.large,
    borderBottomRightRadius: SPACING.large,
  },
  backIcon: {
    marginTop: SPACING.large,
    marginLeft: SPACING.medium,
  },
  content: {
    marginTop: SPACING.large,
    marginLeft: SPACING.large,
    marginRight: SPACING.large * 1.25,
    marginBottom: SPACING.large,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.large,
  },
  iconSquare: {
    width: 15,
    height: 15,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#00CED1',
    marginRight: SPACING.large,
  },
  textInput: {
    flex: 1,
    height: 50,
    borderColor: '#D9A1FF',
    borderWidth: 2,
    borderRadius: 18,
    paddingHorizontal: SPACING.large,
    fontWeight: '600',
    fontSize: 18,
    backgroundColor: 'black',
    color: 'white',
    shadowColor: '#D9A1FF',  
    shadowOpacity: 0.7,  // Adjusted opacity for more visible shadow
    shadowRadius: 5,  // Radius for uniform shadow
    elevation: 12,  // Elevation for Android (for uniform shadow effect)

  },
});

export default DestinationScreen;
