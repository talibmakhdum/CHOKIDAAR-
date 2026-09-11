import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  FileText,
  Eye,
  CheckCircle,
} from 'lucide-react-native';

const MyOverview = () => {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.title}>
          My Overview
        </Text>

        <Text style={styles.subtitle}>
          Your suggestion activity
        </Text>
      </View>

      {/* Small Overview Cards */}
      <View style={styles.cardsRow}>

        {/* Total Suggestions */}
        <View
          style={[
            styles.card,
            styles.blueCard,
          ]}>
          <View
            style={[
              styles.iconContainer,
              styles.blueIcon,
            ]}>
            <FileText
              size={17}
              color="#2563EB"
            />
          </View>

          <View style={styles.textContainer}>
            <Text
              style={[
                styles.number,
                styles.blueNumber,
              ]}>
              0
            </Text>

            <Text style={styles.cardTitle}>
              Suggestions
            </Text>
          </View>
        </View>

        {/* Total Views */}
        <View
          style={[
            styles.card,
            styles.yellowCard,
          ]}>
          <View
            style={[
              styles.iconContainer,
              styles.yellowIcon,
            ]}>
            <Eye
              size={17}
              color="#D97706"
            />
          </View>

          <View style={styles.textContainer}>
            <Text
              style={[
                styles.number,
                styles.yellowNumber,
              ]}>
              0
            </Text>

            <Text style={styles.cardTitle}>
              Views
            </Text>
          </View>
        </View>

        {/* Accepted */}
        <View
          style={[
            styles.card,
            styles.greenCard,
          ]}>
          <View
            style={[
              styles.iconContainer,
              styles.greenIcon,
            ]}>
            <CheckCircle
              size={17}
              color="#16A34A"
            />
          </View>

          <View style={styles.textContainer}>
            <Text
              style={[
                styles.number,
                styles.greenNumber,
              ]}>
              0
            </Text>

            <Text style={styles.cardTitle}>
              Accepted
            </Text>
          </View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 24,
  },

  headingContainer: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111111',
  },

  subtitle: {
    marginTop: 3,
    fontSize: 13,
    color: '#6B7280',
  },

  cardsRow: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    gap: 8,
  },

  card: {
    flex: 1,
    minHeight: 72,
    paddingHorizontal: 9,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  /* Blue */
  blueCard: {
    backgroundColor: '#EFF6FF',
    borderColor: '#BFDBFE',
  },

  blueIcon: {
    backgroundColor: '#DBEAFE',
  },

  blueNumber: {
    color: '#2563EB',
  },

  /* Yellow */
  yellowCard: {
    backgroundColor: '#FFFBEB',
    borderColor: '#FDE68A',
  },

  yellowIcon: {
    backgroundColor: '#FEF3C7',
  },

  yellowNumber: {
    color: '#D97706',
  },

  /* Green */
  greenCard: {
    backgroundColor: '#F0FDF4',
    borderColor: '#BBF7D0',
  },

  greenIcon: {
    backgroundColor: '#DCFCE7',
  },

  greenNumber: {
    color: '#16A34A',
  },

  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    marginLeft: 7,
    flex: 1,
  },

  number: {
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 22,
  },

  cardTitle: {
    marginTop: 2,
    fontSize: 9,
    fontWeight: '700',
    color: '#4B5563',
  },
});

export default MyOverview;