import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.detailsText}>Ini adalah tampilan detail yang dapat di isi dengan berbagai hal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  detailsText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
