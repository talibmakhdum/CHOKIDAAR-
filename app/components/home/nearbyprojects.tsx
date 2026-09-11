import React, {
  useRef,
  useState,
} from 'react';

import {
  ActivityIndicator,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Bookmark,
  Check,
} from 'lucide-react-native';

import {
  Defs,
  LinearGradient,
  Rect,
  Stop,
  Svg,
} from 'react-native-svg';

import {useSavedProjects} from '../../context/SavedProjectsContext';

import {projects} from '../../data/projects';

type NearbyProject = {
  id: number;
  name: string;
  distance: string;
  progress: number;
};

type NearbyProjectsProps = {
  header?: React.ReactNode;
};

/* =====================================================
   PROJECT DISTANCES
   ===================================================== */

const projectDistances: Record<
  number,
  string
> = {
  1: '2.1 km',
  2: '3.4 km',
  3: '4.2 km',
  4: '5.1 km',
  5: '6.2 km',
  6: '6.8 km',
  7: '7.4 km',
  8: '8.1 km',
};

/* =====================================================
   COMPONENT
   ===================================================== */

const NearbyProjects = ({
  header,
}: NearbyProjectsProps) => {
  /*
   * Start with 4 projects.
   */
  const [visibleCount, setVisibleCount] =
    useState(4);

  /*
   * Loading state.
   */
  const [isLoading, setIsLoading] =
    useState(false);

  /*
   * Prevent multiple loading calls.
   */
  const loadingLock = useRef(false);

  /*
   * Saved projects.
   */
  const {
    isProjectSaved,
    toggleSaveProject,
  } = useSavedProjects();

  /* =====================================================
     GET PROJECT DATA FROM projects.ts
     ===================================================== */

  const allProjects: NearbyProject[] =
    projects.map(project => ({
      id: project.id,
      name: project.name,

      /*
       * Distance is currently mock data.
       * Later this can come from GPS/API.
       */
      distance:
        projectDistances[project.id] ??
        'Nearby',

      progress: project.progress,
    }));

  /* =====================================================
     SAVE BUTTON ANIMATIONS
     ===================================================== */

  const animations = useRef(
    projects.reduce(
      (acc, project) => {
        acc[project.id] =
          new Animated.Value(1);

        return acc;
      },
      {} as Record<
        number,
        Animated.Value
      >,
    ),
  ).current;

  /* =====================================================
     LOAD MORE PROJECTS
     ===================================================== */

  const loadMoreProjects = () => {
    /*
     * Already loading.
     */
    if (loadingLock.current) {
      return;
    }

    /*
     * Everything already displayed.
     */
    if (
      visibleCount >=
      allProjects.length
    ) {
      return;
    }

    /*
     * Lock immediately.
     */
    loadingLock.current = true;

    setIsLoading(true);

    /*
     * 2 second loading simulation.
     */
    setTimeout(() => {
      setVisibleCount(
        currentCount => {
          /*
           * Add 2 projects.
           */
          const nextCount = Math.min(
            currentCount + 2,
            allProjects.length,
          );

          return nextCount;
        },
      );

      setIsLoading(false);

      loadingLock.current = false;
    }, 2000);
  };

  /* =====================================================
     SCROLL DETECTION
     ===================================================== */

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    /*
     * All projects shown.
     */
    if (
      visibleCount >=
      allProjects.length
    ) {
      return;
    }

    /*
     * Already loading.
     */
    if (loadingLock.current) {
      return;
    }

    const {
      contentOffset,
      layoutMeasurement,
      contentSize,
    } = event.nativeEvent;

    const currentPosition =
      contentOffset.y +
      layoutMeasurement.height;

    const bottomPosition =
      contentSize.height;

    /*
     * Load when within 120px
     * of the bottom.
     */
    if (
      currentPosition >=
      bottomPosition - 120
    ) {
      loadMoreProjects();
    }
  };

  /* =====================================================
     SAVE PROJECT
     ===================================================== */

  const handleSave = (
    projectId: number,
  ) => {
    const animation =
      animations[projectId];

    Animated.sequence([
      Animated.timing(animation, {
        toValue: 0.85,
        duration: 80,
        useNativeDriver: true,
      }),

      Animated.spring(animation, {
        toValue: 1,
        friction: 4,
        tension: 100,
        useNativeDriver: true,
      }),
    ]).start();

    /*
     * Only ID is saved.
     *
     * Example:
     * [1, 3]
     */
    toggleSaveProject(projectId);
  };

  /* =====================================================
     PROGRESS GRADIENT
     ===================================================== */

  const getProgressGradient = (
    progress: number,
  ) => {
    if (progress < 40) {
      return {
        start: '#EF4444',
        middle: '#F97316',
        end: '#F59E0B',
      };
    }

    if (progress < 70) {
      return {
        start: '#F97316',
        middle: '#FACC15',
        end: '#84CC16',
      };
    }

    if (progress < 90) {
      return {
        start: '#FACC15',
        middle: '#84CC16',
        end: '#22C55E',
      };
    }

    return {
      start: '#22C55E',
      middle: '#14B8A6',
      end: '#10B981',
    };
  };

  /* =====================================================
     PROGRESS TEXT COLOR
     ===================================================== */

  const getProgressTextColor = (
    progress: number,
  ) => {
    if (progress < 40) {
      return '#DC2626';
    }

    if (progress < 70) {
      return '#D97706';
    }

    return '#16A34A';
  };

  /* =====================================================
     VISIBLE PROJECTS
     ===================================================== */

  const visibleProjects =
    allProjects.slice(
      0,
      visibleCount,
    );

  const allProjectsShown =
    visibleCount >=
    allProjects.length;

  /* =====================================================
     RENDER
     ===================================================== */

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={
        styles.content
      }
      showsVerticalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}>

      {/* HOME CONTENT */}

      {header}

      {/* =================================================
          NEARBY PROJECTS HEADER
      ================================================= */}

      <View style={styles.header}>
        <Text style={styles.title}>
          Nearby Projects
        </Text>

        <Text style={styles.subtitle}>
          Projects closest to your location
        </Text>
      </View>

      {/* =================================================
          PROJECT CARDS
      ================================================= */}

      {visibleProjects.map(
        project => {
          const gradient =
            getProgressGradient(
              project.progress,
            );

          const saved =
            isProjectSaved(
              project.id,
            );

          return (
            <View
              key={project.id}
              style={styles.card}>

              {/* TOP ROW */}

              <View
                style={styles.topRow}>

                <View
                  style={styles.info}>

                  <Text
                    style={
                      styles.projectName
                    }
                    numberOfLines={2}>
                    {project.name}
                  </Text>

                  <Text
                    style={
                      styles.distance
                    }>
                    📍 {project.distance} away
                  </Text>

                </View>

                {/* SAVE BUTTON */}

                <Animated.View
                  style={{
                    transform: [
                      {
                        scale:
                          animations[
                            project.id
                          ],
                      },
                    ],
                  }}>

                  <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={() =>
                      handleSave(
                        project.id,
                      )
                    }
                    style={[
                      styles.saveButton,

                      saved &&
                        styles.saveButtonActive,
                    ]}>

                    {saved ? (
                      <Check
                        size={19}
                        color="#FFFFFF"
                        strokeWidth={2.7}
                      />
                    ) : (
                      <Bookmark
                        size={19}
                        color="#374151"
                        strokeWidth={2}
                      />
                    )}

                  </TouchableOpacity>

                </Animated.View>

              </View>

              {/* =================================================
                  PROGRESS HEADER
              ================================================= */}

              <View
                style={
                  styles.progressHeader
                }>

                <Text
                  style={
                    styles.progressLabel
                  }>
                  Project Progress
                </Text>

                <Text
                  style={[
                    styles.progressValue,
                    {
                      color:
                        getProgressTextColor(
                          project.progress,
                        ),
                    },
                  ]}>
                  {project.progress}%
                </Text>

              </View>

              {/* =================================================
                  PROGRESS BAR
              ================================================= */}

              <View
                style={
                  styles.progressTrack
                }>

                <Svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 7"
                  preserveAspectRatio="none">

                  <Defs>

                    <LinearGradient
                      id={`gradient-${project.id}`}
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0">

                      <Stop
                        offset="0"
                        stopColor={
                          gradient.start
                        }
                      />

                      <Stop
                        offset="0.5"
                        stopColor={
                          gradient.middle
                        }
                      />

                      <Stop
                        offset="1"
                        stopColor={
                          gradient.end
                        }
                      />

                    </LinearGradient>

                  </Defs>

                  {/* BACKGROUND */}

                  <Rect
                    x="0"
                    y="0"
                    width="100"
                    height="7"
                    rx="3.5"
                    fill="#F3F4F6"
                  />

                  {/* ACTUAL PROGRESS */}

                  <Rect
                    x="0"
                    y="0"
                    width={
                      project.progress
                    }
                    height="7"
                    rx="3.5"
                    fill={`url(#gradient-${project.id})`}
                  />

                </Svg>

              </View>

            </View>
          );
        },
      )}

      {/* =================================================
          LOADING
      ================================================= */}

      {isLoading &&
        !allProjectsShown && (
          <View
            style={
              styles.loadingContainer
            }>

            <ActivityIndicator
              size="small"
              color="#7C3AED"
            />

            <Text
              style={
                styles.loadingText
              }>
              Loading more projects...
            </Text>

          </View>
        )}

      {/* =================================================
          ALL PROJECTS SHOWN
      ================================================= */}

      {allProjectsShown && (
        <View
          style={
            styles.endContainer
          }>

          <View
            style={styles.endLine}
          />

          <Text
            style={styles.endText}>
            All nearby projects shown
          </Text>

          <View
            style={styles.endLine}
          />

        </View>
      )}

      <View
        style={styles.bottomSpace}
      />

    </ScrollView>
  );
};

/* =====================================================
   STYLES
===================================================== */

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  header: {
    marginTop: 28,
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

  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 18,
    padding: 15,
    marginBottom: 12,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  info: {
    flex: 1,
    paddingRight: 12,
  },

  projectName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111111',
    lineHeight: 21,
  },

  distance: {
    marginTop: 5,
    fontSize: 12,
    color: '#6B7280',
  },

  saveButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BFDBFE',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  saveButtonActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },

  progressHeader: {
    marginTop: 15,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  progressLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },

  progressValue: {
    fontSize: 13,
    fontWeight: '800',
  },

  progressTrack: {
    width: '100%',
    height: 7,
    borderRadius: 10,
    overflow: 'hidden',
  },

  loadingContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  loadingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },

  endContainer: {
    minHeight: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  endLine: {
    width: 35,
    height: 1,
    backgroundColor: '#E5E7EB',
  },

  endText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9CA3AF',
  },

  bottomSpace: {
    height: 20,
  },
});

export default NearbyProjects;