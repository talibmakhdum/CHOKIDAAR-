import React, {useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Eye,
  ThumbsDown,
  ThumbsUp,
  MapPin,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react-native';

import {suggestions} from '../../data/suggestions';

const ITEMS_PER_PAGE = 2;

const MySuggestions = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const mySuggestions = useMemo(() => {
    return suggestions.filter(
      suggestion => suggestion.isMine,
    );
  }, []);

  const totalPages = Math.ceil(
    mySuggestions.length / ITEMS_PER_PAGE,
  );

  const startIndex =
    currentPage * ITEMS_PER_PAGE;

  const visibleSuggestions =
    mySuggestions.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE,
    );

  const hasNextPage =
    currentPage < totalPages - 1;

  const hasPreviousPage =
    currentPage > 0;

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Accepted':
        return {
          backgroundColor: '#DCFCE7',
          color: '#16A34A',
        };

      case 'Forwarded':
        return {
          backgroundColor: '#DBEAFE',
          color: '#2563EB',
        };

      case 'Under Review':
        return {
          backgroundColor: '#FEF3C7',
          color: '#D97706',
        };

      case 'Rejected':
        return {
          backgroundColor: '#FEE2E2',
          color: '#DC2626',
        };

      default:
        return {
          backgroundColor: '#F3F4F6',
          color: '#6B7280',
        };
    }
  };

  const handleNext = () => {
    if (hasNextPage) {
      setCurrentPage(
        currentPage + 1,
      );
    }
  };

  const handlePrevious = () => {
    if (hasPreviousPage) {
      setCurrentPage(
        currentPage - 1,
      );
    }
  };

  return (
    <View style={styles.container}>

      {/* ================================= */}
      {/* HEADING                           */}
      {/* ================================= */}

      <View style={styles.headingRow}>

        <View>
          <Text style={styles.title}>
            My Suggestions
          </Text>

          <Text style={styles.subtitle}>
            Suggestions submitted by you
          </Text>
        </View>

        {/* TOTAL NUMBER */}
        <View style={styles.countBadge}>
          <Text style={styles.countText}>
            {mySuggestions.length}
          </Text>
        </View>

      </View>

      {/* ================================= */}
      {/* MAIN LIST                         */}
      {/* ================================= */}

      <View style={styles.mainContainer}>

        {mySuggestions.length === 0 ? (

          <View style={styles.emptyContainer}>

            <Text style={styles.emptyTitle}>
              No suggestions yet
            </Text>

            <Text style={styles.emptyText}>
              Your submitted suggestions will
              appear here.
            </Text>

          </View>

        ) : (

          visibleSuggestions.map(
            (suggestion, index) => {

              const statusStyle =
                getStatusStyle(
                  suggestion.status,
                );

              const isLast =
                index ===
                visibleSuggestions.length - 1;

              return (
                <View
                  key={suggestion.id}
                  style={[
                    styles.suggestionItem,
                    isLast &&
                      styles.lastItem,
                  ]}>

                  {/* TITLE + STATUS */}

                  <View style={styles.topRow}>

                    <Text
                      style={styles.suggestionTitle}
                      numberOfLines={2}>

                      {suggestion.title}

                    </Text>

                    <View
                      style={[
                        styles.statusBadge,
                        {
                          backgroundColor:
                            statusStyle.backgroundColor,
                        },
                      ]}>

                      <Text
                        style={[
                          styles.statusText,
                          {
                            color:
                              statusStyle.color,
                          },
                        ]}>

                        {suggestion.status}

                      </Text>

                    </View>

                  </View>

                  {/* LOCATION */}

                  <View style={styles.locationRow}>

                    <MapPin
                      size={15}
                      color="#7C3AED"
                      strokeWidth={2}
                    />

                    <Text
                      style={styles.locationText}
                      numberOfLines={1}>

                      {suggestion.location}

                    </Text>

                  </View>

                  {/* STATS */}

                  <View style={styles.statsRow}>

                    {/* VIEWS */}

                    <View style={styles.statItem}>

                      <Eye
                        size={17}
                        color="#6B7280"
                        strokeWidth={2}
                      />

                      <View
                        style={
                          styles.statTextContainer
                        }>

                        <Text
                          style={
                            styles.statNumber
                          }>

                          {suggestion.views.toLocaleString()}

                        </Text>

                        <Text
                          style={
                            styles.statLabel
                          }>

                          Views

                        </Text>

                      </View>

                    </View>

                    {/* LIKES */}

                    <View style={styles.statItem}>

                      <ThumbsUp
                        size={17}
                        color="#16A34A"
                        strokeWidth={2}
                      />

                      <View
                        style={
                          styles.statTextContainer
                        }>

                        <Text
                          style={[
                            styles.statNumber,
                            styles.likeNumber,
                          ]}>

                          {suggestion.likes.toLocaleString()}

                        </Text>

                        <Text
                          style={
                            styles.statLabel
                          }>

                          Likes

                        </Text>

                      </View>

                    </View>

                    {/* DISLIKES */}

                    <View style={styles.statItem}>

                      <ThumbsDown
                        size={17}
                        color="#DC2626"
                        strokeWidth={2}
                      />

                      <View
                        style={
                          styles.statTextContainer
                        }>

                        <Text
                          style={[
                            styles.statNumber,
                            styles.dislikeNumber,
                          ]}>

                          {suggestion.dislikes.toLocaleString()}

                        </Text>

                        <Text
                          style={
                            styles.statLabel
                          }>

                          Dislikes

                        </Text>

                      </View>

                    </View>

                  </View>

                </View>
              );
            },
          )

        )}

      </View>

      {/* ================================= */}
      {/* PAGINATION                        */}
      {/* ================================= */}

      {totalPages > 1 && (

        <View style={styles.pagination}>

          {/* PREVIOUS */}

          {hasPreviousPage ? (

            <TouchableOpacity
              style={styles.navigationButton}
              activeOpacity={0.7}
              onPress={handlePrevious}>

              <ChevronLeft
                size={17}
                color="#7C3AED"
                strokeWidth={2.5}
              />

              <Text style={styles.navigationText}>
                Previous
              </Text>

            </TouchableOpacity>

          ) : (

            <View style={styles.navigationPlaceholder} />

          )}

          {/* PAGE NUMBER */}

          <Text style={styles.pageText}>
            {currentPage + 1} / {totalPages}
          </Text>

          {/* NEXT */}

          {hasNextPage ? (

            <TouchableOpacity
              style={styles.navigationButton}
              activeOpacity={0.7}
              onPress={handleNext}>

              <Text style={styles.navigationText}>
                See Next
              </Text>

              <ChevronRight
                size={17}
                color="#7C3AED"
                strokeWidth={2.5}
              />

            </TouchableOpacity>

          ) : (

            <View style={styles.navigationPlaceholder} />

          )}

        </View>

      )}

    </View>
  );
};

