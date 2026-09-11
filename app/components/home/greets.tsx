import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {MapPin} from 'lucide-react-native';

interface GreetsProps {
  name?: string;
}

const Greets = ({name = 'Citizen'}: GreetsProps) => {
  return (
    <View style={styles.container}>

      {/* Greeting */}
      <View style={styles.greetingRow}>
        <Text style={styles.greeting}>
          Hello, {name} 👋
        </Text>
      </View>

      {/* Subtitle */}
      <View style={styles.subtitleRow}>
        <MapPin
          size={20}
          color="#5654D9"
          strokeWidth={2.4}
        />

        <Text style={styles.subtitle}>
          See what's happening around you
        </Text>
      </View>

    </View>
  );
};

export default Greets;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
  },

  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 22,
    fontWeight: '800',
    color: '#11182D',
    letterSpacing: -0.3,
  },

  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7180',
    marginLeft: 5,
  },
});