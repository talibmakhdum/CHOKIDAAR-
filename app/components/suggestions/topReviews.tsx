import React, {useMemo, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  Eye,
  MapPin,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react-native';

import {
  suggestions,
  Suggestion,
} from '../../data/suggestions';

type Reaction = 'like' | 'dislike' | null;

type SuggestionReactionData = {
  likes: number;
  dislikes: number;
  reaction: Reaction;
};

const TopReviews = () => {
  const {width} = useWindowDimensions();

  const [reactionData, setReactionData] = useState<
    Record<number, SuggestionReactionData>
  >(() => {
    const initialData: Record<
      number,
      SuggestionReactionData
    > = {};

    suggestions.forEach(suggestion => {
      initialData[suggestion.id] = {
        likes: suggestion.likes,
        dislikes: suggestion.dislikes,
        reaction: null,
      };
    });

    return initialData;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const topSuggestions = useMemo(() => {
    return suggestions
      .filter(suggestion => !suggestion.isMine)
      .sort((a, b) => {
        const likesA =
          reactionData[a.id]?.likes ?? a.likes;

        const likesB =
          reactionData[b.id]?.likes ?? b.likes;

        return likesB - likesA;
      });
  }, [reactionData]);

  const cardWidth = width - 72;

  const handleReaction = (
    suggestion: Suggestion,
    newReaction: Reaction,
  ) => {
    setReactionData(current => {
      const currentSuggestion =
        current[suggestion.id];

      if (!currentSuggestion) {
        return current;
      }

      const previousReaction =
        currentSuggestion.reaction;

      let likes = currentSuggestion.likes;
      let dislikes = currentSuggestion.dislikes;

      // Click the same reaction again
      if (previousReaction === newReaction) {
        if (newReaction === 'like') {
          likes = Math.max(0, likes - 1);
        }

        if (newReaction === 'dislike') {
          dislikes = Math.max(0, dislikes - 1);
        }

        return {
          ...current,
          [suggestion.id]: {
            likes,
            dislikes,
            reaction: null,
          },
        };
      }

      // Remove previous reaction
      if (previousReaction === 'like') {
        likes = Math.max(0, likes - 1);
      }

      if (previousReaction === 'dislike') {
        dislikes = Math.max(0, dislikes - 1);
      }

      // Add new reaction
      if (newReaction === 'like') {
        likes += 1;
      }

      if (newReaction === 'dislike') {
        dislikes += 1;
      }

      return {
        ...current,
        [suggestion.id]: {
          likes,
          dislikes,
          reaction: newReaction,
        },
      };
    });
  };

  const handleScrollEnd = (event: any) => {
    const offsetX =
      event.nativeEvent.contentOffset.x;

    const index = Math.round(
      offsetX / (cardWidth + 12),
    );

    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>
            Top Suggestions
          </Text>

          <Text style={styles.subtitle}>
            See what other citizens are suggesting
          </Text>
        </View>
      </View>

      {/* Horizontal Suggestions */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={cardWidth + 12}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScrollEnd}
        contentContainerStyle={
          styles.horizontalContent
        }>
        {topSuggestions.map(
          (suggestion, index) => {
            const data =
              reactionData[suggestion.id];

            const likes =
              data?.likes ?? suggestion.likes;

            const dislikes =
              data?.dislikes ??
              suggestion.dislikes;

            const reaction =
              data?.reaction ?? null;

            return (
              <View
                key={suggestion.id}
                style={[
                  styles.card,
                  {
                    width: cardWidth,
                  },
                ]}>
                {/* Profile */}
                <View style={styles.profileRow}>
                  <Image
                    source={{
                      uri: suggestion.profileImage,
                    }}
                    style={styles.profileImage}
                  />

                  <View
                    style={styles.profileInfo}>
                    <Text
                      style={
                        styles.citizenName
                      }>
                      {suggestion.userName}
                    </Text>

                    <Text
                      style={
                        styles.submittedText
                      }>
                      Citizen Suggestion
                    </Text>
                  </View>

                  <View
                    style={styles.rankBadge}>
                    <Text
                      style={styles.rankText}>
                      #{index + 1}
                    </Text>
                  </View>
                </View>

                {/* Suggestion Title */}
                <Text style={styles.suggestionTitle}>
                  {suggestion.title}
                </Text>

                {/* Category */}
                <View style={styles.categoryBadge}>
                  <Text
                    style={
                      styles.categoryText
                    }>
                    {suggestion.category}
                  </Text>
                </View>

                {/* Location */}
                <View style={styles.locationRow}>
                  <MapPin
                    size={15}
                    color="#7C3AED"
                  />

                  <Text
                    style={styles.locationText}>
                    {suggestion.location}
                  </Text>
                </View>

                {/* Description */}
                <Text
                  style={styles.description}
                  numberOfLines={3}>
                  {suggestion.description}
                </Text>

                {/* Stats + Reactions */}
                <View style={styles.statsRow}>
                  {/* Views */}
                  <View style={styles.statItem}>
                    <Eye
                      size={17}
                      color="#6B7280"
                    />

                    <Text
                      style={styles.statNumber}>
                      {suggestion.views.toLocaleString()}
                    </Text>

                    <Text
                      style={styles.statLabel}>
                      Views
                    </Text>
                  </View>

                  {/* Like */}
                  <TouchableOpacity
                    activeOpacity={0.65}
                    onPress={() =>
                      handleReaction(
                        suggestion,
                        'like',
                      )
                    }
                    style={styles.reactionItem}>
                    <ThumbsUp
                      size={17}
                      color={
                        reaction === 'like'
                          ? '#16A34A'
                          : '#6B7280'
                      }
                      fill={
                        reaction === 'like'
                          ? '#16A34A'
                          : 'none'
                      }
                    />

                    <Text
                      style={[
                        styles.reactionNumber,
                        reaction ===
                          'like' &&
                          styles.likeText,
                      ]}>
                      {likes.toLocaleString()}
                    </Text>
                  </TouchableOpacity>

                  {/* Dislike */}
                  <TouchableOpacity
                    activeOpacity={0.65}
                    onPress={() =>
                      handleReaction(
                        suggestion,
                        'dislike',
                      )
                    }
                    style={styles.reactionItem}>
                    <ThumbsDown
                      size={17}
                      color={
                        reaction ===
                        'dislike'
                          ? '#DC2626'
                          : '#6B7280'
                      }
                      fill={
                        reaction ===
                        'dislike'
                          ? '#DC2626'
                          : 'none'
                      }
                    />

                    <Text
                      style={[
                        styles.reactionNumber,
                        reaction ===
                          'dislike' &&
                          styles.dislikeText,
                      ]}>
                      {dislikes.toLocaleString()}
                    </Text>
                  </TouchableOpacity>

                  {/* Status */}
                  <View style={styles.statusBadge}>
                    <Text
                      style={
                        styles.statusText
                      }>
                      {suggestion.status}
                    </Text>
                  </View>
                </View>
              </View>
            );
          },
        )}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        {topSuggestions.map(
          (_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex &&
                  styles.activeDot,
              ]}
            />
          ),
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 24,
  },

  headerRow: {
    paddingHorizontal: 24,
    marginBottom: 16,
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

  countBadge: {
    minWidth: 34,
    height: 34,
    paddingHorizontal: 9,
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

  horizontalContent: {
    paddingHorizontal: 24,
    paddingRight: 24,
  },

  card: {
    marginRight: 12,
    padding: 20,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',

    shadowColor: '#000000',
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  profileImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#E5E7EB',
  },

  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },

  citizenName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111111',
  },

  submittedText: {
    marginTop: 3,
    fontSize: 12,
    color: '#9CA3AF',
  },

  rankBadge: {
    width: 38,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3E8FF',
  },

  rankText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#7C3AED',
  },

  suggestionTitle: {
    fontSize: 19,
    lineHeight: 25,
    fontWeight: '800',
    color: '#111111',
    marginBottom: 10,
  },

  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: '#F5F3FF',
    marginBottom: 12,
  },

  categoryText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7C3AED',
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  locationText: {
    marginLeft: 6,
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
  },

  description: {
    fontSize: 13,
    lineHeight: 20,
    color: '#4B5563',
    minHeight: 60,
  },

  statsRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  /* Views */
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statNumber: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '800',
    color: '#374151',
  },

  statLabel: {
    marginLeft: 4,
    fontSize: 11,
    color: '#9CA3AF',
  },

  /* Like / Dislike */
  reactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },

  reactionNumber: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '800',
    color: '#374151',
  },

  likeText: {
    color: '#16A34A',
  },

  dislikeText: {
    color: '#DC2626',
  },

  statusBadge: {
    marginLeft: 'auto',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: '#ECFDF5',
  },

  statusText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#059669',
  },

  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
    gap: 6,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D1D5DB',
  },

  activeDot: {
    width: 18,
    backgroundColor: '#7C3AED',
  },
});

export default TopReviews;