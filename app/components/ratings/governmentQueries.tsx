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
  ChevronDown,
  MessageCircleQuestion,
  Send,
  X,
} from 'lucide-react-native';

import {projects} from '../../data/projects';

type GovernmentQueriesProps = {
  projectId: number;
  visible: boolean;
  onClose: () => void;
};

const GovernmentQueries = ({
  projectId,
  visible,
  onClose,
}: GovernmentQueriesProps) => {
  const project = projects.find(
    item => item.id === projectId,
  );

  const [query, setQuery] = useState('');
  const [issue, setIssue] = useState('');

  const [queryType, setQueryType] =
    useState('Project Status');

  const [issueType, setIssueType] =
    useState('Work Delayed');

  const [showQueryTypes, setShowQueryTypes] =
    useState(false);

  const [showIssueTypes, setShowIssueTypes] =
    useState(false);

  if (!project) {
    return null;
  }

  const queryTypes = [
    'Project Status',
    'Project Budget',
    'Project Progress',
    'Project Timeline',
    'Contractor',
    'Materials',
    'Other',
  ];

  const issueTypes = [
    'Work Delayed',
    'Work Incomplete',
    'Poor Quality',
    'Safety Issue',
    'Material Issue',
    'Wrong Information',
    'Contractor Issue',
    'Other',
  ];

  const resetForm = () => {
    setQuery('');
    setIssue('');
    setQueryType('Project Status');
    setIssueType('Work Delayed');
    setShowQueryTypes(false);
    setShowIssueTypes(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const submitQuery = () => {
    if (!query.trim()) {
      return;
    }

    console.log('Government Query Submitted:', {
      projectId: project.id,
      projectName: project.name,
      queryType,
      query,
    });

    setQuery('');
  };

  const submitIssue = () => {
    if (!issue.trim()) {
      return;
    }

    console.log('Project Issue Reported:', {
      projectId: project.id,
      projectName: project.name,
      issueType,
      issue,
    });

    setIssue('');
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
                Government
              </Text>

              <Text
                style={styles.subtitle}
                numberOfLines={2}>
                Ask questions or report issues about this project
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
          {/* FORM                              */}
          {/* ================================= */}

          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={
              styles.content
            }>

            {/* Project */}
            <View style={styles.projectCard}>

              <View style={styles.projectIcon}>
                <Text style={styles.projectEmoji}>
                  🏛️
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
            {/* ASK GOVERNMENT                   */}
            {/* ================================= */}

            <View style={styles.section}>

              <View style={styles.sectionHeader}>

                <View style={styles.sectionIcon}>
                  <MessageCircleQuestion
                    size={20}
                    color="#7C3AED"
                  />
                </View>

                <View style={styles.sectionHeaderText}>

                  <Text style={styles.sectionTitle}>
                    Ask Government
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Ask a question about this project
                  </Text>

                </View>

              </View>

              {/* Query Type */}
              <Text style={styles.fieldLabel}>
                Query Type
              </Text>

              <TouchableOpacity
                style={styles.dropdown}
                activeOpacity={0.8}
                onPress={() =>
                  setShowQueryTypes(
                    current => !current,
                  )
                }>

                <Text style={styles.dropdownText}>
                  {queryType}
                </Text>

                <ChevronDown
                  size={18}
                  color="#6B7280"
                />

              </TouchableOpacity>

              {showQueryTypes && (
                <View style={styles.dropdownList}>

                  {queryTypes.map(type => (

                    <TouchableOpacity
                      key={type}
                      style={styles.dropdownItem}
                      activeOpacity={0.7}
                      onPress={() => {
                        setQueryType(type);
                        setShowQueryTypes(false);
                      }}>

                      <Text
                        style={[
                          styles.dropdownItemText,
                          queryType === type &&
                            styles.selectedDropdownText,
                        ]}>
                        {type}
                      </Text>

                      {queryType === type && (
                        <Check
                          size={17}
                          color="#7C3AED"
                        />
                      )}

                    </TouchableOpacity>

                  ))}

                </View>
              )}

              {/* Question */}
              <Text style={styles.fieldLabel}>
                Your Question
              </Text>

              <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder="Write your question here..."
                placeholderTextColor="#9CA3AF"
                multiline
                maxLength={500}
                textAlignVertical="top"
                style={styles.textInput}
              />

              <Text style={styles.characterCount}>
                {query.length}/500
              </Text>

              <TouchableOpacity
                style={[
                  styles.primaryButton,
                  !query.trim() &&
                    styles.disabledButton,
                ]}
                activeOpacity={0.8}
                disabled={!query.trim()}
                onPress={submitQuery}>

                <Send
                  size={17}
                  color={
                    query.trim()
                      ? '#FFFFFF'
                      : '#9CA3AF'
                  }
                />

                <Text
                  style={[
                    styles.primaryButtonText,
                    !query.trim() &&
                      styles.disabledButtonText,
                  ]}>
                  Submit Query
                </Text>

              </TouchableOpacity>

            </View>

            {/* ================================= */}
            {/* REPORT ISSUE                     */}
            {/* ================================= */}

            <View style={styles.section}>

              <View style={styles.sectionHeader}>

                <View style={styles.issueIcon}>
                  <Text style={styles.issueEmoji}>
                    🚨
                  </Text>
                </View>

                <View style={styles.sectionHeaderText}>

                  <Text style={styles.sectionTitle}>
                    Report an Issue
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Tell the government about a project problem
                  </Text>

                </View>

              </View>

              {/* Issue Type */}
              <Text style={styles.fieldLabel}>
                Issue Type
              </Text>

              <TouchableOpacity
                style={styles.dropdown}
                activeOpacity={0.8}
                onPress={() =>
                  setShowIssueTypes(
                    current => !current,
                  )
                }>

                <Text style={styles.dropdownText}>
                  {issueType}
                </Text>

                <ChevronDown
                  size={18}
                  color="#6B7280"
                />

              </TouchableOpacity>

              {showIssueTypes && (
                <View style={styles.dropdownList}>

                  {issueTypes.map(type => (

                    <TouchableOpacity
                      key={type}
                      style={styles.dropdownItem}
                      activeOpacity={0.7}
                      onPress={() => {
                        setIssueType(type);
                        setShowIssueTypes(false);
                      }}>

                      <Text
                        style={[
                          styles.dropdownItemText,
                          issueType === type &&
                            styles.selectedDropdownText,
                        ]}>
                        {type}
                      </Text>

                      {issueType === type && (
                        <Check
                          size={17}
                          color="#7C3AED"
                        />
                      )}

                    </TouchableOpacity>

                  ))}

                </View>
              )}

              {/* Description */}
              <Text style={styles.fieldLabel}>
                Describe the Issue
              </Text>

              <TextInput
                value={issue}
                onChangeText={setIssue}
                placeholder="Describe what you observed..."
                placeholderTextColor="#9CA3AF"
                multiline
                maxLength={500}
                textAlignVertical="top"
                style={styles.textInput}
              />

              <Text style={styles.characterCount}>
                {issue.length}/500
              </Text>

              {/* Evidence Placeholder */}
              <View style={styles.evidenceBox}>

                <Text style={styles.evidenceEmoji}>
                  📎
                </Text>

                <View style={styles.evidenceInfo}>

                  <Text style={styles.evidenceTitle}>
                    Evidence
                  </Text>

                  <Text style={styles.evidenceSubtitle}>
                    Photos and videos can be added later
                  </Text>

                </View>

              </View>

              <TouchableOpacity
                style={[
                  styles.reportButton,
                  !issue.trim() &&
                    styles.disabledReportButton,
                ]}
                activeOpacity={0.8}
                disabled={!issue.trim()}
                onPress={submitIssue}>

                <Text style={styles.reportEmoji}>
                  🚨
                </Text>

                <Text
                  style={[
                    styles.reportButtonText,
                    !issue.trim() &&
                      styles.disabledReportText,
                  ]}>
                  Submit Issue Report
                </Text>

              </TouchableOpacity>

            </View>

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
    backgroundColor: '#DBEAFE',
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

  section: {
    marginTop: 18,
    padding: 15,
    borderRadius: 18,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  sectionIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#EDE9FE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  issueIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  issueEmoji: {
    fontSize: 20,
  },

  sectionHeaderText: {
    flex: 1,
    marginLeft: 11,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#111827',
  },

  sectionSubtitle: {
    marginTop: 3,
    fontSize: 11,
    lineHeight: 15,
    color: '#6B7280',
  },

  fieldLabel: {
    marginTop: 4,
    marginBottom: 7,
    fontSize: 12,
    fontWeight: '800',
    color: '#374151',
  },

  dropdown: {
    height: 44,
    paddingHorizontal: 13,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dropdownText: {
    fontSize: 12,
    color: '#374151',
  },

  dropdownList: {
    marginTop: 5,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },

  dropdownItem: {
    minHeight: 42,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  dropdownItemText: {
    fontSize: 12,
    color: '#4B5563',
  },

  selectedDropdownText: {
    fontWeight: '800',
    color: '#7C3AED',
  },

  textInput: {
    minHeight: 110,
    paddingHorizontal: 13,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
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

  primaryButton: {
    height: 46,
    marginTop: 13,
    borderRadius: 13,
    backgroundColor: '#7C3AED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryButtonText: {
    marginLeft: 7,
    fontSize: 12,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  disabledButton: {
    backgroundColor: '#E5E7EB',
  },

  disabledButtonText: {
    color: '#9CA3AF',
  },

  evidenceBox: {
    marginTop: 13,
    padding: 12,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
  },

  evidenceEmoji: {
    fontSize: 20,
  },

  evidenceInfo: {
    flex: 1,
    marginLeft: 9,
  },

  evidenceTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#374151',
  },

  evidenceSubtitle: {
    marginTop: 3,
    fontSize: 10,
    color: '#9CA3AF',
  },

  reportButton: {
    height: 46,
    marginTop: 13,
    borderRadius: 13,
    backgroundColor: '#DC2626',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledReportButton: {
    backgroundColor: '#F3F4F6',
  },

  reportEmoji: {
    fontSize: 16,
    marginRight: 7,
  },

  reportButtonText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  disabledReportText: {
    color: '#9CA3AF',
  },

  bottomSpace: {
    height: 30,
  },

});

export default GovernmentQueries;