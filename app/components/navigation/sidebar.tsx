import React from 'react';
import {
  Modal,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

const {width} = Dimensions.get('window');

const Sidebar = ({visible, onClose}: SidebarProps) => {
  const handleOptionPress = (option: string) => {
    console.log(`${option} selected`);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.overlay}>

        {/* Background */}
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backgroundArea} />
        </TouchableWithoutFeedback>

        {/* Sidebar */}
        <View style={styles.sidebar}>

          {/* User Header */}
          <View style={styles.header}>
            <View style={styles.profileCircle}>
              <Text style={styles.profileIcon}>👤</Text>
            </View>

            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Default User</Text>
              <Text style={styles.profileSubtitle}>
                NETRA Citizen
              </Text>
            </View>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
              activeOpacity={0.7}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {/* Main Menu */}
          <View style={styles.menu}>

            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.7}
              onPress={() => handleOptionPress('Profile')}>
              <Text style={styles.menuText}>Profile</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.7}
              onPress={() => handleOptionPress('My Activity')}>
              <Text style={styles.menuText}>My Activity</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.7}
              onPress={() => handleOptionPress('Saved Projects')}>
              <Text style={styles.menuText}>Saved Projects</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.7}
              onPress={() => handleOptionPress('Notifications')}>
              <Text style={styles.menuText}>Notifications</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.7}
              onPress={() => handleOptionPress('Settings')}>
              <Text style={styles.menuText}>Settings</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.7}
              onPress={() => handleOptionPress('Help & Support')}>
              <Text style={styles.menuText}>Help & Support</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.7}
              onPress={() => handleOptionPress('About NETRA')}>
              <Text style={styles.menuText}>About NETRA</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

          </View>

          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            <View style={styles.divider} />

            <TouchableOpacity
              style={styles.logoutButton}
              activeOpacity={0.7}
              onPress={() => handleOptionPress('Logout')}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>

            <Text style={styles.version}>
              NETRA Prototype • v1.0
            </Text>
          </View>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },

  backgroundArea: {
    flex: 1,
  },

  sidebar: {
    width: width * 0.82,
    maxWidth: 360,
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 45,
    paddingHorizontal: 22,

    elevation: 12,

    shadowColor: '#000000',
    shadowOffset: {
      width: -4,
      height: 0,
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },

  /* User Header */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  profileCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#F1EAFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileIcon: {
    fontSize: 24,
    color: '#7C3AED',
  },

  profileInfo: {
    flex: 1,
    marginLeft: 14,
  },

  profileName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111111',
  },

  profileSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },

  closeButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeText: {
    fontSize: 27,
    fontWeight: '300',
    color: '#6B7280',
    lineHeight: 30,
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
  },

  /* Menu */

  menu: {
    marginTop: 18,
  },

  menuItem: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    paddingHorizontal: 10,
    marginBottom: 3,
  },

  menuText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },

  arrow: {
    fontSize: 25,
    fontWeight: '300',
    color: '#9CA3AF',
  },

  /* Bottom */

  bottomSection: {
    marginTop: 'auto',
  },

  logoutButton: {
    height: 58,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 12,
  },

  logoutText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#DC2626',
  },

  version: {
    textAlign: 'center',
    fontSize: 10,
    color: '#9CA3AF',
    marginTop: 12,
    marginBottom: 10,
  },
});

export default Sidebar;