import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Check,
  MapPin,
  CalendarDays,
  Clock3,
  Building2,
  Star,
  ShieldCheck,
  BadgeCheck,
  Trash2,
} from 'lucide-react-native';

import {
  Defs,
  LinearGradient,
  Rect,
  Stop,
  Svg,
  Circle,
} from 'react-native-svg';

import {useSavedProjects} from '../../context/SavedProjectsContext';

type ProjectCardProps = {
  project: any;
};

const ProjectCard = ({
  project,
}: ProjectCardProps) => {
  const {toggleSaveProject} = useSavedProjects();

  /* =====================================================
     PROJECT PROGRESS GRADIENT
     SAME AS NEARBY PROJECTS
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
     PROJECT PROGRESS TEXT COLOR
     SAME AS NEARBY PROJECTS
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

  const gradient =
    getProgressGradient(project.progress);

  /* =====================================================
     TRANSPARENCY CIRCLE
  ===================================================== */

  const transparencyScore = Math.max(
    0,
    Math.min(
      100,
      Number(project.transparencyScore) || 0,
    ),
  );

  const circleRadius = 34;
  const circleCircumference =
    2 * Math.PI * circleRadius;

  const transparencyDash =
    (transparencyScore / 100) *
    circleCircumference;

  return (
    <View style={styles.card}>

      {/* =================================================
          HEADER
      ================================================= */}

      <View style={styles.headerRow}>

        <View style={styles.titleContainer}>

          <Text style={styles.title}>
            {project.name}
          </Text>

          <View style={styles.locationRow}>

            <MapPin
              size={15}
              color="#6B7280"
            />

            <Text style={styles.location}>
              {project.location}
            </Text>

          </View>

        </View>

        {/* DELETE / REMOVE BUTTON */}

        <TouchableOpacity
          style={styles.deleteButton}
          activeOpacity={1}
          onPress={() =>
            toggleSaveProject(project.id)
          }>

          <Trash2
            size={17}
            color="#DC2626"
            strokeWidth={2.3}
          />

        </TouchableOpacity>

      </View>

      {/* =================================================
          DEPARTMENT
      ================================================= */}

      <Text style={styles.department}>
        {project.department}
      </Text>

      {/* =================================================
          STATUS
      ================================================= */}

      <View style={styles.statusRow}>

        <View
          style={[
            styles.statusDot,
            {
              backgroundColor:
                project.status === 'Completed'
                  ? '#16A34A'
                  : project.status === 'Delayed'
                  ? '#DC2626'
                  : '#F59E0B',
            },
          ]}
        />

        <Text style={styles.statusText}>
          {project.status}
        </Text>

      </View>

      {/* =================================================
          TRANSPARENCY SCORE
      ================================================= */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          Transparency Score
        </Text>

        <View style={styles.transparencyRow}>

          {/* CIRCULAR SCORE */}

          <View style={styles.scoreCircle}>

            <Svg
              width={78}
              height={78}
              viewBox="0 0 78 78">

              {/* BACKGROUND CIRCLE */}

              <Circle
                cx="39"
                cy="39"
                r={circleRadius}
                stroke="#E0F2FE"
                strokeWidth="7"
                fill="none"
              />

              {/* SCORE CIRCLE */}

              <Circle
                cx="39"
                cy="39"
                r={circleRadius}
                stroke="#38BDF8"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${transparencyDash} ${circleCircumference}`}
                rotation="-90"
                origin="39, 39"
              />

            </Svg>

            {/* PERCENTAGE */}

            <View style={styles.scoreCenter}>

              <Text style={styles.score}>
                {transparencyScore}%
              </Text>

            </View>

          </View>

          {/* SCORE INFORMATION */}

          <View style={styles.scoreInfo}>

            <Text style={styles.scoreLabel}>
              Project Transparency
            </Text>

            <Text style={styles.scoreDescription}>
              Based on project progress, financial
              information and official inspections.
            </Text>

          </View>

        </View>

      </View>

      {/* =================================================
          PROJECT PROGRESS
      ================================================= */}

      <View style={styles.section}>

        <View style={styles.progressHeader}>

          <Text style={styles.progressLabel}>
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
            SAME SVG GRADIENT BAR AS NEARBY PROJECTS
        ================================================= */}

        <View style={styles.progressTrack}>

          <Svg
            width="100%"
            height="100%"
            viewBox="0 0 100 7"
            preserveAspectRatio="none">

            <Defs>

              <LinearGradient
                id={`project-gradient-${project.id}`}
                x1="0"
                y1="0"
                x2="1"
                y2="0">

                <Stop
                  offset="0"
                  stopColor={gradient.start}
                />

                <Stop
                  offset="0.5"
                  stopColor={gradient.middle}
                />

                <Stop
                  offset="1"
                  stopColor={gradient.end}
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
              width={project.progress}
              height="7"
              rx="3.5"
              fill={`url(#project-gradient-${project.id})`}
            />

          </Svg>

        </View>

        {/* =================================================
            DATES
        ================================================= */}

        <View style={styles.dateRow}>

          <View>

            <Text style={styles.smallLabel}>
              Started
            </Text>

            <Text style={styles.smallValue}>
              {project.startDate}
            </Text>

          </View>

          <View style={styles.dateRight}>

            <Text style={styles.smallLabel}>
              Expected Completion
            </Text>

            <Text style={styles.smallValue}>
              {project.expectedCompletion}
            </Text>

          </View>

        </View>

        {/* CURRENT STAGE */}

        <View style={styles.stageBox}>

          <Clock3
            size={16}
            color="#7C3AED"
          />

          <Text style={styles.stageText}>
            Current Stage: {project.currentStage}
          </Text>

        </View>

      </View>

      {/* =================================================
          COST & BUDGET
      ================================================= */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          Cost & Budget
        </Text>

        <View style={styles.infoGrid}>

          <View style={styles.infoBox}>

            <Text style={styles.smallLabel}>
              Approved
            </Text>

            <Text style={styles.infoValue}>
              {project.budget}
            </Text>

          </View>

          <View style={styles.infoBox}>

            <Text style={styles.smallLabel}>
              Spent
            </Text>

            <Text style={styles.infoValue}>
              {project.spent}
            </Text>

          </View>

          <View style={styles.infoBox}>

            <Text style={styles.smallLabel}>
              Remaining
            </Text>

            <Text style={styles.infoValue}>
              {project.remaining}
            </Text>

          </View>

        </View>

      </View>

      {/* =================================================
          MATERIAL USAGE
      ================================================= */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          Material Usage
        </Text>

        {project.materials?.map(
          (material: any, index: number) => (

            <View
              key={index}
              style={styles.materialRow}>

              <View style={styles.materialHeader}>

                <Text style={styles.materialName}>
                  {material.name}
                </Text>

                <Text style={styles.materialValue}>
                  {material.used} / {material.planned}
                </Text>

              </View>

              <View style={styles.materialBackground}>

                <View
                  style={[
                    styles.materialFill,
                    {
                      width: `${material.percentage}%`,
                    },
                  ]}
                />

              </View>

            </View>

          ),
        )}

      </View>

      {/* =================================================
          TIMELINE
      ================================================= */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          Project Timeline
        </Text>

        {project.timeline?.map(
          (item: any, index: number) => (

            <View
              key={index}
              style={styles.timelineRow}>

              <View
                style={[
                  styles.timelineDot,
                  item.completed &&
                    styles.timelineCompleted,
                ]}>

                {item.completed && (
                  <Check
                    size={11}
                    color="#FFFFFF"
                  />
                )}

              </View>

              <View style={styles.timelineContent}>

                <Text style={styles.timelineTitle}>
                  {item.title}
                </Text>

                <Text style={styles.timelineDate}>
                  {item.date}
                </Text>

              </View>

            </View>

          ),
        )}

      </View>

      {/* =================================================
          CONTRACTOR
      ================================================= */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          Contractor
        </Text>

        <View style={styles.contractorRow}>

          <View style={styles.contractorIcon}>

            <Building2
              size={22}
              color="#7C3AED"
            />

          </View>

          <View style={styles.contractorInfo}>

            <Text style={styles.contractorName}>
              {project.contractor?.name}
            </Text>

            <View style={styles.ratingRow}>

              <Star
                size={14}
                color="#F59E0B"
                fill="#F59E0B"
              />

              <Text style={styles.rating}>
                {project.contractor?.rating}
              </Text>

              <Text style={styles.ratingText}>
                • {project.contractor?.projects} projects
              </Text>

            </View>

          </View>

        </View>

      </View>

      {/* =================================================
          GOVERNMENT INSPECTION
      ================================================= */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          Government Inspection
        </Text>

        <View style={styles.inspectionBox}>

          <View style={styles.inspectionRow}>

            <BadgeCheck
              size={17}
              color="#16A34A"
            />

            <Text style={styles.inspectionText}>
              {project.inspection?.status}
            </Text>

          </View>

          <View style={styles.inspectionRow}>

            <CalendarDays
              size={17}
              color="#6B7280"
            />

            <Text style={styles.inspectionText}>
              Last inspected:{' '}
              {project.inspection?.lastInspected}
            </Text>

          </View>

          <View style={styles.inspectionRow}>

            <ShieldCheck
              size={17}
              color="#16A34A"
            />

            <Text style={styles.inspectionText}>
              Safety: {project.inspection?.safety}
            </Text>

          </View>

        </View>

      </View>

      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          About Project
        </Text>

        <Text style={styles.description}>
          {project.description}
        </Text>

      </View>

    </View>
  );
};

/* =====================================================
   STYLES
===================================================== */

const styles = StyleSheet.create({

  /* CARD */

  card: {
    marginHorizontal: 0,
    marginBottom: 24,
    padding: 20,

    borderRadius: 22,

    backgroundColor: '#FFFFFF',

    borderWidth: 1.5,
    borderColor: '#5B21B6',

    shadowColor: '#5B21B6',
    shadowOpacity: 0.12,
    shadowRadius: 6,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  /* HEADER */

  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  titleContainer: {
    flex: 1,
    paddingRight: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111111',
    lineHeight: 29,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 5,
  },

  location: {
    fontSize: 13,
    color: '#6B7280',
  },

  /* DELETE BUTTON */

  deleteButton: {
    width: 36,
    height: 36,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FEF2F2',

    borderWidth: 1,
    borderColor: '#FECACA',
  },

  /* DEPARTMENT */

  department: {
    marginTop: 14,
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
  },

  /* STATUS */

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',

    marginTop: 12,

    paddingHorizontal: 11,
    paddingVertical: 7,

    borderRadius: 20,

    backgroundColor: '#F3F4F6',

    gap: 7,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },

  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#374151',
  },

  /* SECTION */

  section: {
    marginTop: 24,
    paddingTop: 20,

    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111111',
    marginBottom: 14,
  },

  /* TRANSPARENCY */

  transparencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  scoreCircle: {
    width: 78,
    height: 78,

    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  },

  scoreCenter: {
    position: 'absolute',

    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    alignItems: 'center',
    justifyContent: 'center',
  },

  score: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0284C7',
  },

  scoreInfo: {
    flex: 1,
    marginLeft: 16,
  },

  scoreLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
  },

  scoreDescription: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 18,
    color: '#6B7280',
  },

  /* PROJECT PROGRESS */

  progressHeader: {
    marginTop: 0,
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

  /* DATES */

  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },

  dateRight: {
    alignItems: 'flex-end',
  },

  smallLabel: {
    fontSize: 11,
    color: '#9CA3AF',
  },

  smallValue: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: '700',
    color: '#374151',
  },

  /* STAGE */

  stageBox: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 14,
    padding: 12,

    borderRadius: 12,

    backgroundColor: '#F5F3FF',

    gap: 8,
  },

  stageText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6D28D9',
  },

  /* COST */

  infoGrid: {
    flexDirection: 'row',
    gap: 8,
  },

  infoBox: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
  },

  infoValue: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '800',
    color: '#111111',
  },

  /* MATERIALS */

  materialRow: {
    marginBottom: 14,
  },

  materialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  materialName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
  },

  materialValue: {
    fontSize: 12,
    color: '#6B7280',
  },

  materialBackground: {
    height: 7,
    marginTop: 7,

    borderRadius: 10,

    backgroundColor: '#EDE9FE',

    overflow: 'hidden',
  },

  materialFill: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#7C3AED',
  },

  /* TIMELINE */

  timelineRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },

  timelineDot: {
    width: 22,
    height: 22,
    borderRadius: 11,

    borderWidth: 2,
    borderColor: '#D1D5DB',

    alignItems: 'center',
    justifyContent: 'center',
  },

  timelineCompleted: {
    backgroundColor: '#16A34A',
    borderColor: '#16A34A',
  },

  timelineContent: {
    flex: 1,
    marginLeft: 11,
  },

  timelineTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#374151',
  },

  timelineDate: {
    marginTop: 3,
    fontSize: 11,
    color: '#9CA3AF',
  },

  /* CONTRACTOR */

  contractorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  contractorIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,

    backgroundColor: '#F5F3FF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  contractorInfo: {
    flex: 1,
    marginLeft: 12,
  },

  contractorName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111111',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 4,
  },

  rating: {
    fontSize: 12,
    fontWeight: '700',
    color: '#374151',
  },

  ratingText: {
    fontSize: 12,
    color: '#6B7280',
  },

  /* INSPECTION */

  inspectionBox: {
    padding: 14,
    borderRadius: 14,

    backgroundColor: '#F9FAFB',

    gap: 11,
  },

  inspectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  inspectionText: {
    flex: 1,
    fontSize: 12,
    color: '#374151',
  },

  /* DESCRIPTION */

  description: {
    fontSize: 13,
    lineHeight: 20,
    color: '#6B7280',
  },
});

export default ProjectCard;