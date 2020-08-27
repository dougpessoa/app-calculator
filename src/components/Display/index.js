import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

const Display = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: "flex-end",
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },

  displayValue: {
    fontSize: 60,
    color: '#fff',
  }
});

export default Display;