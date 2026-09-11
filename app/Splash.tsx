import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from './Main';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = ({navigation}: Props) => {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.75)).current;
  const nameOpacity = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Logo animation
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.spring(logoScale, {
        toValue: 1,
        friction: 7,
        tension: 45,
        useNativeDriver: true,
      }),
    ]).start();

    // NETRA name animation
    Animated.timing(nameOpacity, {
      toValue: 1,
      duration: 700,
      delay: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    // 4-second loading animation
    Animated.timing(progress, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      // Go to the main application after splash
      navigation.replace('MainTabs');
    });
  }, [navigation, progress, logoOpacity, logoScale, nameOpacity]);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>

      {/* TOP APP NAME */}
      <Animated.View
        style={[
          styles.topSection,
          {
            opacity: nameOpacity,
          },
        ]}>
        <Text style={styles.appName}>NETRA</Text>
      </Animated.View>

      {/* CENTER LOGO */}
      <View style={styles.centerSection}>
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: logoOpacity,
              transform: [{scale: logoScale}],
            },
          ]}>
          <Image
            source={require('@/assets/images/netra-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>
      </View>

      {/* BOTTOM LOADING */}
      <View style={styles.bottomSection}>

        <View style={styles.loadingSection}>
          <View style={styles.progressTrack}>
            <Animated.View
              style={[
                styles.progressBar,
                {
                  width: progressWidth,
                },
              ]}
            />
          </View>

          <Text style={styles.loadingText}>
            Loading NETRA...
          </Text>
        </View>

        <Text style={styles.footerText}>
          A smarter way to stay informed
        </Text>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 35,
    paddingBottom: 25,
  },

  // -------------------------
  // TOP
  // -------------------------

  topSection: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 15,
  },

  appName: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 7,
    color: '#111111',
  },

  // -------------------------
  // CENTER
  // -------------------------

  centerSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 165,
    height: 165,
  },

  // -------------------------
  // BOTTOM
  // -------------------------

  bottomSection: {
    width: '100%',
    alignItems: 'center',
  },

  loadingSection: {
    width: '65%',
    alignItems: 'center',
    marginBottom: 20,
  },

  progressTrack: {
    width: '100%',
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressBar: {
    height: 4,
    backgroundColor: '#7C3AED',
    borderRadius: 10,
  },

  loadingText: {
    marginTop: 10,
    fontSize: 11,
    color: '#9CA3AF',
    letterSpacing: 0.5,
  },

  footerText: {
    fontSize: 11,
    color: '#9CA3AF',
    letterSpacing: 0.4,
  },
});

export default Splash;