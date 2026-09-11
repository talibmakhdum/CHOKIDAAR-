import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import TopNavbar from '../components/navigation/topnavbar';
import TopReviews from '../components/suggestions/topReviews';
import MyOverview from '../components/suggestions/myOverview';
import MySuggestions from '../components/suggestions/mySuggestions';
import NewSuggestion from '../components/suggestions/newSuggestion';

const Suggestion = () => {
  return (
    <View style={styles.container}>
      <TopNavbar />

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        <TopReviews />

        <MyOverview />

        <MySuggestions />

        <NewSuggestion />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 30,
  },
});

export default Suggestion;