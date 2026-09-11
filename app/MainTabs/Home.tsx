import React from 'react';
import {StyleSheet, View} from 'react-native';

import TopNavbar from '../components/navigation/topnavbar';

import Greets from '../components/home/greets';
import Search from '../components/home/search';
import ProjectOverview from '../components/home/projectoverview';
import NearbyProjects from '../components/home/nearbyprojects';

const Home = () => {
  return (
    <View style={styles.container}>
      <TopNavbar />

      <NearbyProjects
        header={
          <>
            <Greets />
            <Search />
            <ProjectOverview />
          </>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default Home;