import React, {useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Check,
  Star,
  X,
} from 'lucide-react-native';

import {projects} from '../../data/projects';

type ContractorRatingProps = {
  projectId: number;
  visible: boolean;
  onClose: () => void;
};

type RatingCategory =
  | 'overall'
  | 'quality'
  | 'timeliness'
  | 'materials'
  | 'management';

const ContractorRating = ({
  projectId,
  visible,
  onClose,
}: ContractorRatingProps) => {
  const project = projects.find(
    item => item.id === projectId,
  );

  const [ratings, setRatings] = useState({
    overall: 0,
    quality: 0,
    timeliness: 0,
    materials: 0,
    management: 0,
  });

  const [review, setReview] = useState('');

  if (!project) {
    return null;
  }

  /*
   * Contractor name
   *
   * If your projects.ts uses contractor.name,
   * this will automatically use it.
   */
  const contractorName =
    project.contractor?.name ||
    'Contractor';

  const setRating = (
    category: RatingCategory,
    value: number,
  ) => {
    setRatings(current => ({
      ...current,
      [category]: value,
    }));
  };

  const resetForm = () => {
    setRatings({
      overall: 0,
      quality: 0,
      timeliness: 0,
      materials: 0,
      management: 0,
    });

    setReview('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = () => {
    if (ratings.overall === 0) {
      return;
    }

    console.log('Contractor Rating Submitted:', {
      projectId: project.id,
      projectName: project.name,
      contractorName,
      ratings,
      review,
    });

    /*
     * Prototype:
     * Data is currently kept locally.
     *
     * Later this can be connected to
     * AsyncStorage / backend API.
     */

    resetForm();
    onClose();
  };

  const renderStars = (
    category: RatingCategory,
    size = 28,
  ) => {
    const selectedRating = ratings[category];

    return (
      <View style={styles.starsRow}>
        {[1, 2, 3, 4, 5].map(starNumber => (
          <TouchableOpacity
            key={starNumber}
            activeOpacity={0.7}
            onPress={() =>
              setRating(category, starNumber)
            }
            style={styles.starButton}>

            <Star
              size={size}
              color={
                starNumber <= selectedRating
                  ? '#F59E0B'
                  : '#D1D5DB'
              }
              fill={
                starNumber <= selectedRating
                  ? '#F59E0B'
                  : 'transparent'
              }
              strokeWidth={2}
            />

          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}>

      <View style={styles.overlay}>

        <View style={styles.modalContainer}>

          {/* ================================= */}
          {/* HEADER                            */}
          {/* ================================= */}

          <View style={styles.header}>

            <View style={styles.headerTextContainer}>

              <Text style={styles.headerTitle}>
                Rate Contractor
              </Text>

              <Text
                style={styles.headerSubtitle}
                numberOfLines={2}>
                Share your experience with the contractor
              </Text>

            </View>

            <TouchableOpacity
              style={styles.closeButton}
              activeOpacity={0.75}
              onPress={handleClose}>

              <X
                size={22}
                color="#374151"
                strokeWidth={2.5}
              />

            </TouchableOpacity>

          </View>

          {/* ================================= */}
          {/* FORM                               */}
          {/* ================================= */}

          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={
              styles.scrollContent
            }>

            {/* ================================= */}
            {/* PROJECT / CONTRACTOR              */}
            {/* ================================= */}

            <View style={styles.projectCard}>

              <View style={styles.avatar}>

                <Text style={styles.avatarText}>
                  {contractorName
                    .charAt(0)
                    .toUpperCase()}
                </Text>

              </View>

              <View style={styles.projectInfo}>

                <Text
                  style={styles.contractorName}
                  numberOfLines={2}>
                  {contractorName}
                </Text>

                <Text
                  style={styles.projectName}
                  numberOfLines={2}>
                  {project.name}
                </Text>

                <Text
                  style={styles.location}
                  numberOfLines={1}>
                  📍 {project.location}
                </Text>

              </View>

            </View>

            {/* ================================= */}
            {/* OVERALL RATING                    */}
            {/* ================================= */}

            <View style={styles.overallSection}>

              <Text style={styles.sectionTitle}>
                Overall Contractor Rating
              </Text>

              <Text style={styles.sectionSubtitle}>
                How would you rate the contractor overall?
              </Text>

              {renderStars('overall', 36)}

              {ratings.overall > 0 && (
                <Text style={styles.ratingText}>
                  {ratings.overall} out of 5
                </Text>
              )}

            </View>

            {/* ================================= */}
            {/* DETAILED RATINGS                  */}
            {/* ================================= */}

            <View style={styles.detailsSection}>

              <Text style={styles.sectionTitle}>
                Rate Specific Areas
              </Text>

              <Text style={styles.sectionSubtitle}>
                Give a rating for each area of contractor
                performance
              </Text>

              {/* Work Quality */}
              <View style={styles.ratingRow}>

                <View style={styles.ratingInfo}>

                  <Text style={styles.ratingTitle}>
                    Work Quality
                  </Text>

                  <Text style={styles.ratingDescription}>
                    Quality of construction and workmanship
                  </Text>

                </View>

                {renderStars('quality', 23)}

              </View>

              {/* Timeliness */}
              <View style={styles.ratingRow}>

                <View style={styles.ratingInfo}>

                  <Text style={styles.ratingTitle}>
                    Timeliness
                  </Text>

                  <Text style={styles.ratingDescription}>
                    Progress and adherence to schedule
                  </Text>

                </View>

                {renderStars('timeliness', 23)}

              </View>

              {/* Material Quality */}
              <View style={styles.ratingRow}>

                <View style={styles.ratingInfo}>

                  <Text style={styles.ratingTitle}>
                    Material Quality
                  </Text>

                  <Text style={styles.ratingDescription}>
                    Quality of materials being used
                  </Text>

                </View>

                {renderStars('materials', 23)}

              </View>

              {/* Site Management */}
              <View
                style={[
                  styles.ratingRow,
                  styles.lastRatingRow,
                ]}>

                <View style={styles.ratingInfo}>

                  <Text style={styles.ratingTitle}>
                    Site Management
                  </Text>

                  <Text style={styles.ratingDescription}>
                    Organization, safety and site handling
                  </Text>

                </View>

                {renderStars('management', 23)}

              </View>

            </View>

            {/* ================================= */}
            {/* WRITTEN FEEDBACK                  */}
            {/* ================================= */}

            <View style={styles.feedbackSection}>

              <Text style={styles.sectionTitle}>
                Additional Feedback
              </Text>

              <Text style={styles.sectionSubtitle}>
                Tell us about your experience with this
                contractor
              </Text>

              <TextInput
                value={review}
                onChangeText={setReview}
                placeholder="Write your experience here..."
                placeholderTextColor="#9CA3AF"
                multiline
                maxLength={500}
                textAlignVertical="top"
                style={styles.feedbackInput}
              />

              <Text style={styles.characterCount}>
                {review.length}/500
              </Text>

            </View>

            {/* ================================= */}
            {/* SUBMIT                             */}
            {/* ================================= */}

            <TouchableOpacity
              style={[
                styles.submitButton,
                ratings.overall === 0 &&
                  styles.submitButtonDisabled,
              ]}
              activeOpacity={0.8}
              disabled={ratings.overall === 0}
              onPress={handleSubmit}>

              <Check
                size={19}
                color={
                  ratings.overall === 0
                    ? '#9CA3AF'
                    : '#FFFFFF'
                }
                strokeWidth={2.6}
              />

              <Text
                style={[
                  styles.submitText,
                  ratings.overall === 0 &&
                    styles.submitTextDisabled,
                ]}>
                Submit Contractor Rating
              </Text>

            </TouchableOpacity>

            {ratings.overall === 0 && (
              <Text style={styles.requiredText}>
                Select an overall rating to submit
              </Text>
            )}

            <View style={styles.bottomSpace} />

          </ScrollView>

        </View>

      </View>

    </Modal>
  );
};

const styles = StyleSheet.create({

  /* ================================= */
  /* MODAL                             */
  /* ================================= */

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 24, 39, 0.45)',
    justifyContent: 'flex-end',
  },

  modalContainer: {
    width: '100%',
    height: '94%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: 'hidden',
  },

  /* ================================= */
  /* HEADER                            */
  /* ================================= */

  header: {
    minHeight: 76,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  headerTextContainer: {
    flex: 1,
    paddingRight: 10,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111827',
  },

  headerSubtitle: {
    marginTop: 4,
    fontSize: 12,
    lineHeight: 17,
    color: '#6B7280',
  },

  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ================================= */
  /* SCROLL                            */
  /* ================================= */

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 30,
  },

  /* ================================= */
  /* PROJECT CARD                      */
  /* ================================= */

  projectCard: {
    padding: 14,
    borderRadius: 18,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#EDE9FE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 21,
    fontWeight: '900',
    color: '#6D28D9',
  },

  projectInfo: {
    flex: 1,
    marginLeft: 12,
  },

  contractorName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
  },

  projectName: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: '600',
    color: '#4B5563',
  },

  location: {
    marginTop: 3,
    fontSize: 11,
    color: '#9CA3AF',
  },

  /* ================================= */
  /* OVERALL                           */
  /* ================================= */

  overallSection: {
    alignItems: 'center',
    paddingVertical: 23,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#111827',
  },

  sectionSubtitle: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 16,
    color: '#6B7280',
  },

  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13,
  },

  starButton: {
    paddingHorizontal: 3,
    paddingVertical: 2,
  },

  ratingText: {
    marginTop: 7,
    fontSize: 13,
    fontWeight: '800',
    color: '#7C3AED',
  },

  /* ================================= */
  /* DETAILS                           */
  /* ================================= */

  detailsSection: {
    paddingTop: 20,
  },

  ratingRow: {
    minHeight: 76,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  lastRatingRow: {
    borderBottomWidth: 0,
  },

  ratingInfo: {
    flex: 1,
    paddingRight: 7,
  },

  ratingTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1F2937',
  },

  ratingDescription: {
    marginTop: 3,
    fontSize: 10.5,
    lineHeight: 15,
    color: '#9CA3AF',
  },

  /* ================================= */
  /* FEEDBACK                          */
  /* ================================= */

  feedbackSection: {
    marginTop: 18,
  },

  feedbackInput: {
    marginTop: 11,
    minHeight: 115,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 13,
    paddingVertical: 12,
    fontSize: 13,
    lineHeight: 19,
    color: '#111827',
  },

  characterCount: {
    marginTop: 4,
    textAlign: 'right',
    fontSize: 10,
    color: '#9CA3AF',
  },

  /* ================================= */
  /* SUBMIT                            */
  /* ================================= */

  submitButton: {
    marginTop: 20,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#7C3AED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  submitButtonDisabled: {
    backgroundColor: '#E5E7EB',
  },

  submitText: {
    marginLeft: 8,
    fontSize: 13,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  submitTextDisabled: {
    color: '#9CA3AF',
  },

  requiredText: {
    marginTop: 8,
    fontSize: 11,
    textAlign: 'center',
    color: '#9CA3AF',
  },

  bottomSpace: {
    height: 20,
  },

});

export default ContractorRating;