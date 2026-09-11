import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  House,
  FolderKanban,
  Star,
  PlusCircle,
} from 'lucide-react-native';

const BottomNavbar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  const labels: Record<string, string> = {
    Home: 'Home',
    Projects: 'Projects',
    Ratings: 'Ratings',
    Suggestion: 'Suggest',
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Math.max(insets.bottom, 8),
        },
      ]}
    >
      <View style={styles.navbar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          let Icon;

          if (route.name === 'Home') {
            Icon = House;
          } else if (route.name === 'Projects') {
            Icon = FolderKanban;
          } else if (route.name === 'Ratings') {
            Icon = Star;
          } else if (route.name === 'Suggestion') {
            Icon = PlusCircle;
          } else {
            Icon = PlusCircle;
          }

          const label =
            labels[route.name] ||
            options.title ||
            route.name;

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={
                isFocused
                  ? {selected: true}
                  : {}
              }
              accessibilityLabel={
                options.tabBarAccessibilityLabel
              }
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              activeOpacity={0.8}
              style={styles.tab}
            >
              <View
                style={[
                  styles.iconContainer,
                  isFocused &&
                    styles.activeIconContainer,
                ]}
              >
                <Icon
                  size={22}
                  strokeWidth={
                    isFocused ? 2.5 : 2
                  }
                  color={
                    isFocused
                      ? '#7C3AED'
                      : '#9CA3AF'
                  }
                />
              </View>

              <Text
                style={[
                  styles.label,
                  isFocused &&
                    styles.activeLabel,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },

  navbar: {
    height: 62,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    width: 40,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeIconContainer: {
    backgroundColor: '#F1EAFF',
  },

  label: {
    marginTop: 3,
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '500',
  },

  activeLabel: {
    color: '#7C3AED',
    fontWeight: '700',
  },
});

export default BottomNavbar;