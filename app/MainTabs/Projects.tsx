import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  type ScrollViewInstance,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import TopNavbar from '../components/navigation/topnavbar';
import Heading from '../components/projects/heading';
import ProjectCard from '../components/projects/ProjectCard';

import {projects} from '../data/projects';

import {useSavedProjects} from '../context/SavedProjectsContext';

const Projects = () => {
  const {savedProjects} = useSavedProjects();

  const {width: screenWidth} =
    useWindowDimensions();

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const horizontalScrollRef =
    useRef<ScrollViewInstance>(null);

  const verticalScrollRefs =
    useRef<
      Record<
        number,
        ScrollViewInstance | null
      >
    >({});

  /*
   * Get complete project details
   * for saved projects only.
   */
  const savedProjectDetails =
    projects.filter(project =>
      savedProjects.includes(project.id),
    );

  /* =====================================================
     RESET CURRENT PROJECT
  ===================================================== */

  useEffect(() => {
    if (savedProjectDetails.length === 0) {
      setCurrentIndex(0);
      return;
    }

    if (
      currentIndex >=
      savedProjectDetails.length
    ) {
      setCurrentIndex(0);

      horizontalScrollRef.current?.scrollTo({
        x: 0,
        animated: false,
      });
    }
  }, [
    savedProjectDetails.length,
    currentIndex,
  ]);

  /* =====================================================
     HANDLE HORIZONTAL SWIPE
  ===================================================== */

  const handleProjectScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const pageWidth =
      event.nativeEvent.layoutMeasurement.width;

    const offsetX =
      event.nativeEvent.contentOffset.x;

    if (pageWidth <= 0) {
      return;
    }

    const index = Math.round(
      offsetX / pageWidth,
    );

    const safeIndex = Math.max(
      0,
      Math.min(
        index,
        savedProjectDetails.length - 1,
      ),
    );

    setCurrentIndex(safeIndex);

    /*
     * When moving to another project,
     * start that project from the top.
     */
    const nextProject =
      savedProjectDetails[safeIndex];

    if (nextProject) {
      verticalScrollRefs.current[
        nextProject.id
      ]?.scrollTo({
        y: 0,
        animated: false,
      });
    }
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <View style={styles.container}>

      <TopNavbar />

      <View style={styles.mainContent}>

        <Heading />

        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {savedProjectDetails.length === 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
              styles.emptyScrollContent
            }>

            <View
              style={styles.emptyContainer}>

              <Text
                style={styles.emptyTitle}>
                No Saved Projects
              </Text>

              <Text
                style={styles.emptyText}>
                Save projects from Home to see
                them here.
              </Text>

            </View>

          </ScrollView>
        ) : (

          /* =================================================
             SAVED PROJECT CAROUSEL
          ================================================= */

          <ScrollView
            ref={horizontalScrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleProjectScroll}
            scrollEventThrottle={16}
            decelerationRate="fast"
            bounces={false}
            style={styles.horizontalScroll}>

            {savedProjectDetails.map(
              project => (

                <View
                  key={project.id}
                  style={[
                    styles.projectPage,
                    {
                      width: screenWidth,
                    },
                  ]}>

                  {/* =====================================
                      VERTICAL PROJECT SCROLL
                  ===================================== */}

                  <ScrollView
                    ref={ref => {
                      verticalScrollRefs.current[
                        project.id
                      ] = ref;
                    }}
                    showsVerticalScrollIndicator={
                      false
                    }
                    nestedScrollEnabled
                    contentContainerStyle={
                      styles.projectScrollContent
                    }>

                    {/* =================================
                        PROJECT CARD
                    ================================= */}

                    <ProjectCard
                      project={project}
                    />

                    {/* =================================
                        SPACE AFTER CARD
                    ================================= */}

                    <View
                      style={
                        styles.cardBottomSpace
                      }
                    />

                    {/* =================================
                        DOTS AT END OF CONTENT
                    ================================= */}

                    <View
                      style={
                        styles.dotsContainer
                      }>

                      {savedProjectDetails.map(
                        (_, index) => (
                          <View
                            key={index}
                            style={[
                              styles.dot,
                              index ===
                                currentIndex &&
                                styles.activeDot,
                            ]}
                          />
                        ),
                      )}

                    </View>

                    {/* =================================
                        COUNTER
                    ================================= */}

                    <Text
                      style={
                        styles.projectCounter
                      }>
                      {currentIndex + 1} of{' '}
                      {
                        savedProjectDetails.length
                      }
                    </Text>

                    {/* =================================
                        FINAL BOTTOM SPACE
                    ================================= */}

                    <View
                      style={
                        styles.bottomSpace
                      }
                    />

                  </ScrollView>

                </View>

              ),
            )}

          </ScrollView>
        )}

      </View>

    </View>
  );
};

/* =====================================================
   STYLES
===================================================== */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  mainContent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* =====================================================
     HORIZONTAL CAROUSEL
  ===================================================== */

  horizontalScroll: {
    flex: 1,
  },

  /* =====================================================
     PROJECT PAGE
  ===================================================== */

  projectPage: {
    paddingHorizontal: 12,
  },

  projectScrollContent: {
    paddingBottom: 10,
  },

  /* =====================================================
     SPACE AFTER CARD
  ===================================================== */

  cardBottomSpace: {
    height: 20,
  },

  /* =====================================================
     DOTS
  ===================================================== */

  dotsContainer: {
    height: 28,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
  },

  activeDot: {
    width: 22,
    backgroundColor: '#7C3AED',
  },

  /* =====================================================
     COUNTER
  ===================================================== */

  projectCounter: {
    marginTop: 0,
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '600',
    color: '#9CA3AF',
  },

  /* =====================================================
     BOTTOM SPACE
  ===================================================== */

  bottomSpace: {
    height: 20,
  },

  /* =====================================================
     EMPTY STATE
  ===================================================== */

  emptyScrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },

  emptyContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    paddingHorizontal: 24,
    paddingVertical: 28,
    borderRadius: 18,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111111',
  },

  emptyText: {
    marginTop: 7,
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    color: '#6B7280',
  },

});

export default Projects;