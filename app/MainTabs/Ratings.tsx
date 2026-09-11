import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Building2,
  MessageCircleQuestion,
  SquarePen,
  Star,
  Users,
} from 'lucide-react-native';

import TopNavbar from '../components/navigation/topnavbar';

import ContractorRating from '../components/ratings/contractorRating';
import ProjectFeedback from '../components/ratings/projectFeedback';
import GovernmentQueries from '../components/ratings/governmentQueries';

import {projects} from '../data/projects';
import {useSavedProjects} from '../context/SavedProjectsContext';

type PopupType =
  | 'contractor'
  | 'project'
  | 'government'
  | null;

const Ratings = () => {
  const {savedProjects} = useSavedProjects();

  const [popupType, setPopupType] =
    useState<PopupType>(null);

  const [selectedProjectId, setSelectedProjectId] =
    useState<number | null>(null);

  const savedProjectDetails = projects.filter(
    project => savedProjects.includes(project.id),
  );

  const openForm = (
    type: Exclude<PopupType, null>,
    projectId: number,
  ) => {
    setSelectedProjectId(projectId);
    setPopupType(type);
  };

  const closeForm = () => {
    setPopupType(null);
    setSelectedProjectId(null);
  };

  return (
    <View style={styles.container}>

      <TopNavbar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>

        {/* PAGE HEADER */}
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>
            Ratings & Feedback
          </Text>

          <Text style={styles.pageSubtitle}>
            Share your experience and help improve public projects.
          </Text>
        </View>

        {/* EMPTY STATE */}
        {savedProjectDetails.length === 0 ? (
          <View style={styles.emptyCard}>

            <View style={styles.emptyIcon}>
              <Star
                size={28}
                color="#7C3AED"
                strokeWidth={2}
              />
            </View>

            <Text style={styles.emptyTitle}>
              No Saved Projects
            </Text>

            <Text style={styles.emptyText}>
              Save a project first to rate the contractor,
              give project feedback, or contact the government.
            </Text>

          </View>
        ) : (

          <>
            {savedProjectDetails.map(project => (

              <View
                key={project.id}
                style={styles.projectCard}>

                {/* PROJECT HEADER */}
                <View style={styles.projectHeader}>

                  <View style={styles.projectIcon}>
                    <Building2
                      size={22}
                      color="#7C3AED"
                      strokeWidth={2}
                    />
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

                {/* 1. CONTRACTOR RATING */}
                <View style={styles.actionRow}>

                  <View style={styles.actionLeft}>

                    <View
                      style={[
                        styles.actionIcon,
                        styles.contractorIcon,
                      ]}>

                      <Users
                        size={20}
                        color="#2563EB"
                        strokeWidth={2}
                      />

                    </View>

                    <View style={styles.actionText}>

                      <Text style={styles.actionTitle}>
                        Contractor Rating
                      </Text>

                      <Text style={styles.actionSubtitle}>
                        Rate the contractor's work and management
                      </Text>

                    </View>

                  </View>

                  <TouchableOpacity
                    style={styles.editButton}
                    activeOpacity={0.75}
                    onPress={() =>
                      openForm(
                        'contractor',
                        project.id,
                      )
                    }>

                    <SquarePen
                      size={19}
                      color="#7C3AED"
                      strokeWidth={2.2}
                    />

                  </TouchableOpacity>

                </View>

                {/* 2. PROJECT FEEDBACK */}
                <View style={styles.actionRow}>

                  <View style={styles.actionLeft}>

                    <View
                      style={[
                        styles.actionIcon,
                        styles.feedbackIcon,
                      ]}>

                      <Star
                        size={20}
                        color="#F59E0B"
                        strokeWidth={2}
                      />

                    </View>

                    <View style={styles.actionText}>

                      <Text style={styles.actionTitle}>
                        Project Feedback
                      </Text>

                      <Text style={styles.actionSubtitle}>
                        Rate the quality, progress and benefit
                      </Text>

                    </View>

                  </View>

                  <TouchableOpacity
                    style={styles.editButton}
                    activeOpacity={0.75}
                    onPress={() =>
                      openForm(
                        'project',
                        project.id,
                      )
                    }>

                    <SquarePen
                      size={19}
                      color="#7C3AED"
                      strokeWidth={2.2}
                    />

                  </TouchableOpacity>

                </View>

                {/* 3. GOVERNMENT QUERY */}
                <View
                  style={[
                    styles.actionRow,
                    styles.lastActionRow,
                  ]}>

                  <View style={styles.actionLeft}>

                    <View
                      style={[
                        styles.actionIcon,
                        styles.governmentIcon,
                      ]}>

                      <MessageCircleQuestion
                        size={20}
                        color="#16A34A"
                        strokeWidth={2}
                      />

                    </View>

                    <View style={styles.actionText}>

                      <Text style={styles.actionTitle}>
                        Government Query
                      </Text>

                      <Text style={styles.actionSubtitle}>
                        Ask questions or report project issues
                      </Text>

                    </View>

                  </View>

                  <TouchableOpacity
                    style={styles.editButton}
                    activeOpacity={0.75}
                    onPress={() =>
                      openForm(
                        'government',
                        project.id,
                      )
                    }>

                    <SquarePen
                      size={19}
                      color="#7C3AED"
                      strokeWidth={2.2}
                    />

                  </TouchableOpacity>

                </View>

              </View>

            ))}
          </>

        )}

        <View style={styles.bottomSpace} />

      </ScrollView>

      {/* CONTRACTOR FORM */}
      {popupType === 'contractor' &&
        selectedProjectId !== null && (
          <ContractorRating
            projectId={selectedProjectId}
            visible={true}
            onClose={closeForm}
          />
        )}

      {/* PROJECT FEEDBACK FORM */}
      {popupType === 'project' &&
        selectedProjectId !== null && (
          <ProjectFeedback
            projectId={selectedProjectId}
            visible={true}
            onClose={closeForm}
          />
        )}

      {/* GOVERNMENT QUERY FORM */}
      {popupType === 'government' &&
        selectedProjectId !== null && (
          <GovernmentQueries
            projectId={selectedProjectId}
            visible={true}
            onClose={closeForm}
          />
        )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FC',
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 30,
  },

  pageHeader: {
    marginBottom: 18,
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111827',
  },

  pageSubtitle: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 18,
    color: '#6B7280',
  },

  projectCard: {
    marginBottom: 18,
    padding: 16,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#111827',
    shadowOpacity: 0.06,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },

  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  projectIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  projectInfo: {
    flex: 1,
    marginLeft: 12,
  },

  projectName: {
    fontSize: 14,
    fontWeight: '900',
    color: '#111827',
  },

  projectLocation: {
    marginTop: 4,
    fontSize: 11,
    color: '#6B7280',
  },

  actionRow: {
    minHeight: 76,
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  lastActionRow: {
    borderBottomWidth: 0,
  },

  actionLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  actionIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contractorIcon: {
    backgroundColor: '#DBEAFE',
  },

  feedbackIcon: {
    backgroundColor: '#FEF3C7',
  },

  governmentIcon: {
    backgroundColor: '#DCFCE7',
  },

  actionText: {
    flex: 1,
    marginLeft: 11,
    paddingRight: 8,
  },

  actionTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1F2937',
  },

  actionSubtitle: {
    marginTop: 3,
    fontSize: 10.5,
    lineHeight: 15,
    color: '#9CA3AF',
  },

  editButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD6FE',
  },

  emptyCard: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
  },

  emptyIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#111827',
  },

  emptyText: {
    marginTop: 7,
    fontSize: 11,
    lineHeight: 17,
    color: '#6B7280',
    textAlign: 'center',
  },

  bottomSpace: {
    height: 40,
  },
});

export default Ratings;