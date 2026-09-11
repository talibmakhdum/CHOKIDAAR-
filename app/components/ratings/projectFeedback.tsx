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

type ProjectFeedbackProps = {
  projectId: number;
  visible: boolean;
  onClose: () => void;
};

type RatingCategory =
  | 'overall'
  | 'quality'
  | 'progress'
  | 'materials'
  | 'benefit'
  | 'transparency';

const ProjectFeedback = ({
  projectId,
  visible,
  onClose,
}: ProjectFeedbackProps) => {
  const project = projects.find(
    item => item.id === projectId,
  );

  const [ratings, setRatings] = useState({
    overall: 0,
    quality: 0,
    progress: 0,
    materials: 0,
    benefit: 0,
    transparency: 0,
  });

  const [feedback, setFeedback] = useState('');

  if (!project) {
    return null;
  }

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
      progress: 0,
      materials: 0,
      benefit: 0,
      transparency: 0,
    });

    setFeedback('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = () => {
    if (ratings.overall === 0) {
      return;
    }

    console.log('Project Feedback Submitted:', {
      projectId: project.id,
      projectName: project.name,
      ratings,
      feedback,
    });

    resetForm();
    onClose();
  };

  const renderStars = (
    category: RatingCategory,
    size = 27,
  ) => {
    const selectedRating = ratings[category];

    return (
      <View style={styles.starsRow}>
        {[1, 2, 3, 4, 5].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.starButton}
            activeOpacity={0.7}
            onPress={() =>
              setRating(category, number)
            }>

            <Star
              size={size}
              color={
                number <= selectedRating
                  ? '#F59E0B'
                  : '#D1D5DB'
              }
              fill={
                number <= selectedRating
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

            <View style={styles.headerText}>

              <Text style={styles.title}>
                Project Feedback
              </Text>

              <Text
                style={styles.subtitle}
                numberOfLines={2}>
                Share your experience with this project
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
              styles.content
            }>

            {/* Project Information */}
            <View style={styles.projectCard}>

              <View style={styles.projectIcon}>
                <Text style={styles.projectEmoji}>
                  🏗️
                </Text>
              </View>

              <View style={styles.projectInfo}>

                <Text
                  style={styles.projectName}
                  numberOfLines={2}>
                  {project.name}
                </Text>

                <Text
                  style={styles.projectLocation}
                  numberOfLines={1}>
                  📍 {project.location}
                </Text>

              </View>

            </View>

            {/* ================================= */}
            {/* OVERALL RATING                   */}
            {/* ================================= */}

            <View style={styles.overallSection}>

              <Text style={styles.sectionTitle}>
                Overall Project Rating
              </Text>

              <Text style={styles.sectionSubtitle}>
                How would you rate this project overall?
              </Text>

              {renderStars('overall', 36)}

              {ratings.overall > 0 && (
                <Text style={styles.selectedRating}>
                  {ratings.overall} / 5
                </Text>
              )}

            </View>

            {/* ================================= */}
            {/* DETAILED RATINGS                 */}
            {/* ================================= */}

            <View style={styles.detailsSection}>

              <Text style={styles.sectionTitle}>
                Rate Specific Areas
              </Text>

              <Text style={styles.sectionSubtitle}>
                Help evaluate different aspects of the project
              </Text>

              {/* Work Quality */}
              <View style={styles.ratingRow}>

                <View style={styles.ratingInfo}>

                  <Text style={styles.ratingTitle}>
                    Work Quality
                  </Text>

                  <Text style={styles.ratingDescription}>
                    Quality of the completed or ongoing work
                  </Text>

                </View>

                {renderStars('quality', 23)}

              </View>

              {/* Progress */}
              <View style={styles.ratingRow}>

                <View style={styles.ratingInfo}>

                  <Text style={styles.ratingTitle}>
                    Project Progress
                  </Text>

                  <Text style={styles.ratingDescription}>
                    Progress compared with the planned schedule
                  </Text>

                </View>

                {renderStars('progress', 23)}

              </View>

              {/* Materials */}
              <View style={styles.ratingRow}>

                <View style={styles.ratingInfo}>

                  <Text style={styles.ratingTitle}>
                    Material Quality
                  </Text>

                  <Text style={styles.ratingDescription}>
                    Quality of materials used in the project
                  </Text>

                </View>

                {renderStars('materials', 23)}

              </View>

              {/* Public Benefit */}
              <View style={styles.ratingRow}>

                <View style={styles.ratingInfo}>

                  <Text style={styles.ratingTitle}>
                    Public Benefit
                  </Text>

                  <Text style={styles.ratingDescription}>
                    Usefulness of the project to citizens
                  </Text>

                </View>

                {renderStars('benefit', 23)}

              </View>

              {/* Transparency */}
              <View
                style={[
                  styles.ratingRow,
                  styles.lastRatingRow,
                ]}>

                <View style={styles.ratingInfo}>

                  <Text style={styles.ratingTitle}>
                    Transparency
                  </Text>

                  <Text style={styles.ratingDescription}>
                    Availability and clarity of project information
                  </Text>

                </View>

                {renderStars('transparency', 23)}

              </View>

            </View>

            {/* ================================= */}
            {/* WRITTEN FEEDBACK                 */}
            {/* ================================= */}

            <View style={styles.feedbackSection}>

              <Text style={styles.sectionTitle}>
                Your Feedback
              </Text>

              <Text style={styles.sectionSubtitle}>
                Tell us what you observed about this project
              </Text>

              <TextInput
                value={feedback}
                onChangeText={setFeedback}
                placeholder="Write your feedback here..."
                placeholderTextColor="#9CA3AF"
                multiline
                maxLength={500}
                textAlignVertical="top"
                style={styles.feedbackInput}
              />

              <Text style={styles.characterCount}>
                {feedback.length}/500
              </Text>

            </View>

            {/* ================================= */}
            {/* EVIDENCE PLACEHOLDER             */}
            {/* ================================= */}

            <View style={styles.evidenceSection}>

              <View style={styles.evidenceHeader}>

                <Text style={styles.evidenceIcon}>
                  📎
                </Text>

                <View style={styles.evidenceText}>

                  <Text style={styles.evidenceTitle}>
                    Evidence
                  </Text>

                  <Text style={styles.evidenceSubtitle}>
                    Photos and videos can be added here later
                  </Text>

                </View>

              </View>

              <View style={styles.evidencePlaceholder}>

                <Text style={styles.placeholderText}>
                  Evidence upload will be available soon
                </Text>

              </View>

            </View>

            {/* ================================= */}
            {/* SUBMIT                            */}
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
                strokeWidth={2.5}
              />

              <Text
                style={[
                  styles.submitText,
                  ratings.overall === 0 &&
                    styles.submitTextDisabled,
                ]}>
                Submit Project Feedback
              </Text>

            </TouchableOpacity>

            {ratings.overall === 0 && (
              <Text style={styles.requiredText}>
                Select an overall rating to continue
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

  header: {
    minHeight: 76,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  headerText: {
    flex: 1,
    paddingRight: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111827',
  },

  subtitle: {
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

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 30,
  },

  projectCard: {
    padding: 14,
    borderRadius: 18,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
  },

  projectIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  projectEmoji: {
    fontSize: 23,
  },

  projectInfo: {
    flex: 1,
    marginLeft: 12,
  },

  projectName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
  },

  projectLocation: {
    marginTop: 4,
    fontSize: 11,
    color: '#6B7280',
  },

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
    textAlign: 'center',
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

  selectedRating: {
    marginTop: 7,
    fontSize: 13,
    fontWeight: '800',
    color: '#7C3AED',
  },

  detailsSection: {
    paddingTop: 20,
  },

  ratingRow: {
    minHeight: 78,
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
    paddingRight: 6,
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

  feedbackSection: {
    marginTop: 19,
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

  evidenceSection: {
    marginTop: 18,
    padding: 14,
    borderRadius: 16,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  evidenceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  evidenceIcon: {
    fontSize: 20,
  },

  evidenceText: {
    flex: 1,
    marginLeft: 9,
  },

  evidenceTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1F2937',
  },

  evidenceSubtitle: {
    marginTop: 3,
    fontSize: 10.5,
    color: '#9CA3AF',
  },

  evidencePlaceholder: {
    marginTop: 11,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#D1D5DB',
    alignItems: 'center',
  },

  placeholderText: {
    fontSize: 10.5,
    color: '#9CA3AF',
  },

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
    height: 25,
  },

});

export default ProjectFeedback;