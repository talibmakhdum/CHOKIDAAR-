import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Sidebar from './sidebar';

const TopNavbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>

        {/* NETRA NAME */}
        <View style={styles.brandContainer}>
          <Text style={styles.title}>NETRA</Text>
        </View>

        {/* THREE DOT MENU */}
        <TouchableOpacity
          style={styles.menuButton}
          activeOpacity={0.7}
          onPress={() => setSidebarVisible(true)}
        >
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </TouchableOpacity>

      </View>

      {/* SIDEBAR */}
      <Sidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },

  brandContainer: {
    justifyContent: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#111111',
    letterSpacing: 3,
  },

  menuButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#374151',
  },
});

export default TopNavbar;