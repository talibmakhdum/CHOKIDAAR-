import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Heading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Government Projects</Text>

      <Text style={styles.subtitle}>
        Explore government projects
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 0,
    paddingBottom: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111111',
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#6B7280',
  },
});

export default Heading;