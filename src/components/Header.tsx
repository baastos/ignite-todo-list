import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

interface HeaderProps {
  onPress: () => void;
  isNightTheme: boolean;
}
export function Header({ onPress, isNightTheme }: HeaderProps) {

  return (
    <View style={isNightTheme ? styles.headerNightTheme : styles.headerLightTheme}>
      <View style={styles.logo}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name={isNightTheme ? 'moon' : 'sun'} color={isNightTheme ? '#565BFF' : 'yellow'} size={22} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerLightTheme: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: "auto",
    width: "100%",
    paddingHorizontal: 40
  },
  headerNightTheme: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#191932',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: "100%",
    paddingHorizontal: 40
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  button: {
    marginLeft: "auto"
  }

});
