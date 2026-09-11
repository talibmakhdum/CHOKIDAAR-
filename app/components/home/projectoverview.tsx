import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  FolderOpen,
  PlayCircle,
  AlertTriangle,
  CircleAlert,
} from 'lucide-react-native';

const ProjectOverview = () => {
  const categories = [
    {
      title: 'Total Projects',
      value: '124',
      icon: FolderOpen,
      backgroundColor: '#FFF8E1',
      iconBackground: '#FFEFC2',
      iconColor: '#D99A00',
    },
    {
      title: 'Ongoing',
      value: '82',
      icon: PlayCircle,
      backgroundColor: '#ECFDF3',
      iconBackground: '#D1FAE5',
      iconColor: '#16A34A',
    },
    {
      title: 'At Risk',
      value: '12',
      icon: AlertTriangle,
      backgroundColor: '#FEF2F2',
      iconBackground: '#FEE2E2',
      iconColor: '#DC2626',
    },
    {
      title: 'Important',
      value: '18',
      icon: CircleAlert,
      backgroundColor: '#EFF6FF',
      iconBackground: '#DBEAFE',
      iconColor: '#2563EB',
    },
  ];

  return (
    <View style={styles.container}>

      {/* Section Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Project Overview
        </Text>

        <Text style={styles.subtitle}>
          Government projects in your area
        </Text>
      </View>

      {/* Category Cards */}
      <View style={styles.grid}>
        {categories.map(item => {
          const Icon = item.icon;

          return (
            <TouchableOpacity
              key={item.title}
              activeOpacity={0.8}
              style={[
                styles.card,
                {
                  backgroundColor:
                    item.backgroundColor,
                },
              ]}>

              {/* Icon */}
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor:
                      item.iconBackground,
                  },
                ]}>

                <Icon
                  size={21}
                  strokeWidth={2.2}
                  color={item.iconColor}
                />

              </View>

              {/* Information */}
              <View style={styles.info}>
                <Text
                  style={[
                    styles.value,
                    {
                      color: item.iconColor,
                    },
                  ]}>
                  {item.value}
                </Text>

                <Text style={styles.cardTitle}>
                  {item.title}
                </Text>
              </View>

            </TouchableOpacity>
          );
        })}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
  },

  header: {
    marginBottom: 14,
  },

  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111111',
  },

  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: '#6B7280',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48.2%',
    minHeight: 118,
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    justifyContent: 'space-between',
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  info: {
    marginTop: 12,
  },

  value: {
    fontSize: 26,
    fontWeight: '800',
  },

  cardTitle: {
    marginTop: 3,
    fontSize: 13,
    fontWeight: '600',
    color: '#4B5563',
  },
});

export default ProjectOverview;