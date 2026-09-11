export const projects = [
  {
    id: 1,
    name: 'City Road Development',
    location: 'Jaipur, Rajasthan',
    department: 'Public Works Department',
    status: 'In Progress',

    transparencyScore: 84,

    progress: 68,
    startDate: 'Jan 2026',
    expectedCompletion: 'Dec 2026',
    currentStage: 'Foundation Work',

    budget: '₹24.5 Cr',
    spent: '₹14.8 Cr',
    remaining: '₹9.7 Cr',

    materials: [
      {
        name: 'Cement',
        planned: '1,350 bags',
        used: '1,200 bags',
        percentage: 89,
      },
      {
        name: 'Steel',
        planned: '90 tons',
        used: '82 tons',
        percentage: 91,
      },
      {
        name: 'Concrete',
        planned: '720 m³',
        used: '680 m³',
        percentage: 94,
      },
      {
        name: 'Bitumen',
        planned: '120 tons',
        used: '105 tons',
        percentage: 88,
      },
    ],

    timeline: [
      {
        title: 'Project Approved',
        date: 'January 2026',
        completed: true,
      },
      {
        title: 'Contractor Selected',
        date: 'February 2026',
        completed: true,
      },
      {
        title: 'Construction Started',
        date: 'March 2026',
        completed: true,
      },
      {
        title: 'Foundation Work',
        date: 'Current Stage',
        completed: false,
      },
      {
        title: 'Main Construction',
        date: 'Upcoming',
        completed: false,
      },
      {
        title: 'Project Completion',
        date: 'December 2026',
        completed: false,
      },
    ],

    contractor: {
      name: 'ABC Infrastructure Pvt. Ltd.',
      rating: 4.2,
      projects: 38,
      completed: 31,
      delayed: 5,
      ongoing: 2,
    },

    inspection: {
      lastInspected: '18 Aug 2026',
      inspectedBy: 'Assistant Executive Engineer',
      status: 'Work progressing as expected',
      workQuality: 'Good',
      materialQuality: 'Verified',
      safety: 'Compliant',
      issues: 'None',
      nextInspection: '02 Sep 2026',
      remarks:
        'Foundation work is progressing according to the approved project plan. Materials were inspected and found satisfactory.',
    },

    description:
      'Development and improvement of major city roads and connecting routes.',
  },

  {
    id: 2,
    name: 'Government School Renovation',
    location: 'Jaipur, Rajasthan',
    department: 'Education Department',
    status: 'In Progress',

    transparencyScore: 91,

    progress: 58,
    startDate: 'Feb 2026',
    expectedCompletion: 'Nov 2026',
    currentStage: 'Building Renovation',

    budget: '₹8.6 Cr',
    spent: '₹4.9 Cr',
    remaining: '₹3.7 Cr',

    materials: [
      {
        name: 'Cement',
        planned: '850 bags',
        used: '760 bags',
        percentage: 89,
      },
      {
        name: 'Steel',
        planned: '45 tons',
        used: '39 tons',
        percentage: 87,
      },
      {
        name: 'Concrete',
        planned: '420 m³',
        used: '360 m³',
        percentage: 86,
      },
      {
        name: 'Tiles',
        planned: '8,000 m²',
        used: '5,900 m²',
        percentage: 74,
      },
    ],

    timeline: [
      {
        title: 'Project Approved',
        date: 'January 2026',
        completed: true,
      },
      {
        title: 'Contractor Selected',
        date: 'February 2026',
        completed: true,
      },
      {
        title: 'Renovation Started',
        date: 'March 2026',
        completed: true,
      },
      {
        title: 'Building Renovation',
        date: 'Current Stage',
        completed: false,
      },
      {
        title: 'Electrical Work',
        date: 'Upcoming',
        completed: false,
      },
      {
        title: 'Project Completion',
        date: 'November 2026',
        completed: false,
      },
    ],

    contractor: {
      name: 'Rajasthan BuildWorks Pvt. Ltd.',
      rating: 4.5,
      projects: 42,
      completed: 36,
      delayed: 3,
      ongoing: 3,
    },

    inspection: {
      lastInspected: '20 Aug 2026',
      inspectedBy: 'Executive Engineer',
      status: 'Work progressing normally',
      workQuality: 'Good',
      materialQuality: 'Verified',
      safety: 'Compliant',
      issues: 'Minor paint work pending',
      nextInspection: '05 Sep 2026',
      remarks:
        'Renovation work is progressing satisfactorily. Materials and workmanship were found acceptable during inspection.',
    },

    description:
      'Renovation and modernization of classrooms, sanitation facilities and school infrastructure.',
  },

  {
    id: 3,
    name: 'Water Pipeline Project',
    location: 'Jaipur, Rajasthan',
    department: 'Public Health Engineering Department',
    status: 'In Progress',

    transparencyScore: 76,

    progress: 76,
    startDate: 'Jan 2026',
    expectedCompletion: 'Oct 2026',
    currentStage: 'Pipeline Installation',

    budget: '₹16.8 Cr',
    spent: '₹12.1 Cr',
    remaining: '₹4.7 Cr',

    materials: [
      {
        name: 'Pipes',
        planned: '18 km',
        used: '14 km',
        percentage: 78,
      },
      {
        name: 'Cement',
        planned: '620 bags',
        used: '560 bags',
        percentage: 90,
      },
      {
        name: 'Steel',
        planned: '32 tons',
        used: '28 tons',
        percentage: 88,
      },
      {
        name: 'Concrete',
        planned: '280 m³',
        used: '245 m³',
        percentage: 88,
      },
    ],

    timeline: [
      {
        title: 'Project Approved',
        date: 'January 2026',
        completed: true,
      },
      {
        title: 'Survey Completed',
        date: 'February 2026',
        completed: true,
      },
      {
        title: 'Pipeline Work Started',
        date: 'March 2026',
        completed: true,
      },
      {
        title: 'Pipeline Installation',
        date: 'Current Stage',
        completed: false,
      },
      {
        title: 'Testing',
        date: 'Upcoming',
        completed: false,
      },
      {
        title: 'Project Completion',
        date: 'October 2026',
        completed: false,
      },
    ],

    contractor: {
      name: 'Jal Infra Solutions',
      rating: 4.0,
      projects: 27,
      completed: 21,
      delayed: 4,
      ongoing: 2,
    },

    inspection: {
      lastInspected: '16 Aug 2026',
      inspectedBy: 'Assistant Engineer',
      status: 'Work progressing with minor delays',
      workQuality: 'Good',
      materialQuality: 'Verified',
      safety: 'Compliant',
      issues: 'Minor pipeline alignment issue',
      nextInspection: '30 Aug 2026',
      remarks:
        'Pipeline installation is progressing. A minor alignment issue was identified and corrective work was recommended.',
    },

    description:
      'Installation of a new water pipeline network to improve water supply coverage in the city.',
  },

  {
    id: 4,
    name: 'Community Park Development',
    location: 'Jaipur, Rajasthan',
    department: 'Municipal Corporation',
    status: 'Completed',

    transparencyScore: 96,

    progress: 100,
    startDate: 'Jun 2025',
    expectedCompletion: 'Jul 2026',
    currentStage: 'Project Completed',

    budget: '₹5.2 Cr',
    spent: '₹5.0 Cr',
    remaining: '₹0.2 Cr',

    materials: [
      {
        name: 'Cement',
        planned: '540 bags',
        used: '525 bags',
        percentage: 97,
      },
      {
        name: 'Steel',
        planned: '20 tons',
        used: '19 tons',
        percentage: 95,
      },
      {
        name: 'Concrete',
        planned: '190 m³',
        used: '185 m³',
        percentage: 97,
      },
      {
        name: 'Tiles',
        planned: '4,500 m²',
        used: '4,420 m²',
        percentage: 98,
      },
    ],

    timeline: [
      {
        title: 'Project Approved',
        date: 'June 2025',
        completed: true,
      },
      {
        title: 'Contractor Selected',
        date: 'July 2025',
        completed: true,
      },
      {
        title: 'Construction Started',
        date: 'August 2025',
        completed: true,
      },
      {
        title: 'Park Development',
        date: 'May 2026',
        completed: true,
      },
      {
        title: 'Final Inspection',
        date: 'July 2026',
        completed: true,
      },
      {
        title: 'Project Completed',
        date: 'July 2026',
        completed: true,
      },
    ],

    contractor: {
      name: 'GreenCity Developers',
      rating: 4.7,
      projects: 51,
      completed: 47,
      delayed: 2,
      ongoing: 2,
    },

    inspection: {
      lastInspected: '28 Jul 2026',
      inspectedBy: 'Executive Engineer',
      status: 'Project completed successfully',
      workQuality: 'Excellent',
      materialQuality: 'Verified',
      safety: 'Compliant',
      issues: 'None',
      nextInspection: 'Not Required',
      remarks:
        'The completed park was inspected and found to meet the approved specifications and quality requirements.',
    },

    description:
      'Development of a public community park with walking paths, green spaces, lighting and recreational facilities.',
  },
  {
  id: 5,
  name: 'Primary Health Center Upgrade',
  distance: '6.2 km',
  location: 'Jaipur, Rajasthan',
  department: 'Medical & Health Department',
  status: 'In Progress',

  transparencyScore: 88,

  progress: 42,

  startDate: 'Mar 2026',

  expectedCompletion: 'Jan 2027',

  currentStage: 'Structural Renovation',

  budget: '₹12.4 Cr',

  spent: '₹5.3 Cr',

  remaining: '₹7.1 Cr',

  materials: [
    {
      name: 'Cement',
      planned: '1,100 bags',
      used: '620 bags',
      percentage: 56,
    },

    {
      name: 'Steel',
      planned: '58 tons',
      used: '31 tons',
      percentage: 53,
    },

    {
      name: 'Concrete',
      planned: '480 m³',
      used: '210 m³',
      percentage: 44,
    },

    {
      name: 'Tiles',
      planned: '6,200 m²',
      used: '1,850 m²',
      percentage: 30,
    },
  ],

  timeline: [
    {
      title: 'Project Approved',
      date: 'February 2026',
      completed: true,
    },

    {
      title: 'Contractor Selected',
      date: 'March 2026',
      completed: true,
    },

    {
      title: 'Construction Started',
      date: 'April 2026',
      completed: true,
    },

    {
      title: 'Structural Renovation',
      date: 'Current Stage',
      completed: false,
    },

    {
      title: 'Electrical & Plumbing',
      date: 'Upcoming',
      completed: false,
    },

    {
      title: 'Project Completion',
      date: 'January 2027',
      completed: false,
    },
  ],

  contractor: {
    name: 'HealthBuild Infrastructure Pvt. Ltd.',
    rating: 4.3,
    projects: 34,
    completed: 27,
    delayed: 4,
    ongoing: 3,
  },

  inspection: {
    lastInspected: '25 Aug 2026',

    inspectedBy: 'Assistant Executive Engineer',

    status: 'Work progressing normally',

    workQuality: 'Good',

    materialQuality: 'Verified',

    safety: 'Compliant',

    issues: 'Minor plumbing work pending',

    nextInspection: '12 Sep 2026',

    remarks:
      'Structural renovation is progressing according to the approved plan. Construction materials were inspected and found satisfactory.',
  },

  description:
    'Upgrade of an existing primary health center including structural renovation, electrical and plumbing improvements, sanitation facilities and essential medical infrastructure.',
},
];