const styles = StyleSheet.create({

  // ==========================================
  // CONTAINER
  // ==========================================

  container: {
    marginTop: 4,
    marginBottom: 24,
  },

  // ==========================================
  // HEADING
  // ==========================================

  headingRow: {
    paddingHorizontal: 24,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  // ==========================================
  // COUNT
  // ==========================================

  countBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3E8FF',
  },

  countText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#7C3AED',
  },

  // ==========================================
  // MAIN CONTAINER
  // ==========================================

  mainContainer: {
    marginHorizontal: 24,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',

    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
    overflow: 'hidden',
  },

  // ==========================================
  // SUGGESTION
  // ==========================================

  suggestionItem: {
    paddingHorizontal: 14,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#3741513d',
  },

  lastItem: {
    borderBottomWidth: 0,
  },

  // ==========================================
  // TITLE
  // ==========================================

  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  suggestionTitle: {
    flex: 1,
    paddingRight: 10,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '800',
    color: '#111111',
  },

  // ==========================================
  // STATUS
  // ==========================================

  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 9,
  },

  statusText: {
    fontSize: 9,
    fontWeight: '800',
  },

  // ==========================================
  // LOCATION
  // ==========================================

  locationRow: {
    marginTop: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationText: {
    marginLeft: 5,
    flex: 1,
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
  },

  // ==========================================
  // STATS
  // ==========================================

  statsRow: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  statTextContainer: {
    marginLeft: 6,
  },

  statNumber: {
    fontSize: 14,
    fontWeight: '800',
    color: '#374151',
  },

  statLabel: {
    marginTop: 1,
    fontSize: 9,
    color: '#9CA3AF',
    fontWeight: '600',
  },

  likeNumber: {
    color: '#16A34A',
  },

  dislikeNumber: {
    color: '#DC2626',
  },

  // ==========================================
  // PAGINATION
  // ==========================================

  pagination: {
    marginHorizontal: 24,
    marginTop: 8,
    minHeight: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  navigationButton: {
    paddingHorizontal: 4,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },

  navigationPlaceholder: {
    width: 80,
  },

  navigationText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#7C3AED',
  },

  pageText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#9CA3AF',
  },

  // ==========================================
  // EMPTY
  // ==========================================

  emptyContainer: {
    paddingVertical: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#374151',
  },

  emptyText: {
    marginTop: 5,
    paddingHorizontal: 20,
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },

});

export default MySuggestions;