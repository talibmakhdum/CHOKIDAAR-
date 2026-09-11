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
  X,
  Plus,
  Send,
} from 'lucide-react-native';

const NewSuggestion = () => {
  const [modalVisible, setModalVisible] =
    useState(false);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] =
    useState('');

  const handleSubmit = () => {
    console.log('Suggestion submitted:', {
      title,
      category,
      location,
      description,
    });

    setTitle('');
    setCategory('');
    setLocation('');
    setDescription('');

    setModalVisible(false);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>

      {/* Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.iconContainer}>
          <Plus
            size={22}
            color="#7C3AED"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Have an idea?
          </Text>

          <Text style={styles.subtitle}>
            Share your suggestion to help
            improve your community.
          </Text>
        </View>
      </View>

      {/* Create Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          setModalVisible(true)
        }
        style={styles.createButton}>

        <Plus
          size={20}
          color="#FFFFFF"
        />

        <Text style={styles.createButtonText}>
          Create New Suggestion
        </Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={handleClose}>

        <View style={styles.modalOverlay}>

          <View style={styles.modalContainer}>

            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>
                  New Suggestion
                </Text>

                <Text
                  style={
                    styles.modalSubtitle
                  }>
                  Share your idea with the
                  community
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleClose}
                style={styles.closeButton}>

                <X
                  size={20}
                  color="#374151"
                />
              </TouchableOpacity>
            </View>

            {/* Form */}
            <ScrollView
              showsVerticalScrollIndicator={
                false
              }
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={
                styles.formContent
              }>

              {/* Title */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>
                  Suggestion Title
                </Text>

                <TextInput
                  value={title}
                  onChangeText={setTitle}
                  placeholder="Enter suggestion title"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                />
              </View>

              {/* Category */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>
                  Category
                </Text>

                <TextInput
                  value={category}
                  onChangeText={setCategory}
                  placeholder="e.g. Roads, Water, Transport"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                />
              </View>

              {/* Location */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>
                  Location
                </Text>

                <TextInput
                  value={location}
                  onChangeText={setLocation}
                  placeholder="Enter location"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                />
              </View>

              {/* Description */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>
                  Description
                </Text>

                <TextInput
                  value={description}
                  onChangeText={
                    setDescription
                  }
                  placeholder="Describe your suggestion..."
                  placeholderTextColor="#9CA3AF"
                  style={[
                    styles.input,
                    styles.descriptionInput,
                  ]}
                  multiline
                  textAlignVertical="top"
                />
              </View>

              {/* Submit */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleSubmit}
                style={styles.submitButton}>

                <Send
                  size={18}
                  color="#FFFFFF"
                />

                <Text
                  style={
                    styles.submitButtonText
                  }>
                  Submit Suggestion
                </Text>
              </TouchableOpacity>

            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 30,
    paddingHorizontal: 24,
  },

  /* Section */
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111111',
  },

  subtitle: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 17,
    color: '#6B7280',
  },

  /* Create Button */
  createButton: {
    height: 52,
    borderRadius: 16,
    backgroundColor: '#7C3AED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#7C3AED',
    shadowOpacity: 0.18,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  createButtonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  /* Modal */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'flex-end',
  },

  modalContainer: {
    maxHeight: '88%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  /* Modal Header */
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  modalTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#111111',
  },

  modalSubtitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#6B7280',
  },

  closeButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Form */
  formContent: {
    paddingTop: 18,
    paddingBottom: 30,
  },

  inputGroup: {
    marginBottom: 16,
  },

  label: {
    marginBottom: 7,
    fontSize: 12,
    fontWeight: '800',
    color: '#374151',
  },

  input: {
    minHeight: 48,
    paddingHorizontal: 14,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FAFAFA',
    fontSize: 13,
    color: '#111111',
  },

  descriptionInput: {
    minHeight: 105,
    paddingTop: 13,
  },

  /* Submit */
  submitButton: {
    height: 50,
    marginTop: 4,
    borderRadius: 14,
    backgroundColor: '#7C3AED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  submitButtonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});

export default NewSuggestion;