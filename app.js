/* ==========================================================================
   TITAN LMS - Router, Authentication & Multi-Role Panel Controller
   TAJ INSTITUTE OF INFORMATION TECHNOLOGY
   ========================================================================== */

let activeAuthRole = 'student';

// Route Mappings for Student, Teacher (16 Sub-Modules), Admin & Auth
const routeMap = {
  'login': '#/login',
  'forgot-password': '#/forgot-password',
  'otp': '#/verify-otp',
  'reset-password': '#/reset-password',
  'password-success': '#/password-success',

  'admin-dashboard': '#/admin/dashboard',

  'teacher-dashboard': '#/teacher/dashboard',
  'teacher-my-courses': '#/teacher/my-courses',
  'teacher-course-content': '#/teacher/course-content',
  'teacher-assignments': '#/teacher/assignments',
  'teacher-quizzes': '#/teacher/quizzes',
  'teacher-live-classes': '#/teacher/live-classes',
  'teacher-attendance': '#/teacher/attendance',
  'teacher-students': '#/teacher/students',
  'teacher-certificates': '#/teacher/certificates',
  'teacher-announcements': '#/teacher/announcements',
  'teacher-messages': '#/teacher/messages',
  'teacher-calendar': '#/teacher/calendar',
  'teacher-resources': '#/teacher/resources',
  'teacher-reports': '#/teacher/reports',
  'teacher-profile': '#/teacher/profile',
  'teacher-settings': '#/teacher/settings',

  'dashboard': '#/student/dashboard',
  'courses': '#/student/my-course',
  'assignments': '#/student/assignments',
  'quizzes': '#/student/quizzes',
  'live': '#/student/live-classes',
  'attendance': '#/student/attendance',
  'certificates': '#/student/certificates',
  'announcements': '#/student/announcements',
  'messages': '#/student/messages',
  'profile': '#/student/profile',
  'settings': '#/student/settings'
};

const hashMap = {
  '#/login': 'login',
  '#/forgot-password': 'forgot-password',
  '#/verify-otp': 'otp',
  '#/reset-password': 'reset-password',
  '#/password-success': 'password-success',

  '#/admin/dashboard': 'admin-dashboard',

  '#/teacher/dashboard': 'teacher-dashboard',
  '#/teacher/my-courses': 'teacher-my-courses',
  '#/teacher/course-content': 'teacher-course-content',
  '#/teacher/assignments': 'teacher-assignments',
  '#/teacher/quizzes': 'teacher-quizzes',
  '#/teacher/live-classes': 'teacher-live-classes',
  '#/teacher/attendance': 'teacher-attendance',
  '#/teacher/students': 'teacher-students',
  '#/teacher/certificates': 'teacher-certificates',
  '#/teacher/announcements': 'teacher-announcements',
  '#/teacher/messages': 'teacher-messages',
  '#/teacher/calendar': 'teacher-calendar',
  '#/teacher/resources': 'teacher-resources',
  '#/teacher/reports': 'teacher-reports',
  '#/teacher/profile': 'teacher-profile',
  '#/teacher/settings': 'teacher-settings',

  '#/student/dashboard': 'dashboard',
  '#/student/my-course': 'courses',
  '#/student/assignments': 'assignments',
  '#/student/quizzes': 'quizzes',
  '#/student/live-classes': 'live',
  '#/student/attendance': 'attendance',
  '#/student/certificates': 'certificates',
  '#/student/announcements': 'announcements',
  '#/student/messages': 'messages',
  '#/student/profile': 'profile',
  '#/student/settings': 'settings'
};

// 45 REALISTIC PAKISTANI STUDENT RECORDS FOR TEACHER ROSTER
const teacherStudentsData = [
  { id: "TITAN-2026-1024", name: "Muhammad Ahmed", course: "Web & App Development", batch: "Batch 08", email: "ahmed.student@titan.edu.pk", phone: "+92 3001234567", attendance: "96%", progress: "38%", quizScore: "80%", assignmentStatus: "Submitted", enrollDate: "15 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1025", name: "Ali Raza", course: "Web & App Development", batch: "Batch 08", email: "ali.raza@titan.edu.pk", phone: "+92 3012345678", attendance: "92%", progress: "35%", quizScore: "75%", assignmentStatus: "Submitted", enrollDate: "15 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1026", name: "Abdul Rehman", course: "Web & App Development", batch: "Batch 08", email: "abdul.rehman@titan.edu.pk", phone: "+92 3023456789", attendance: "88%", progress: "30%", quizScore: "70%", assignmentStatus: "Pending", enrollDate: "15 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1027", name: "Ayesha Khan", course: "Web & App Development", batch: "Batch 08", email: "ayesha.khan@titan.edu.pk", phone: "+92 3034567890", attendance: "100%", progress: "42%", quizScore: "95%", assignmentStatus: "Submitted", enrollDate: "15 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1028", name: "Fatima Noor", course: "Web & App Development", batch: "Batch 08", email: "fatima.noor@titan.edu.pk", phone: "+92 3045678901", attendance: "96%", progress: "40%", quizScore: "90%", assignmentStatus: "Submitted", enrollDate: "15 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1029", name: "Hassan Ali", course: "Web & App Development", batch: "Batch 08", email: "hassan.ali@titan.edu.pk", phone: "+92 3056789012", attendance: "84%", progress: "28%", quizScore: "65%", assignmentStatus: "Pending", enrollDate: "15 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1030", name: "Usman Tariq", course: "Web & App Development", batch: "Batch 08", email: "usman.tariq@titan.edu.pk", phone: "+92 3067890123", attendance: "92%", progress: "36%", quizScore: "82%", assignmentStatus: "Submitted", enrollDate: "15 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1031", name: "Zain Ahmed", course: "Web & App Development", batch: "Batch 08", email: "zain.ahmed@titan.edu.pk", phone: "+92 3078901234", attendance: "90%", progress: "34%", quizScore: "78%", assignmentStatus: "Submitted", enrollDate: "15 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1032", name: "Ahmed Raza", course: "Web & App Development", batch: "Batch 08", email: "ahmed.raza@titan.edu.pk", phone: "+92 3089012345", attendance: "96%", progress: "38%", quizScore: "85%", assignmentStatus: "Submitted", enrollDate: "15 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1033", name: "Hira Fatima", course: "Web & App Development", batch: "Batch 08", email: "hira.fatima@titan.edu.pk", phone: "+92 3090123456", attendance: "98%", progress: "40%", quizScore: "92%", assignmentStatus: "Submitted", enrollDate: "15 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1034", name: "Maryam Khan", course: "Web & App Development", batch: "Batch 08", email: "maryam.khan@titan.edu.pk", phone: "+92 3101234567", attendance: "94%", progress: "36%", quizScore: "84%", assignmentStatus: "Submitted", enrollDate: "16 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1035", name: "Hamza Siddiqui", course: "Web & App Development", batch: "Batch 08", email: "hamza.siddiqui@titan.edu.pk", phone: "+92 3112345678", attendance: "86%", progress: "29%", quizScore: "68%", assignmentStatus: "Pending", enrollDate: "16 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1036", name: "Muneeb Ali", course: "Web & App Development", batch: "Batch 08", email: "muneeb.ali@titan.edu.pk", phone: "+92 3123456789", attendance: "90%", progress: "33%", quizScore: "76%", assignmentStatus: "Submitted", enrollDate: "16 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1037", name: "Bilal Ahmed", course: "Web & App Development", batch: "Batch 08", email: "bilal.ahmed@titan.edu.pk", phone: "+92 3134567890", attendance: "92%", progress: "35%", quizScore: "80%", assignmentStatus: "Submitted", enrollDate: "16 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1038", name: "Noor Fatima", course: "Web & App Development", batch: "Batch 08", email: "noor.fatima@titan.edu.pk", phone: "+92 3145678901", attendance: "100%", progress: "42%", quizScore: "96%", assignmentStatus: "Submitted", enrollDate: "16 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1039", name: "Saad Malik", course: "Web & App Development", batch: "Batch 08", email: "saad.malik@titan.edu.pk", phone: "+92 3156789012", attendance: "88%", progress: "31%", quizScore: "72%", assignmentStatus: "Submitted", enrollDate: "16 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1040", name: "Sana Tariq", course: "Web & App Development", batch: "Batch 08", email: "sana.tariq@titan.edu.pk", phone: "+92 3167890123", attendance: "96%", progress: "38%", quizScore: "88%", assignmentStatus: "Submitted", enrollDate: "16 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1041", name: "Omer Farooq", course: "Web & App Development", batch: "Batch 08", email: "omer.farooq@titan.edu.pk", phone: "+92 3178901234", attendance: "82%", progress: "25%", quizScore: "62%", assignmentStatus: "Pending", enrollDate: "17 Jul 2026", status: "Inactive" },
  { id: "TITAN-2026-1042", name: "Rabia Basri", course: "Web & App Development", batch: "Batch 08", email: "rabia.basri@titan.edu.pk", phone: "+92 3189012345", attendance: "94%", progress: "37%", quizScore: "86%", assignmentStatus: "Submitted", enrollDate: "17 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1043", name: "Mustafa Khan", course: "Web & App Development", batch: "Batch 08", email: "mustafa.khan@titan.edu.pk", phone: "+92 3190123456", attendance: "90%", progress: "34%", quizScore: "79%", assignmentStatus: "Submitted", enrollDate: "17 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1044", name: "Shahzaib Ali", course: "Web & App Development", batch: "Batch 08", email: "shahzaib.ali@titan.edu.pk", phone: "+92 3201234567", attendance: "92%", progress: "36%", quizScore: "81%", assignmentStatus: "Submitted", enrollDate: "17 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1045", name: "Amna Bibi", course: "Web & App Development", batch: "Batch 08", email: "amna.bibi@titan.edu.pk", phone: "+92 3212345678", attendance: "98%", progress: "40%", quizScore: "94%", assignmentStatus: "Submitted", enrollDate: "17 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1046", name: "Daniyal Ahmed", course: "Web & App Development", batch: "Batch 08", email: "daniyal.ahmed@titan.edu.pk", phone: "+92 3223456789", attendance: "86%", progress: "28%", quizScore: "66%", assignmentStatus: "Pending", enrollDate: "17 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1047", name: "Iqra Shah", course: "Web & App Development", batch: "Batch 08", email: "iqra.shah@titan.edu.pk", phone: "+92 3234567890", attendance: "96%", progress: "39%", quizScore: "89%", assignmentStatus: "Submitted", enrollDate: "18 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1048", name: "Kamran Akmal", course: "Web & App Development", batch: "Batch 08", email: "kamran.akmal@titan.edu.pk", phone: "+92 3245678901", attendance: "84%", progress: "27%", quizScore: "64%", assignmentStatus: "Pending", enrollDate: "18 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1049", name: "Mahnoor Sheikh", course: "Web & App Development", batch: "Batch 08", email: "mahnoor.sheikh@titan.edu.pk", phone: "+92 3256789012", attendance: "94%", progress: "37%", quizScore: "85%", assignmentStatus: "Submitted", enrollDate: "18 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1050", name: "Noman Ejaz", course: "Web & App Development", batch: "Batch 08", email: "noman.ejaz@titan.edu.pk", phone: "+92 3267890123", attendance: "90%", progress: "32%", quizScore: "75%", assignmentStatus: "Submitted", enrollDate: "18 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1051", name: "Nimra Khan", course: "Web & App Development", batch: "Batch 08", email: "nimra.khan@titan.edu.pk", phone: "+92 3278901234", attendance: "96%", progress: "38%", quizScore: "87%", assignmentStatus: "Submitted", enrollDate: "18 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1052", name: "Rehan Siddiqui", course: "Web & App Development", batch: "Batch 08", email: "rehan.siddiqui@titan.edu.pk", phone: "+92 3289012345", attendance: "88%", progress: "30%", quizScore: "70%", assignmentStatus: "Submitted", enrollDate: "19 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1053", name: "Sidra Tul Ain", course: "Web & App Development", batch: "Batch 08", email: "sidra.ain@titan.edu.pk", phone: "+92 3290123456", attendance: "98%", progress: "41%", quizScore: "93%", assignmentStatus: "Submitted", enrollDate: "19 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1054", name: "Taha Yasin", course: "Web & App Development", batch: "Batch 08", email: "taha.yasin@titan.edu.pk", phone: "+92 3301234567", attendance: "92%", progress: "35%", quizScore: "80%", assignmentStatus: "Submitted", enrollDate: "19 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1055", name: "Umer Hayat", course: "Web & App Development", batch: "Batch 08", email: "umer.hayat@titan.edu.pk", phone: "+92 3312345678", attendance: "80%", progress: "24%", quizScore: "60%", assignmentStatus: "Pending", enrollDate: "19 Jul 2026", status: "Inactive" },
  { id: "TITAN-2026-1056", name: "Urwa Tul Wusqa", course: "Web & App Development", batch: "Batch 08", email: "urwa.wusqa@titan.edu.pk", phone: "+92 3323456789", attendance: "96%", progress: "38%", quizScore: "88%", assignmentStatus: "Submitted", enrollDate: "19 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1057", name: "Waleed Hassan", course: "Web & App Development", batch: "Batch 08", email: "waleed.hassan@titan.edu.pk", phone: "+92 3334567890", attendance: "90%", progress: "33%", quizScore: "77%", assignmentStatus: "Submitted", enrollDate: "20 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1058", name: "Yusra Ali", course: "Web & App Development", batch: "Batch 08", email: "yusra.ali@titan.edu.pk", phone: "+92 3345678901", attendance: "94%", progress: "37%", quizScore: "86%", assignmentStatus: "Submitted", enrollDate: "20 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1059", name: "Zeeshan Khan", course: "Web & App Development", batch: "Batch 08", email: "zeeshan.khan@titan.edu.pk", phone: "+92 3356789012", attendance: "88%", progress: "31%", quizScore: "73%", assignmentStatus: "Submitted", enrollDate: "20 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1060", name: "Abdullah Tariq", course: "Web & App Development", batch: "Batch 08", email: "abdullah.tariq@titan.edu.pk", phone: "+92 3367890123", attendance: "92%", progress: "35%", quizScore: "82%", assignmentStatus: "Submitted", enrollDate: "20 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1061", name: "Anum Zaidi", course: "Web & App Development", batch: "Batch 08", email: "anum.zaidi@titan.edu.pk", phone: "+92 3378901234", attendance: "96%", progress: "39%", quizScore: "90%", assignmentStatus: "Submitted", enrollDate: "20 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1062", name: "Danish Iqbal", course: "Web & App Development", batch: "Batch 08", email: "danish.iqbal@titan.edu.pk", phone: "+92 3389012345", attendance: "86%", progress: "29%", quizScore: "67%", assignmentStatus: "Pending", enrollDate: "21 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1063", name: "Hafsa Noor", course: "Web & App Development", batch: "Batch 08", email: "hafsa.noor@titan.edu.pk", phone: "+92 3390123456", attendance: "98%", progress: "40%", quizScore: "94%", assignmentStatus: "Submitted", enrollDate: "21 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1064", name: "Kashif Mehmood", course: "Web & App Development", batch: "Batch 08", email: "kashif.mehmood@titan.edu.pk", phone: "+92 3401234567", attendance: "90%", progress: "33%", quizScore: "76%", assignmentStatus: "Submitted", enrollDate: "21 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1065", name: "Laiba Khan", course: "Web & App Development", batch: "Batch 08", email: "laiba.khan@titan.edu.pk", phone: "+92 3412345678", attendance: "94%", progress: "37%", quizScore: "85%", assignmentStatus: "Submitted", enrollDate: "21 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1066", name: "Mohsin Raza", course: "Web & App Development", batch: "Batch 08", email: "mohsin.raza@titan.edu.pk", phone: "+92 3423456789", attendance: "88%", progress: "30%", quizScore: "71%", assignmentStatus: "Pending", enrollDate: "21 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1067", name: "Nida Fatima", course: "Web & App Development", batch: "Batch 08", email: "nida.fatima@titan.edu.pk", phone: "+92 3434567890", attendance: "96%", progress: "38%", quizScore: "89%", assignmentStatus: "Submitted", enrollDate: "21 Jul 2026", status: "Active" },
  { id: "TITAN-2026-1068", name: "Owais Qarni", course: "Web & App Development", batch: "Batch 08", email: "owais.qarni@titan.edu.pk", phone: "+92 3445678901", attendance: "92%", progress: "34%", quizScore: "81%", assignmentStatus: "Submitted", enrollDate: "21 Jul 2026", status: "Active" }
];

// 3 PROFESSIONAL FACULTY ANNOUNCEMENTS
let teacherAnnouncementsData = [
  {
    id: 1,
    title: "Assignment 2 Submission Deadline Extended",
    desc: "Due to student requests, Assignment 2 submission has been extended until 04 August 2026 at 11:59 PM.",
    course: "Web & App Development",
    postedBy: "Engr. Tariq Mehmood",
    date: "01 Aug 2026"
  },
  {
    id: 2,
    title: "React 19 Live Workshop",
    desc: "Today's live workshop will begin at 7:00 PM. Students are requested to join 10 minutes before the session starts.",
    course: "Web & App Development",
    postedBy: "Engr. Tariq Mehmood",
    date: "03 Aug 2026"
  },
  {
    id: 3,
    title: "Module 3 Quiz Available",
    desc: "Module 3 quiz is now available in the Quizzes section. Complete it before the deadline.",
    course: "Web & App Development",
    postedBy: "Engr. Tariq Mehmood",
    date: "06 Aug 2026"
  }
];

// CALENDAR STATE MANAGEMENT & MONTH-SPECIFIC ACADEMIC EVENTS DATABASE
let calendarCurrentYear = 2026;
let calendarCurrentMonth = 7; // 0-indexed: 7 = August

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const calendarMonthEvents = {
  "2026-07": [ // July 2026
    { day: 15, dateStr: "15 Jul", title: "Batch 08 Orientation Session", time: "10:00 AM", category: "Orientation", chipClass: "event-chip-navy" },
    { day: 20, dateStr: "20 Jul", title: "HTML5 & CSS3 Responsive Layouts", time: "7:00 PM", category: "Class", chipClass: "event-chip-green" },
    { day: 28, dateStr: "28 Jul", title: "JavaScript ES6 Basics Assessment", time: "6:00 PM", category: "Quiz", chipClass: "event-chip-gold" }
  ],
  "2026-08": [ // August 2026 (16 REALISTIC ACADEMIC EVENTS & NATIONAL HOLIDAY)
    { day: 1, dateStr: "01 Aug", title: "New Batch Orientation", time: "10:00 AM", category: "Orientation", chipClass: "event-chip-navy" },
    { day: 3, dateStr: "03 Aug", title: "React 19 Live Workshop", time: "7:00 PM", category: "Live Class", chipClass: "event-chip-navy" },
    { day: 4, dateStr: "04 Aug", title: "Assignment 2 Submission Deadline", time: "11:59 PM", category: "Assignment", chipClass: "event-chip-red" },
    { day: 6, dateStr: "06 Aug", title: "Module 3 Quiz", time: "6:00 PM", category: "Quiz", chipClass: "event-chip-gold" },
    { day: 8, dateStr: "08 Aug", title: "UI/UX Design Practical Session", time: "3:00 PM", category: "Practical", chipClass: "event-chip-green" },
    { day: 10, dateStr: "10 Aug", title: "Python Lab Assessment", time: "5:00 PM", category: "Assessment", chipClass: "event-chip-navy" },
    { day: 12, dateStr: "12 Aug", title: "Digital Marketing Live Class", time: "7:00 PM", category: "Live Class", chipClass: "event-chip-green" },
    { day: 14, dateStr: "14 Aug", title: "Pakistan Independence Day", time: "Institute Holiday", category: "Institute Holiday", chipClass: "event-chip-gold", isGoldBadge: true },
    { day: 16, dateStr: "16 Aug", title: "Web Development Project Review", time: "2:00 PM", category: "Review", chipClass: "event-chip-navy" },
    { day: 18, dateStr: "18 Aug", title: "AI & Data Science Workshop", time: "4:00 PM", category: "Workshop", chipClass: "event-chip-navy" },
    { day: 20, dateStr: "20 Aug", title: "Mid Module Assessment", time: "11:00 AM", category: "Assessment", chipClass: "event-chip-gold" },
    { day: 22, dateStr: "22 Aug", title: "Freelancing Career Session", time: "6:00 PM", category: "Career Session", chipClass: "event-chip-green" },
    { day: 24, dateStr: "24 Aug", title: "Resume Building Workshop", time: "5:00 PM", category: "Workshop", chipClass: "event-chip-green" },
    { day: 26, dateStr: "26 Aug", title: "Mock Interview Session", time: "3:00 PM", category: "Interview", chipClass: "event-chip-navy" },
    { day: 28, dateStr: "28 Aug", title: "Final Project Submission", time: "11:59 PM", category: "Submission", chipClass: "event-chip-red" },
    { day: 30, dateStr: "30 Aug", title: "Certificate Distribution Ceremony", time: "11:00 AM", category: "Ceremony", chipClass: "event-chip-gold" }
  ],
  "2026-09": [ // September 2026
    { day: 5, dateStr: "05 Sep", title: "Node.js & Express REST API Workshop", time: "7:00 PM", category: "Workshop", chipClass: "event-chip-navy" },
    { day: 12, dateStr: "12 Sep", title: "Mid-Term Capstone Submissions", time: "11:59 PM", category: "Assignment", chipClass: "event-chip-red" },
    { day: 18, dateStr: "18 Sep", title: "MongoDB NoSQL Database Architecture", time: "5:00 PM", category: "Lab", chipClass: "event-chip-gold" },
    { day: 25, dateStr: "25 Sep", title: "Vercel & Cloud Deployment Masterclass", time: "7:00 PM", category: "Class", chipClass: "event-chip-green" }
  ],
  "2026-10": [ // October 2026
    { day: 5, dateStr: "05 Oct", title: "Final Capstone Viva & Code Demo", time: "10:00 AM", category: "Review", chipClass: "event-chip-navy" },
    { day: 15, dateStr: "15 Oct", title: "Batch 08 Official Graduation Ceremony", time: "11:00 AM", category: "Ceremony", chipClass: "event-chip-gold" }
  ]
};

// 46 UNIQUE & ISOLATED MESSAGING CONVERSATIONS (1 ADMINISTRATOR + 45 ENROLLED STUDENTS)
const teacherConversationsList = [
  {
    id: "ADMIN-001",
    name: "Administrator",
    sub: "System Admin • TITAN LMS",
    isAdmin: true,
    isOnline: true,
    unread: 1,
    lastTime: "10:15 AM",
    lastMsg: "Please review the Batch 08 quarterly attendance report.",
    messages: [
      { sender: "other", text: "Welcome to TITAN LMS Faculty Portal, Engr. Tariq.", timestamp: "Yesterday 09:00 AM" },
      { sender: "teacher", text: "Thank you! Everything is running smoothly for Batch 08.", timestamp: "Yesterday 09:15 AM" },
      { sender: "other", text: "Please review the Batch 08 quarterly attendance report.", timestamp: "Today 10:15 AM" }
    ]
  },
  {
    id: "TITAN-2026-1024",
    name: "Muhammad Ahmed",
    sub: "TITAN-2026-1024 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 1,
    lastTime: "01:15 PM",
    lastMsg: "Sir, I have submitted Assignment 2.",
    messages: [
      { sender: "other", text: "Respected Sir, I have completed the Full-Stack E-Commerce API integration code.", timestamp: "Yesterday 04:30 PM" },
      { sender: "teacher", text: "Excellent work Ahmed! Make sure to upload the GitHub repository link on LMS.", timestamp: "Yesterday 05:00 PM" },
      { sender: "other", text: "Sir, I have submitted Assignment 2.", timestamp: "Today 01:15 PM" }
    ]
  },
  {
    id: "TITAN-2026-1025",
    name: "Ali Raza",
    sub: "TITAN-2026-1025 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 1,
    lastTime: "01:05 PM",
    lastMsg: "Can you please explain React Hooks?",
    messages: [
      { sender: "other", text: "Assalam-o-Alaikum Sir, I was reviewing Module 3 notes.", timestamp: "11:30 AM" },
      { sender: "teacher", text: "Walaikum Assalam Ali, do you have any doubt in custom hooks?", timestamp: "11:45 AM" },
      { sender: "other", text: "Can you please explain React Hooks?", timestamp: "Today 01:05 PM" }
    ]
  },
  {
    id: "TITAN-2026-1026",
    name: "Abdul Rehman",
    sub: "TITAN-2026-1026 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 1,
    lastTime: "12:50 PM",
    lastMsg: "I am facing an API authentication error.",
    messages: [
      { sender: "other", text: "Sir, my JWT bearer token is returning 401 Unauthorized.", timestamp: "12:40 PM" },
      { sender: "other", text: "I am facing an API authentication error.", timestamp: "Today 12:50 PM" }
    ]
  },
  {
    id: "TITAN-2026-1027",
    name: "Ayesha Khan",
    sub: "TITAN-2026-1027 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "12:40 PM",
    lastMsg: "Will today's live class be recorded?",
    messages: [
      { sender: "other", text: "Respected Sir, I might join 10 mins late due to university exam.", timestamp: "12:35 PM" },
      { sender: "other", text: "Will today's live class be recorded?", timestamp: "Today 12:40 PM" },
      { sender: "teacher", text: "Yes Ayesha, all live class recordings are automatically saved in the Course Content section.", timestamp: "Today 12:42 PM" }
    ]
  },
  {
    id: "TITAN-2026-1028",
    name: "Fatima Noor",
    sub: "TITAN-2026-1028 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "12:20 PM",
    lastMsg: "Can I resubmit my assignment?",
    messages: [
      { sender: "other", text: "Respected Sir, I uploaded an older ZIP version by mistake.", timestamp: "12:15 PM" },
      { sender: "other", text: "Can I resubmit my assignment?", timestamp: "Today 12:20 PM" },
      { sender: "teacher", text: "Sure Fatima, I have reopened the submission slot for your student ID.", timestamp: "Today 12:25 PM" }
    ]
  },
  {
    id: "TITAN-2026-1029",
    name: "Hassan Ali",
    sub: "TITAN-2026-1029 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 1,
    lastTime: "12:10 PM",
    lastMsg: "When will Module 4 marks be uploaded?",
    messages: [
      { sender: "other", text: "Assalam-o-Alaikum Sir!", timestamp: "12:05 PM" },
      { sender: "other", text: "When will Module 4 marks be uploaded?", timestamp: "Today 12:10 PM" }
    ]
  },
  {
    id: "TITAN-2026-1030",
    name: "Usman Tariq",
    sub: "TITAN-2026-1030 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "11:55 AM",
    lastMsg: "I have completed Quiz 3.",
    messages: [
      { sender: "other", text: "Sir, I just finished the online test.", timestamp: "11:50 AM" },
      { sender: "other", text: "I have completed Quiz 3.", timestamp: "Today 11:55 AM" },
      { sender: "teacher", text: "Great job Usman! Your score of 82% has been recorded.", timestamp: "Today 11:58 AM" }
    ]
  },
  {
    id: "TITAN-2026-1031",
    name: "Zain Ahmed",
    sub: "TITAN-2026-1031 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 1,
    lastTime: "11:45 AM",
    lastMsg: "Sir, what is the deadline for project proposal?",
    messages: [
      { sender: "other", text: "Respected Sir, we are preparing the capstone documentation.", timestamp: "11:40 AM" },
      { sender: "other", text: "Sir, what is the deadline for project proposal?", timestamp: "Today 11:45 AM" }
    ]
  },
  {
    id: "TITAN-2026-1032",
    name: "Ahmed Raza",
    sub: "TITAN-2026-1032 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "11:30 AM",
    lastMsg: "Please review my GitHub repository link.",
    messages: [
      { sender: "other", text: "Sir, I pushed the Node.js REST backend repository.", timestamp: "11:25 AM" },
      { sender: "other", text: "Please review my GitHub repository link.", timestamp: "Today 11:30 AM" },
      { sender: "teacher", text: "Checking it now Ahmed. I will leave feedback on GitHub.", timestamp: "Today 11:32 AM" }
    ]
  },
  {
    id: "TITAN-2026-1033",
    name: "Hira Fatima",
    sub: "TITAN-2026-1033 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "11:15 AM",
    lastMsg: "Is CSS Grid or Flexbox preferred for layout?",
    messages: [
      { sender: "other", text: "Respected Sir, I am building the dashboard responsive layout.", timestamp: "11:10 AM" },
      { sender: "other", text: "Is CSS Grid or Flexbox preferred for layout?", timestamp: "Today 11:15 AM" },
      { sender: "teacher", text: "Use CSS Grid for 2D container layouts and Flexbox for 1D navigation alignment.", timestamp: "Today 11:18 AM" }
    ]
  },
  {
    id: "TITAN-2026-1034",
    name: "Maryam Khan",
    sub: "TITAN-2026-1034 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 1,
    lastTime: "11:00 AM",
    lastMsg: "Sir, I missed yesterday's live session due to internet issues.",
    messages: [
      { sender: "other", text: "Assalam-o-Alaikum Sir.", timestamp: "10:55 AM" },
      { sender: "other", text: "Sir, I missed yesterday's live session due to internet issues.", timestamp: "Today 11:00 AM" }
    ]
  },
  {
    id: "TITAN-2026-1035",
    name: "Hamza Siddiqui",
    sub: "TITAN-2026-1035 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "10:45 AM",
    lastMsg: "Which database should we use for Node.js project?",
    messages: [
      { sender: "other", text: "Sir, should we use MongoDB Atlas or local MySQL?", timestamp: "10:40 AM" },
      { sender: "other", text: "Which database should we use for Node.js project?", timestamp: "Today 10:45 AM" },
      { sender: "teacher", text: "MongoDB Atlas NoSQL database is recommended for Batch 08 project.", timestamp: "Today 10:48 AM" }
    ]
  },
  {
    id: "TITAN-2026-1036",
    name: "Muneeb Ali",
    sub: "TITAN-2026-1036 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "10:30 AM",
    lastMsg: "Can you recommend a good tutorial on Redux Toolkit?",
    messages: [
      { sender: "other", text: "Sir, I want to learn global state management.", timestamp: "10:25 AM" },
      { sender: "other", text: "Can you recommend a good tutorial on Redux Toolkit?", timestamp: "Today 10:30 AM" },
      { sender: "teacher", text: "Check out the Resources tab on LMS, I uploaded Redux Toolkit notes.", timestamp: "Today 10:32 AM" }
    ]
  },
  {
    id: "TITAN-2026-1037",
    name: "Bilal Ahmed",
    sub: "TITAN-2026-1037 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 1,
    lastTime: "10:15 AM",
    lastMsg: "Sir, my code fails on POST request handling.",
    messages: [
      { sender: "other", text: "Respected Sir, Express body parser is returning undefined.", timestamp: "10:10 AM" },
      { sender: "other", text: "Sir, my code fails on POST request handling.", timestamp: "Today 10:15 AM" }
    ]
  },
  {
    id: "TITAN-2026-1038",
    name: "Noor Fatima",
    sub: "TITAN-2026-1038 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "10:00 AM",
    lastMsg: "Thank you Sir! The explanation on custom hooks was great.",
    messages: [
      { sender: "other", text: "Respected Sir, I watched yesterday's workshop recording.", timestamp: "09:55 AM" },
      { sender: "other", text: "Thank you Sir! The explanation on custom hooks was great.", timestamp: "Today 10:00 AM" },
      { sender: "teacher", text: "You are welcome Noor! Keep up the good work.", timestamp: "Today 10:02 AM" }
    ]
  },
  {
    id: "TITAN-2026-1039",
    name: "Saad Malik",
    sub: "TITAN-2026-1039 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "09:45 AM",
    lastMsg: "Should we submit ZIP file or GitHub repository?",
    messages: [
      { sender: "other", text: "Sir, regarding Assignment 2 submission options.", timestamp: "09:40 AM" },
      { sender: "other", text: "Should we submit ZIP file or GitHub repository?", timestamp: "Today 09:45 AM" },
      { sender: "teacher", text: "Please submit both the GitHub URL and exported ZIP file.", timestamp: "Today 09:48 AM" }
    ]
  },
  {
    id: "TITAN-2026-1040",
    name: "Sana Tariq",
    sub: "TITAN-2026-1040 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 1,
    lastTime: "09:30 AM",
    lastMsg: "Sir, how do we handle CORS error in Express?",
    messages: [
      { sender: "other", text: "Assalam-o-Alaikum Sir, my fetch request is blocked by browser.", timestamp: "09:25 AM" },
      { sender: "other", text: "Sir, how do we handle CORS error in Express?", timestamp: "Today 09:30 AM" }
    ]
  },
  {
    id: "TITAN-2026-1041",
    name: "Omer Farooq",
    sub: "TITAN-2026-1041 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "Yesterday",
    lastMsg: "I need approval for my leave request tomorrow.",
    messages: [
      { sender: "other", text: "Respected Sir, I have submitted a medical leave form.", timestamp: "Yesterday 04:00 PM" },
      { sender: "other", text: "I need approval for my leave request tomorrow.", timestamp: "Yesterday 04:15 PM" },
      { sender: "teacher", text: "Approved Omer. Please catch up on recorded lectures.", timestamp: "Yesterday 05:00 PM" }
    ]
  },
  {
    id: "TITAN-2026-1042",
    name: "Rabia Basri",
    sub: "TITAN-2026-1042 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "Yesterday",
    lastMsg: "Are Server Components mandatory in React 19?",
    messages: [
      { sender: "other", text: "Sir, I have a doubt regarding Next.js App Router.", timestamp: "Yesterday 03:00 PM" },
      { sender: "other", text: "Are Server Components mandatory in React 19?", timestamp: "Yesterday 03:15 PM" },
      { sender: "teacher", text: "By default all components are Server Components unless 'use client' is specified.", timestamp: "Yesterday 03:30 PM" }
    ]
  },
  {
    id: "TITAN-2026-1043",
    name: "Mustafa Khan",
    sub: "TITAN-2026-1043 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 1,
    lastTime: "Yesterday",
    lastMsg: "Sir, can we work in pairs for final project?",
    messages: [
      { sender: "other", text: "Respected Sir, regarding capstone project team size.", timestamp: "Yesterday 02:00 PM" },
      { sender: "other", text: "Sir, can we work in pairs for final project?", timestamp: "Yesterday 02:10 PM" }
    ]
  },
  {
    id: "TITAN-2026-1044",
    name: "Shahzaib Ali",
    sub: "TITAN-2026-1044 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "Yesterday",
    lastMsg: "When will the next live class start?",
    messages: [
      { sender: "other", text: "Sir, is today's session at 7 PM?", timestamp: "Yesterday 01:00 PM" },
      { sender: "other", text: "When will the next live class start?", timestamp: "Yesterday 01:05 PM" },
      { sender: "teacher", text: "Yes Shahzaib, class starts at 7:00 PM sharp.", timestamp: "Yesterday 01:15 PM" }
    ]
  },
  {
    id: "TITAN-2026-1045",
    name: "Amna Bibi",
    sub: "TITAN-2026-1045 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "Yesterday",
    lastMsg: "I scored 95% in Quiz 3! Thank you Sir.",
    messages: [
      { sender: "other", text: "Respected Sir, I just got my quiz feedback.", timestamp: "Yesterday 11:00 AM" },
      { sender: "other", text: "I scored 95% in Quiz 3! Thank you Sir.", timestamp: "Yesterday 11:05 AM" },
      { sender: "teacher", text: "MashaAllah Amna! Outstanding performance.", timestamp: "Yesterday 11:20 AM" }
    ]
  },
  {
    id: "TITAN-2026-1046",
    name: "Daniyal Ahmed",
    sub: "TITAN-2026-1046 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 1,
    lastTime: "Yesterday",
    lastMsg: "Sir, I am unable to connect to MongoDB server.",
    messages: [
      { sender: "other", text: "Respected Sir, connection string is throwing ECONNREFUSED.", timestamp: "Yesterday 10:00 AM" },
      { sender: "other", text: "Sir, I am unable to connect to MongoDB server.", timestamp: "Yesterday 10:05 AM" }
    ]
  },
  {
    id: "TITAN-2026-1047",
    name: "Iqra Shah",
    sub: "TITAN-2026-1047 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "Yesterday",
    lastMsg: "Can you share the slides for REST API module?",
    messages: [
      { sender: "other", text: "Assalam-o-Alaikum Sir.", timestamp: "Yesterday 09:30 AM" },
      { sender: "other", text: "Can you share the slides for REST API module?", timestamp: "Yesterday 09:35 AM" },
      { sender: "teacher", text: "Uploaded on LMS under Course Content -> Module 4.", timestamp: "Yesterday 09:45 AM" }
    ]
  },
  {
    id: "TITAN-2026-1048",
    name: "Kamran Akmal",
    sub: "TITAN-2026-1048 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "28 Jul",
    lastMsg: "Is Tailwind CSS allowed in our assignment?",
    messages: [
      { sender: "other", text: "Sir, can we use utility classes?", timestamp: "28 Jul 04:00 PM" },
      { sender: "other", text: "Is Tailwind CSS allowed in our assignment?", timestamp: "28 Jul 04:05 PM" },
      { sender: "teacher", text: "Vanilla CSS is preferred for fundamentals, but Tailwind is acceptable.", timestamp: "28 Jul 04:20 PM" }
    ]
  },
  {
    id: "TITAN-2026-1049",
    name: "Mahnoor Sheikh",
    sub: "TITAN-2026-1049 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "28 Jul",
    lastMsg: "Sir, I have updated my profile details on LMS.",
    messages: [
      { sender: "other", text: "Respected Sir, updated my phone number.", timestamp: "28 Jul 02:00 PM" },
      { sender: "other", text: "Sir, I have updated my profile details on LMS.", timestamp: "28 Jul 02:05 PM" },
      { sender: "teacher", text: "Received Mahnoor, records updated.", timestamp: "28 Jul 02:15 PM" }
    ]
  },
  {
    id: "TITAN-2026-1050",
    name: "Noman Ejaz",
    sub: "TITAN-2026-1050 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 1,
    lastTime: "27 Jul",
    lastMsg: "How many questions will be in the final exam?",
    messages: [
      { sender: "other", text: "Sir, regarding final exam format.", timestamp: "27 Jul 05:00 PM" },
      { sender: "other", text: "How many questions will be in the final exam?", timestamp: "27 Jul 05:05 PM" }
    ]
  },
  {
    id: "TITAN-2026-1051",
    name: "Nimra Khan",
    sub: "TITAN-2026-1051 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "27 Jul",
    lastMsg: "Sir, where can I download the Certificate format?",
    messages: [
      { sender: "other", text: "Respected Sir, asking for sample certificate.", timestamp: "27 Jul 03:00 PM" },
      { sender: "other", text: "Sir, where can I download the Certificate format?", timestamp: "27 Jul 03:05 PM" },
      { sender: "teacher", text: "Certificates will be issued automatically upon 100% completion.", timestamp: "27 Jul 03:20 PM" }
    ]
  },
  {
    id: "TITAN-2026-1052",
    name: "Rehan Siddiqui",
    sub: "TITAN-2026-1052 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "26 Jul",
    lastMsg: "What is the difference between useEffect and useLayoutEffect?",
    messages: [
      { sender: "other", text: "Sir, a question from React hooks.", timestamp: "26 Jul 11:00 AM" },
      { sender: "other", text: "What is the difference between useEffect and useLayoutEffect?", timestamp: "26 Jul 11:05 AM" },
      { sender: "teacher", text: "useLayoutEffect runs synchronously after all DOM mutations, while useEffect runs asynchronously.", timestamp: "26 Jul 11:20 AM" }
    ]
  },
  {
    id: "TITAN-2026-1053",
    name: "Sidra Tul Ain",
    sub: "TITAN-2026-1053 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "26 Jul",
    lastMsg: "Sir, I submitted the assignment 1 hour before deadline.",
    messages: [
      { sender: "other", text: "Respected Sir, confirmation regarding assignment upload.", timestamp: "26 Jul 10:00 AM" },
      { sender: "other", text: "Sir, I submitted the assignment 1 hour before deadline.", timestamp: "26 Jul 10:05 AM" },
      { sender: "teacher", text: "Verified Sidra! Submission timestamp recorded.", timestamp: "26 Jul 10:15 AM" }
    ]
  },
  {
    id: "TITAN-2026-1054",
    name: "Taha Yasin",
    sub: "TITAN-2026-1054 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 1,
    lastTime: "25 Jul",
    lastMsg: "Can we get extra time for the MongoDB lab?",
    messages: [
      { sender: "other", text: "Assalam-o-Alaikum Sir.", timestamp: "25 Jul 04:00 PM" },
      { sender: "other", text: "Can we get extra time for the MongoDB lab?", timestamp: "25 Jul 04:05 PM" }
    ]
  },
  {
    id: "TITAN-2026-1055",
    name: "Umer Hayat",
    sub: "TITAN-2026-1055 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "25 Jul",
    lastMsg: "Sir, my attendance is marked absent for Thursday by mistake.",
    messages: [
      { sender: "other", text: "Respected Sir, regarding attendance correction.", timestamp: "25 Jul 02:00 PM" },
      { sender: "other", text: "Sir, my attendance is marked absent for Thursday by mistake.", timestamp: "25 Jul 02:05 PM" },
      { sender: "teacher", text: "Checked logs Umer, marked present now.", timestamp: "25 Jul 02:20 PM" }
    ]
  },
  {
    id: "TITAN-2026-1056",
    name: "Urwa Tul Wusqa",
    sub: "TITAN-2026-1056 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "24 Jul",
    lastMsg: "Will there be a mock interview session before final presentation?",
    messages: [
      { sender: "other", text: "Sir, regarding career preparation.", timestamp: "24 Jul 03:00 PM" },
      { sender: "other", text: "Will there be a mock interview session before final presentation?", timestamp: "24 Jul 03:05 PM" },
      { sender: "teacher", text: "Yes Urwa, mock interviews are scheduled for next week.", timestamp: "24 Jul 03:15 PM" }
    ]
  },
  {
    id: "TITAN-2026-1057",
    name: "Waleed Hassan",
    sub: "TITAN-2026-1057 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "24 Jul",
    lastMsg: "Sir, how do we deploy Next.js app to Vercel?",
    messages: [
      { sender: "other", text: "Sir, asking for deployment steps.", timestamp: "24 Jul 01:00 PM" },
      { sender: "other", text: "Sir, how do we deploy Next.js app to Vercel?", timestamp: "24 Jul 01:05 PM" },
      { sender: "teacher", text: "Connect your GitHub repo directly to Vercel dashboard.", timestamp: "24 Jul 01:20 PM" }
    ]
  },
  {
    id: "TITAN-2026-1058",
    name: "Yusra Ali",
    sub: "TITAN-2026-1058 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "23 Jul",
    lastMsg: "Can I get feedback on my UI design layout?",
    messages: [
      { sender: "other", text: "Respected Sir, shared my Figma prototype.", timestamp: "23 Jul 05:00 PM" },
      { sender: "other", text: "Can I get feedback on my UI design layout?", timestamp: "23 Jul 05:05 PM" },
      { sender: "teacher", text: "Great typography and color palette Yusra!", timestamp: "23 Jul 05:20 PM" }
    ]
  },
  {
    id: "TITAN-2026-1059",
    name: "Zeeshan Khan",
    sub: "TITAN-2026-1059 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 1,
    lastTime: "23 Jul",
    lastMsg: "Sir, what port should Express app run on?",
    messages: [
      { sender: "other", text: "Assalam-o-Alaikum Sir.", timestamp: "23 Jul 02:00 PM" },
      { sender: "other", text: "Sir, what port should Express app run on?", timestamp: "23 Jul 02:05 PM" }
    ]
  },
  {
    id: "TITAN-2026-1060",
    name: "Abdullah Tariq",
    sub: "TITAN-2026-1060 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "22 Jul",
    lastMsg: "Is async/await better than Promises in JS?",
    messages: [
      { sender: "other", text: "Sir, regarding async programming.", timestamp: "22 Jul 04:00 PM" },
      { sender: "other", text: "Is async/await better than Promises in JS?", timestamp: "22 Jul 04:05 PM" },
      { sender: "teacher", text: "async/await is syntactic sugar over Promises that makes code cleaner.", timestamp: "22 Jul 04:15 PM" }
    ]
  },
  {
    id: "TITAN-2026-1061",
    name: "Anum Zaidi",
    sub: "TITAN-2026-1061 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "22 Jul",
    lastMsg: "Sir, I have shared my Figma design link with you.",
    messages: [
      { sender: "other", text: "Respected Sir, UI design completed.", timestamp: "22 Jul 01:00 PM" },
      { sender: "other", text: "Sir, I have shared my Figma design link with you.", timestamp: "22 Jul 01:05 PM" },
      { sender: "teacher", text: "Received Anum, reviewing UI components.", timestamp: "22 Jul 01:20 PM" }
    ]
  },
  {
    id: "TITAN-2026-1062",
    name: "Danish Iqbal",
    sub: "TITAN-2026-1062 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 1,
    lastTime: "21 Jul",
    lastMsg: "When is the retake date for Quiz 2?",
    messages: [
      { sender: "other", text: "Sir, asking for quiz re-attempt.", timestamp: "21 Jul 03:00 PM" },
      { sender: "other", text: "When is the retake date for Quiz 2?", timestamp: "21 Jul 03:05 PM" }
    ]
  },
  {
    id: "TITAN-2026-1063",
    name: "Hafsa Noor",
    sub: "TITAN-2026-1063 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "21 Jul",
    lastMsg: "Thank you Sir for clarifying the routing issue.",
    messages: [
      { sender: "other", text: "Sir, my hash routing issue is resolved now.", timestamp: "21 Jul 11:00 AM" },
      { sender: "other", text: "Thank you Sir for clarifying the routing issue.", timestamp: "21 Jul 11:05 AM" },
      { sender: "teacher", text: "Glad to help Hafsa!", timestamp: "21 Jul 11:15 AM" }
    ]
  },
  {
    id: "TITAN-2026-1064",
    name: "Kashif Mehmood",
    sub: "TITAN-2026-1064 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 0,
    lastTime: "21 Jul",
    lastMsg: "Sir, can you review my Pull Request on GitHub?",
    messages: [
      { sender: "other", text: "Respected Sir, created PR #4.", timestamp: "21 Jul 10:00 AM" },
      { sender: "other", text: "Sir, can you review my Pull Request on GitHub?", timestamp: "21 Jul 10:05 AM" },
      { sender: "teacher", text: "PR approved and merged Kashif.", timestamp: "21 Jul 10:20 AM" }
    ]
  },
  {
    id: "TITAN-2026-1065",
    name: "Laiba Khan",
    sub: "TITAN-2026-1065 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "21 Jul",
    lastMsg: "Will the final project be evaluated individually?",
    messages: [
      { sender: "other", text: "Sir, regarding grading policy.", timestamp: "21 Jul 09:00 AM" },
      { sender: "other", text: "Will the final project be evaluated individually?", timestamp: "21 Jul 09:05 AM" },
      { sender: "teacher", text: "Yes, individual viva and code demonstration will take place.", timestamp: "21 Jul 09:15 AM" }
    ]
  },
  {
    id: "TITAN-2026-1066",
    name: "Mohsin Raza",
    sub: "TITAN-2026-1066 • Batch 08",
    isAdmin: false,
    isOnline: false,
    unread: 1,
    lastTime: "21 Jul",
    lastMsg: "Sir, I am facing npm install error on Windows.",
    messages: [
      { sender: "other", text: "Assalam-o-Alaikum Sir.", timestamp: "21 Jul 08:30 AM" },
      { sender: "other", text: "Sir, I am facing npm install error on Windows.", timestamp: "21 Jul 08:35 AM" }
    ]
  },
  {
    id: "TITAN-2026-1067",
    name: "Nida Fatima",
    sub: "TITAN-2026-1067 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "21 Jul",
    lastMsg: "Can you please extend Quiz 3 timer by 5 minutes?",
    messages: [
      { sender: "other", text: "Respected Sir, regarding quiz timer.", timestamp: "21 Jul 08:00 AM" },
      { sender: "other", text: "Can you please extend Quiz 3 timer by 5 minutes?", timestamp: "21 Jul 08:05 AM" },
      { sender: "teacher", text: "The timer is fixed at 10 minutes per standard policy.", timestamp: "21 Jul 08:15 AM" }
    ]
  },
  {
    id: "TITAN-2026-1068",
    name: "Owais Qarni",
    sub: "TITAN-2026-1068 • Batch 08",
    isAdmin: false,
    isOnline: true,
    unread: 0,
    lastTime: "21 Jul",
    lastMsg: "Sir, when will the certificate distribution ceremony take place?",
    messages: [
      { sender: "other", text: "Assalam-o-Alaikum Sir.", timestamp: "21 Jul 07:30 AM" },
      { sender: "other", text: "Sir, when will the certificate distribution ceremony take place?", timestamp: "21 Jul 07:35 AM" },
      { sender: "teacher", text: "Scheduled for August 18 in the main auditorium.", timestamp: "21 Jul 07:45 AM" }
    ]
  }
];

let activeTeacherChatId = "TITAN-2026-1024";
let teacherChatFilter = 'all';

// Attendance Register Data
let teacherAttendanceData = teacherStudentsData.map((st, index) => {
  let status = "Present";
  let remarks = "On time";
  if (index % 15 === 2 || index % 20 === 5) {
    status = "Absent";
    remarks = "Uninformed absence";
  } else if (index % 12 === 3) {
    status = "Late";
    remarks = "15 mins late";
  } else if (index % 18 === 7) {
    status = "Leave";
    remarks = "Approved medical leave";
  }
  return {
    id: st.id,
    name: st.name,
    course: st.course,
    batch: st.batch,
    status: status,
    remarks: remarks
  };
});

let filteredTeacherAttendance = [...teacherAttendanceData];

// Roster State
let teacherStudentsCurrentPage = 1;
const teacherStudentsPerPage = 10;
let filteredTeacherStudents = [...teacherStudentsData];
let currentTargetMessageStudent = null;

// Questions Data
const quizQuestions = [
  {
    id: 1,
    question: "Which React 19 Hook is used to declare and manage reactive component state?",
    options: ["useFetch", "useState", "useRoute", "useServer"],
    correctIndex: 1,
    explanation: "useState is the fundamental React hook for state management in functional components."
  },
  {
    id: 2,
    question: "Which CSS property establishes a two-dimensional grid-based layout structure?",
    options: ["display: flex", "display: grid", "display: block", "display: inline"],
    correctIndex: 1,
    explanation: "display: grid initializes CSS Grid Layout for two-dimensional row and column alignments."
  },
  {
    id: 3,
    question: "What built-in JavaScript method serializes a JavaScript object into a JSON string?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
    correctIndex: 1,
    explanation: "JSON.stringify() transforms a JavaScript object or value into a JSON string."
  },
  {
    id: 4,
    question: "Which ES6 keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "var", "static"],
    correctIndex: 1,
    explanation: "let is block-scoped in ES6 JavaScript and allows value reassignments."
  },
  {
    id: 5,
    question: "What is the default HTTP method executed by the browser Fetch API if unspecified?",
    options: ["POST", "GET", "PUT", "DELETE"],
    correctIndex: 1,
    explanation: "The Fetch API defaults to HTTP GET requests if no method parameter is provided."
  }
];

// Quiz Engine State
let currentQuestionIndex = 0;
let userAnswers = [null, null, null, null, null];
let timeRemainingSeconds = 600;
let timerInterval = null;
let quizStartTime = 0;
let quizElapsedTimeSeconds = 0;

let studentQuizStats = {
  recentScore: "40 / 50",
  avgScorePercentage: 80,
  completedQuizzes: 1,
  totalScoreSum: 40,
  totalScoreMax: 50
};

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  initRouting();
  initCharts();
  renderTeacherStudentsRoster();
  renderTeacherAttendanceRegister();
  initTeacherMessagesModule();
  renderTeacherAnnouncements();
  renderTeacherCalendar();
  renderTeacherResources();
  initTeacherNavbarHeader();
  renderTeacherCourseContentList();
  updateTeacherProfileUI();
  initStudentMessagesModule();
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ==========================================================================
   CALENDAR FULL MONTH & YEAR STATE MANAGEMENT CONTROLLER
   ========================================================================== */

function renderTeacherCalendar() {
  const monthTitle = document.getElementById('teacherCalendarMonthTitle');
  const eventsBadge = document.getElementById('teacherCalendarEventsBadge');
  const titleText = `${monthNames[calendarCurrentMonth]} ${calendarCurrentYear}`;

  if (monthTitle) monthTitle.innerText = titleText;
  if (eventsBadge) eventsBadge.innerText = titleText;

  renderTeacherCalendarGrid();
  renderTeacherCalendarUpcomingList();
}

function prevTeacherCalendarMonth() {
  calendarCurrentMonth--;
  if (calendarCurrentMonth < 0) {
    calendarCurrentMonth = 11;
    calendarCurrentYear--;
  }
  renderTeacherCalendar();
  showToast(`Switched to ${monthNames[calendarCurrentMonth]} ${calendarCurrentYear}`);
}

function nextTeacherCalendarMonth() {
  calendarCurrentMonth++;
  if (calendarCurrentMonth > 11) {
    calendarCurrentMonth = 0;
    calendarCurrentYear++;
  }
  renderTeacherCalendar();
  showToast(`Switched to ${monthNames[calendarCurrentMonth]} ${calendarCurrentYear}`);
}

function resetTeacherCalendarToday() {
  calendarCurrentYear = 2026;
  calendarCurrentMonth = 7; // August
  renderTeacherCalendar();
  showToast(`Returned to current month (August 2026)`);
}

function renderTeacherCalendarGrid() {
  const gridContainer = document.getElementById('teacherCalendarMonthGrid');
  if (!gridContainer) return;

  gridContainer.innerHTML = '';

  // 1. Render Day Headers (Sun..Sat)
  const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dayHeaders.forEach(dh => {
    const headDiv = document.createElement('div');
    headDiv.className = 'calendar-day-header';
    headDiv.innerText = dh;
    gridContainer.appendChild(headDiv);
  });

  // 2. Calculation logic for dates
  const firstDayIndex = new Date(calendarCurrentYear, calendarCurrentMonth, 1).getDay();
  const totalDaysInMonth = new Date(calendarCurrentYear, calendarCurrentMonth + 1, 0).getDate();
  const prevMonthDays = new Date(calendarCurrentYear, calendarCurrentMonth, 0).getDate();

  const monthKey = `${calendarCurrentYear}-${calendarCurrentMonth < 9 ? '0' + (calendarCurrentMonth + 1) : (calendarCurrentMonth + 1)}`;
  const currentMonthEvents = calendarMonthEvents[monthKey] || [];

  // 3. Render Previous Month Trailing Cells
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day-cell other-month';
    cell.innerHTML = `<span class="calendar-day-num">${prevMonthDays - i}</span>`;
    gridContainer.appendChild(cell);
  }

  // 4. Render Current Month Date Cells
  for (let day = 1; day <= totalDaysInMonth; day++) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day-cell';

    const isToday = calendarCurrentYear === 2026 && calendarCurrentMonth === 7 && day === 1;
    if (isToday) {
      cell.style.cssText = 'background: var(--navy-light); border: 2px solid var(--navy-primary);';
    }

    let cellHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="calendar-day-num">${day < 10 ? '0' + day : day}</span>
        ${isToday ? `<span style="font-size: 9px; font-weight: 800; color: var(--navy-primary);">TODAY</span>` : ''}
      </div>
    `;

    // Find if there is an event on this day
    const dayEvents = currentMonthEvents.filter(e => e.day === day);
    dayEvents.forEach(evt => {
      const clickAttr = `onclick="openCalendarEventDetailModal('${evt.title.replace(/'/g, "\\'")}', '${evt.dateStr} ${calendarCurrentYear}', '${evt.time}', '${evt.category}', ${evt.isGoldBadge ? true : false})"`;
      cellHTML += `<div class="calendar-event-chip ${evt.chipClass}" style="cursor: pointer;" ${clickAttr}>${evt.title}</div>`;
    });

    cell.innerHTML = cellHTML;
    gridContainer.appendChild(cell);
  }

  // 5. Render Next Month Leading Cells to complete 7-column grid
  const totalRenderedCells = firstDayIndex + totalDaysInMonth;
  const remainingCells = 35 - totalRenderedCells > 0 ? 35 - totalRenderedCells : (42 - totalRenderedCells);

  for (let nextDay = 1; nextDay <= remainingCells; nextDay++) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day-cell other-month';
    cell.innerHTML = `<span class="calendar-day-num">${nextDay < 10 ? '0' + nextDay : nextDay}</span>`;
    gridContainer.appendChild(cell);
  }
}

function renderTeacherCalendarUpcomingList() {
  const container = document.getElementById('teacherCalendarUpcomingList');
  if (!container) return;

  container.innerHTML = '';

  const monthKey = `${calendarCurrentYear}-${calendarCurrentMonth < 9 ? '0' + (calendarCurrentMonth + 1) : (calendarCurrentMonth + 1)}`;
  const currentMonthEvents = calendarMonthEvents[monthKey] || [];

  if (currentMonthEvents.length === 0) {
    container.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 12px; color: var(--text-muted);">No academic events scheduled for ${monthNames[calendarCurrentMonth]} ${calendarCurrentYear}.</div>`;
    return;
  }

  currentMonthEvents.forEach(evt => {
    const card = document.createElement('div');
    card.className = 'list-item-card';
    card.style.cssText = 'padding: 14px 16px; cursor: pointer; transition: transform 0.15s ease;';
    card.onclick = () => openCalendarEventDetailModal(evt.title, `${evt.dateStr} ${calendarCurrentYear}`, evt.time, evt.category, evt.isGoldBadge ? true : false);

    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <div class="circle-icon-box sm"><i data-lucide="calendar"></i></div>
        <div>
          <div style="font-size: 13px; font-weight: 800; color: var(--navy-primary);">${evt.title}</div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">📅 ${evt.dateStr} • ${evt.time}</div>
        </div>
      </div>
      <div>
        <span class="calendar-event-chip ${evt.chipClass}">${evt.category}</span>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

function openCalendarEventDetailModal(title, dateStr, timeStr, category, isGoldBadge) {
  const modal = document.getElementById('calendarEventDetailModal');
  if (!modal) return;

  document.getElementById('eventModalName').innerText = title;
  document.getElementById('eventModalDateTime').innerText = `${dateStr} • ${timeStr}`;
  document.getElementById('eventModalCategory').innerText = category;
  
  const badgeElem = document.getElementById('eventModalStatusBadge');
  if (badgeElem) {
    if (isGoldBadge || title.includes("Independence")) {
      badgeElem.innerText = "Gold Holiday Badge";
      badgeElem.style.cssText = "background:#FEF3C7; color:#B88E35; border:1px solid #D4A64A;";
    } else {
      badgeElem.innerText = "Scheduled Academic Event";
      badgeElem.style.cssText = "background:#EFF6FF; color:#2563EB; border:1px solid #3B82F6;";
    }
  }

  modal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeCalendarEventDetailModal() {
  const modal = document.getElementById('calendarEventDetailModal');
  if (modal) modal.style.display = 'none';
}

/* ==========================================================================
   ANNOUNCEMENTS MODULE CONTROLLER
   ========================================================================== */

function renderTeacherAnnouncements() {
  const container = document.getElementById('teacherAnnouncementsListContainer');
  if (!container) return;

  container.innerHTML = '';

  teacherAnnouncementsData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card-box';
    card.style.cssText = 'padding: 20px; border: 1px solid var(--border-color); border-radius: var(--card-radius); background: #FFFFFF; box-shadow: var(--shadow-subtle); display: flex; flex-direction: column; gap: 12px;';

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <h3 style="font-size: 16px; font-weight: 800; color: var(--navy-primary); line-height: 1.3;">${item.title}</h3>
      </div>

      <p style="font-size: 13px; color: var(--text-dark); line-height: 1.5; margin: 0;">${item.desc}</p>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 4px; flex-wrap: wrap; gap: 10px;">
        <div style="font-size: 12px; color: var(--text-muted); font-weight: 600; display: flex; gap: 12px; align-items: center;">
          <span>🎯 ${item.course}</span>
          <span>•</span>
          <span>👨‍🏫 ${item.postedBy}</span>
          <span>•</span>
          <span>📅 ${item.date}</span>
        </div>

        <div style="display: flex; gap: 8px;">
          <button class="btn-secondary btn-sm" onclick="showToast('Editing announcement details...')">Edit</button>
          <button class="btn-secondary btn-sm" style="color: var(--navy-primary);" onclick="deleteAnnouncement(${item.id})">Delete</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function openCreateAnnouncementModal() {
  const modal = document.getElementById('createAnnouncementModal');
  if (modal) {
    modal.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
  }
}

function closeCreateAnnouncementModal() {
  const modal = document.getElementById('createAnnouncementModal');
  if (modal) modal.style.display = 'none';
}

function handleCreateAnnouncementSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('annTitleInput').value;
  const course = document.getElementById('annCourseSelect').value;
  const desc = document.getElementById('annDescInput').value;

  const newAnn = {
    id: Date.now(),
    title,
    desc,
    course,
    postedBy: "Engr. Tariq Mehmood",
    date: "01 Aug 2026"
  };

  teacherAnnouncementsData.unshift(newAnn);
  renderTeacherAnnouncements();
  closeCreateAnnouncementModal();
  showToast('New announcement created & published!');
}

function deleteAnnouncement(id) {
  teacherAnnouncementsData = teacherAnnouncementsData.filter(a => a.id !== id);
  renderTeacherAnnouncements();
  showToast('Announcement removed');
}

function handleHeaderMessagesClick() {
  const session = getAuthSession();
  if (session.role === 'teacher') {
    switchView('teacher-messages');
  } else {
    showToast('Student direct message portal active with Engr. Tariq Mehmood & Administrator');
  }
}

/* ==========================================================================
   TEACHER MESSAGES MODULE CONTROLLER (45 STUDENTS + ADMINISTRATOR)
   ========================================================================== */

let teacherChatAttachedFile = null;

function initTeacherMessagesModule() {
  renderTeacherConversationList();
  selectTeacherConversation(activeTeacherChatId);

  // Bind Enter Key vs Shift + Enter on Input Field
  const inputElem = document.getElementById('teacherChatMessageInput');
  if (inputElem) {
    inputElem.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendTeacherChatMessage(e);
      }
    });
  }

  // Dismiss Emoji Picker when clicking outside
  document.addEventListener('click', (e) => {
    const picker = document.getElementById('teacherChatEmojiPicker');
    const btn = document.getElementById('teacherChatEmojiBtn');
    if (picker && picker.style.display !== 'none' && !picker.contains(e.target) && btn && !btn.contains(e.target)) {
      picker.style.display = 'none';
    }
  });
}

/* EMOJI PICKER CONTROLLER */
function toggleTeacherChatEmojiPicker(e) {
  if (e) e.stopPropagation();
  const picker = document.getElementById('teacherChatEmojiPicker');
  if (picker) {
    picker.style.display = (picker.style.display === 'none' || !picker.style.display) ? 'block' : 'none';
  }
}

function insertEmojiIntoMessage(emoji) {
  const input = document.getElementById('teacherChatMessageInput');
  if (input) {
    const start = input.selectionStart !== undefined ? input.selectionStart : input.value.length;
    const end = input.selectionEnd !== undefined ? input.selectionEnd : input.value.length;
    const val = input.value;
    input.value = val.substring(0, start) + emoji + val.substring(end);
    
    input.focus();
    const newPos = start + emoji.length;
    if (typeof input.setSelectionRange === 'function') {
      input.setSelectionRange(newPos, newPos);
    }
  }
  const picker = document.getElementById('teacherChatEmojiPicker');
  if (picker) picker.style.display = 'none';
}

/* FILE ATTACHMENT CONTROLLER */
function handleTeacherChatFileSelect(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const sizeFormatted = file.size > 1024 * 1024 
    ? (file.size / (1024 * 1024)).toFixed(1) + ' MB' 
    : Math.round(file.size / 1024) + ' KB';

  teacherChatAttachedFile = {
    name: file.name,
    size: sizeFormatted
  };

  document.getElementById('attachedFileNameText').innerText = file.name;
  document.getElementById('attachedFileSizeText').innerText = sizeFormatted;
  document.getElementById('teacherChatAttachmentPreviewBar').style.display = 'flex';
  
  showToast(`Attached file: ${file.name}`);
}

function removeTeacherChatAttachedFile() {
  teacherChatAttachedFile = null;
  const fileInput = document.getElementById('teacherChatFileInput');
  if (fileInput) fileInput.value = '';
  const previewBar = document.getElementById('teacherChatAttachmentPreviewBar');
  if (previewBar) previewBar.style.display = 'none';
}

function renderTeacherConversationList() {
  const container = document.getElementById('teacherChatConversationList');
  if (!container) return;

  const searchQuery = document.getElementById('teacherChatSearchInput')?.value.toLowerCase() || '';
  container.innerHTML = '';

  const filtered = teacherConversationsList.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(searchQuery) || item.id.toLowerCase().includes(searchQuery) || item.sub.toLowerCase().includes(searchQuery);
    if (teacherChatFilter === 'unread') return matchSearch && item.unread > 0;
    if (teacherChatFilter === 'admin') return matchSearch && item.isAdmin;
    return matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="padding: 20px; text-align: center; font-size: 12px; color: var(--text-muted);">No student conversation found matching search.</div>`;
    return;
  }

  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = `chat-conversation-item ${item.id === activeTeacherChatId ? 'active' : ''}`;
    div.onclick = () => selectTeacherConversation(item.id);

    div.innerHTML = `
      <div style="position: relative;">
        <div class="circle-icon-box sm"><i data-lucide="${item.isAdmin ? 'shield' : 'user'}"></i></div>
        <div class="online-dot-badge ${item.isOnline ? 'online' : 'offline'}"></div>
      </div>
      <div style="flex: 1; min-width: 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <span style="font-size: 13px; font-weight: 800; color: var(--navy-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</span>
          <span style="font-size: 10px; color: var(--text-muted);">${item.lastTime}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 11px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 170px;">${item.lastMsg}</span>
          ${item.unread > 0 ? `<span class="unread-count-badge">${item.unread}</span>` : ''}
        </div>
      </div>
    `;

    container.appendChild(div);
  });

  if (window.lucide) window.lucide.createIcons();
}

function selectTeacherConversation(convId) {
  activeTeacherChatId = convId;
  const item = teacherConversationsList.find(c => c.id === convId);
  if (!item) return;

  item.unread = 0;

  document.getElementById('chatActiveTitle').innerText = item.name;
  document.getElementById('chatActiveSub').innerText = item.sub;
  
  const onlineDot = document.getElementById('chatActiveOnlineDot');
  if (onlineDot) {
    onlineDot.className = `online-dot-badge ${item.isOnline ? 'online' : 'offline'}`;
  }

  const profileBtn = document.getElementById('chatHeaderProfileBtn');
  if (profileBtn) {
    if (item.isAdmin) {
      profileBtn.style.display = 'none';
    } else {
      profileBtn.style.display = 'inline-flex';
      profileBtn.onclick = () => openStudentProfileModal(item.id);
    }
  }

  renderTeacherActiveChatHistory();
  renderTeacherConversationList();
}

function renderTeacherActiveChatHistory() {
  const container = document.getElementById('teacherChatMessagesContainer');
  if (!container) return;

  const item = teacherConversationsList.find(c => c.id === activeTeacherChatId);
  if (!item) return;

  container.innerHTML = '';

  item.messages.forEach(m => {
    const isSent = m.sender === 'teacher';
    const group = document.createElement('div');
    group.className = `chat-message-group ${isSent ? 'sent' : 'received'}`;

    let attachmentMarkup = '';
    if (m.attachment) {
      attachmentMarkup = `
        <div class="chat-attachment-card">
          <span>📎 ${m.attachment.name}</span>
          <span style="opacity: 0.8; font-size: 10px;">(${m.attachment.size})</span>
        </div>
      `;
    }

    group.innerHTML = `
      <div class="chat-bubble">
        ${m.text ? `<div>${m.text.replace(/\n/g, '<br>')}</div>` : ''}
        ${attachmentMarkup}
      </div>
      <div class="chat-meta-info">
        <span>${m.timestamp}</span>
        ${isSent ? `<span style="color: var(--navy-primary); font-weight: 800;">• Read ✓✓</span>` : ''}
      </div>
    `;

    container.appendChild(group);
  });

  container.scrollTop = container.scrollHeight;
}

function handleSendTeacherChatMessage(e) {
  if (e && e.preventDefault) e.preventDefault();
  
  const input = document.getElementById('teacherChatMessageInput');
  const text = input ? input.value.trim() : '';

  if (!text && !teacherChatAttachedFile) {
    showToast('Please type a message or attach a file to send.');
    return;
  }

  const item = teacherConversationsList.find(c => c.id === activeTeacherChatId);
  if (!item) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const newMsg = {
    sender: 'teacher',
    text: text,
    timestamp: timeStr
  };

  if (teacherChatAttachedFile) {
    newMsg.attachment = { ...teacherChatAttachedFile };
  }

  item.messages.push(newMsg);
  item.lastMsg = text ? text : `📎 Attached: ${teacherChatAttachedFile.name}`;
  item.lastTime = timeStr;

  // Clear inputs and attachments
  if (input) input.value = '';
  removeTeacherChatAttachedFile();

  const picker = document.getElementById('teacherChatEmojiPicker');
  if (picker) picker.style.display = 'none';

  renderTeacherActiveChatHistory();
  renderTeacherConversationList();

  // Instant smooth scroll to bottom
  const container = document.getElementById('teacherChatMessagesContainer');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }

  // Interactive Student Reply Simulation for Online Candidates
  if (item.isOnline && !item.isAdmin) {
    const typingIndicator = document.getElementById('teacherChatTypingIndicator');
    const typingText = document.getElementById('typingIndicatorText');
    
    setTimeout(() => {
      if (typingIndicator && typingText) {
        typingText.innerText = `${item.name.split(' ')[0]} is typing...`;
        typingIndicator.style.display = 'flex';
        container.scrollTop = container.scrollHeight;
      }
    }, 1000);

    setTimeout(() => {
      if (typingIndicator) typingIndicator.style.display = 'none';

      let autoReplyText = "Thank you Sir! I will follow your instructions.";
      if (item.name.includes("Ahmed")) autoReplyText = "Thank you Sir! I will double check the code requirements.";
      else if (item.name.includes("Ayesha")) autoReplyText = "Understood Sir, thank you for clarifying!";
      else if (item.name.includes("Ali")) autoReplyText = "JazakAllah Sir, I got it now.";
      else if (item.name.includes("Fatima")) autoReplyText = "Thank you Sir! Uploading the revised file now.";
      else if (item.name.includes("Rehman")) autoReplyText = "Thank you Sir, testing the authentication fix now.";

      const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      item.messages.push({
        sender: 'other',
        text: autoReplyText,
        timestamp: replyTime
      });
      item.lastMsg = autoReplyText;
      item.lastTime = replyTime;

      if (activeTeacherChatId === item.id) {
        renderTeacherActiveChatHistory();
      }
      renderTeacherConversationList();
    }, 3200);
  }
}

function filterTeacherConversations() {
  renderTeacherConversationList();
}

function setTeacherChatFilter(filter) {
  teacherChatFilter = filter;
  ['all', 'unread', 'admin'].forEach(f => {
    const btn = document.getElementById(`chat-tab-${f}`);
    if (btn) {
      if (f === filter) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });
  renderTeacherConversationList();
}

/* ==========================================================================
   STUDENT PROFILE & MESSAGE ACTION MODALS CONTROLLER
   ========================================================================== */

function openStudentProfileModal(studentId) {
  const st = teacherStudentsData.find(s => s.id === studentId);
  if (!st) return;

  document.getElementById('modalStudentName').innerText = st.name;
  document.getElementById('modalStudentSub').innerText = `${st.id} • ${st.batch}`;
  document.getElementById('modalProfId').innerText = st.id;
  document.getElementById('modalProfCourse').innerText = st.course;
  document.getElementById('modalProfBatch').innerText = st.batch;
  document.getElementById('modalProfEmail').innerText = st.email;
  document.getElementById('modalProfPhone').innerText = st.phone;
  document.getElementById('modalProfEnrollDate').innerText = st.enrollDate;
  document.getElementById('modalProfAttn').innerText = st.attendance;
  document.getElementById('modalProfProgress').innerText = st.progress;
  document.getElementById('modalProfQuiz').innerText = st.quizScore;
  document.getElementById('modalProfAssign').innerText = st.assignmentStatus;
  
  const statusBadge = document.getElementById('modalProfStatus');
  if (statusBadge) {
    statusBadge.innerText = st.status;
    statusBadge.className = `status-badge ${st.status === 'Active' ? 'present' : 'absent'}`;
  }

  const msgBtn = document.getElementById('modalProfMsgBtn');
  if (msgBtn) {
    msgBtn.onclick = () => {
      closeStudentProfileModal();
      switchView('teacher-messages');
      selectTeacherConversation(st.id);
    };
  }

  const modal = document.getElementById('studentProfileModal');
  if (modal) {
    modal.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
  }
}

function closeStudentProfileModal() {
  const modal = document.getElementById('studentProfileModal');
  if (modal) modal.style.display = 'none';
}

function openStudentMessageModal(studentId) {
  switchView('teacher-messages');
  selectTeacherConversation(studentId);
}

function closeStudentMessageModal() {
  const modal = document.getElementById('studentMessageModal');
  if (modal) modal.style.display = 'none';
  currentTargetMessageStudent = null;
}

function handleSendStudentMessageSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('studentMessageInput');
  if (!input || !input.value.trim()) return;

  const msg = input.value.trim();
  const targetName = currentTargetMessageStudent ? currentTargetMessageStudent.name : 'Student';

  showToast(`Message sent to ${targetName} successfully!`);
  closeStudentMessageModal();
}

/* ==========================================================================
   TEACHER ATTENDANCE REGISTER CONTROLLER
   ========================================================================== */

function renderTeacherAttendanceRegister() {
  const tableBody = document.getElementById('teacherAttendanceTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = '';

  filteredTeacherAttendance.forEach(st => {
    const tr = document.createElement('tr');
    
    let badgeClass = 'present';
    if (st.status === 'Absent') badgeClass = 'absent';
    else if (st.status === 'Late') badgeClass = 'absent';
    else if (st.status === 'Leave') badgeClass = 'present';

    let badgeColorStyle = '';
    if (st.status === 'Late') badgeColorStyle = 'background:#FFFBEB; color:#D97706; border-color:#F59E0B;';
    else if (st.status === 'Leave') badgeColorStyle = 'background:#EFF6FF; color:#2563EB; border-color:#3B82F6;';

    tr.innerHTML = `
      <td style="font-weight:700; color:var(--navy-primary);">${st.id}</td>
      <td style="font-weight:700;">${st.name}</td>
      <td>${st.course}</td>
      <td>${st.batch}</td>
      <td><span class="status-badge ${badgeClass}" id="attn-badge-${st.id}" style="${badgeColorStyle}">${st.status}</span></td>
      <td>
        <select class="form-select" style="padding: 4px 8px; font-size: 12px; font-weight: 700;" onchange="updateStudentAttendanceStatus('${st.id}', this.value)">
          <option value="Present" ${st.status === 'Present' ? 'selected' : ''}>Present</option>
          <option value="Absent" ${st.status === 'Absent' ? 'selected' : ''}>Absent</option>
          <option value="Late" ${st.status === 'Late' ? 'selected' : ''}>Late</option>
          <option value="Leave" ${st.status === 'Leave' ? 'selected' : ''}>Leave</option>
        </select>
      </td>
      <td>
        <input type="text" class="form-input" style="padding: 4px 8px; font-size: 12px;" value="${st.remarks}" onchange="updateStudentAttendanceRemarks('${st.id}', this.value)">
      </td>
    `;
    tableBody.appendChild(tr);
  });

  updateTeacherAttendanceSummary();
}

function updateStudentAttendanceStatus(studentId, newStatus) {
  const item = teacherAttendanceData.find(s => s.id === studentId);
  if (item) {
    item.status = newStatus;
    
    const badge = document.getElementById(`attn-badge-${studentId}`);
    if (badge) {
      badge.innerText = newStatus;
      badge.className = 'status-badge';
      if (newStatus === 'Present') {
        badge.classList.add('present');
        badge.style.cssText = '';
      } else if (newStatus === 'Absent') {
        badge.classList.add('absent');
        badge.style.cssText = '';
      } else if (newStatus === 'Late') {
        badge.style.cssText = 'background:#FFFBEB; color:#D97706; border-color:#F59E0B;';
      } else if (newStatus === 'Leave') {
        badge.style.cssText = 'background:#EFF6FF; color:#2563EB; border-color:#3B82F6;';
      }
    }

    updateTeacherAttendanceSummary();
    showToast(`Attendance for ${item.name} set to ${newStatus}`);
  }
}

function updateStudentAttendanceRemarks(studentId, newRemarks) {
  const item = teacherAttendanceData.find(s => s.id === studentId);
  if (item) {
    item.remarks = newRemarks;
  }
}

function updateTeacherAttendanceSummary() {
  const total = teacherAttendanceData.length;
  let present = 0, absent = 0, late = 0, leave = 0;

  teacherAttendanceData.forEach(st => {
    if (st.status === 'Present') present++;
    else if (st.status === 'Absent') absent++;
    else if (st.status === 'Late') late++;
    else if (st.status === 'Leave') leave++;
  });

  const totalElem = document.getElementById('attnSummaryTotal');
  const presElem = document.getElementById('attnSummaryPresent');
  const absElem = document.getElementById('attnSummaryAbsent');
  const lateElem = document.getElementById('attnSummaryLate');
  const leaveElem = document.getElementById('attnSummaryLeave');

  if (totalElem) totalElem.innerText = total;
  if (presElem) presElem.innerText = present;
  if (absElem) absElem.innerText = absent;
  if (lateElem) lateElem.innerText = late;
  if (leaveElem) leaveElem.innerText = leave;
}

function filterTeacherAttendance() {
  const search = document.getElementById('attnSearchInput')?.value.toLowerCase() || '';
  const batch = document.getElementById('attnBatchFilter')?.value || 'all';

  filteredTeacherAttendance = teacherAttendanceData.filter(st => {
    const matchSearch = st.name.toLowerCase().includes(search) || st.id.toLowerCase().includes(search);
    const matchBatch = batch === 'all' || st.batch === batch;
    return matchSearch && matchBatch;
  });

  renderTeacherAttendanceRegister();
}

/* ==========================================================================
   TEACHER STUDENTS ROSTER CONTROLLER
   ========================================================================== */

function renderTeacherStudentsRoster() {
  const tableBody = document.getElementById('teacherStudentsTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = '';

  const startIndex = (teacherStudentsCurrentPage - 1) * teacherStudentsPerPage;
  const pageStudents = filteredTeacherStudents.slice(startIndex, startIndex + teacherStudentsPerPage);

  if (pageStudents.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="13" style="text-align:center; padding:20px; color:var(--text-muted);">No student records found matching search filters.</td></tr>`;
    renderTeacherStudentsPaginationControls(0);
    return;
  }

  pageStudents.forEach(st => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight:700; color:var(--navy-primary); white-space:nowrap;">${st.id}</td>
      <td style="font-weight:700;">${st.name}</td>
      <td>${st.course}</td>
      <td style="white-space:nowrap;">${st.batch}</td>
      <td style="font-size:12px; color:var(--text-muted);">${st.email}</td>
      <td style="font-size:12px; font-weight:700; white-space:nowrap;">${st.phone}</td>
      <td style="font-weight:700; color:#059669;">${st.attendance}</td>
      <td style="font-weight:700; color:var(--navy-primary);">${st.progress}</td>
      <td style="font-weight:700;">${st.quizScore}</td>
      <td><span class="status-badge ${st.assignmentStatus === 'Submitted' ? 'present' : 'absent'}">${st.assignmentStatus}</span></td>
      <td style="font-size:12px; white-space:nowrap;">${st.enrollDate}</td>
      <td><span class="status-badge ${st.status === 'Active' ? 'present' : 'absent'}">${st.status}</span></td>
      <td>
        <div style="display:flex; gap:4px; flex-wrap:nowrap;">
          <button class="btn-secondary btn-sm" onclick="openStudentProfileModal('${st.id}')">Profile</button>
          <button class="btn-secondary btn-sm" onclick="openStudentMessageModal('${st.id}')">Message</button>
        </div>
      </td>
    `;
    tableBody.appendChild(tr);
  });

  const totalPages = Math.ceil(filteredTeacherStudents.length / teacherStudentsPerPage);
  renderTeacherStudentsPaginationControls(totalPages);
}

function renderTeacherStudentsPaginationControls(totalPages) {
  const container = document.getElementById('teacherStudentsPagination');
  if (!container) return;

  container.innerHTML = '';
  if (totalPages <= 1) return;

  const prevBtn = document.createElement('button');
  prevBtn.className = 'btn-secondary btn-sm';
  prevBtn.innerText = '← Previous';
  prevBtn.disabled = teacherStudentsCurrentPage === 1;
  prevBtn.onclick = () => { if (teacherStudentsCurrentPage > 1) { teacherStudentsCurrentPage--; renderTeacherStudentsRoster(); } };
  container.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = `btn-sm ${i === teacherStudentsCurrentPage ? 'btn-primary' : 'btn-secondary'}`;
    pageBtn.innerText = i;
    pageBtn.onclick = () => { teacherStudentsCurrentPage = i; renderTeacherStudentsRoster(); };
    container.appendChild(pageBtn);
  }

  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn-secondary btn-sm';
  nextBtn.innerText = 'Next →';
  nextBtn.disabled = teacherStudentsCurrentPage === totalPages;
  nextBtn.onclick = () => { if (teacherStudentsCurrentPage < totalPages) { teacherStudentsCurrentPage++; renderTeacherStudentsRoster(); } };
  container.appendChild(nextBtn);

  const counterInfo = document.getElementById('teacherStudentsCounter');
  if (counterInfo) {
    const start = (teacherStudentsCurrentPage - 1) * teacherStudentsPerPage + 1;
    const end = Math.min(teacherStudentsCurrentPage * teacherStudentsPerPage, filteredTeacherStudents.length);
    counterInfo.innerText = `Showing ${start}-${end} of ${filteredTeacherStudents.length} Students`;
  }
}

function filterTeacherStudents() {
  const search = document.getElementById('studentSearchInput')?.value.toLowerCase() || '';
  const batch = document.getElementById('studentBatchFilter')?.value || 'all';
  const status = document.getElementById('studentStatusFilter')?.value || 'all';

  filteredTeacherStudents = teacherStudentsData.filter(st => {
    const matchSearch = st.name.toLowerCase().includes(search) || st.id.toLowerCase().includes(search) || st.email.toLowerCase().includes(search);
    const matchBatch = batch === 'all' || st.batch === batch;
    const matchStatus = status === 'all' || st.status.toLowerCase() === status.toLowerCase();
    return matchSearch && matchBatch && matchStatus;
  });

  teacherStudentsCurrentPage = 1;
  renderTeacherStudentsRoster();
}

/* ==========================================================================
   AUTHENTICATION & SESSION MANAGEMENT CONTROLLER
   ========================================================================== */

function getAuthSession() {
  const raw = localStorage.getItem('titan_auth_session');
  if (raw) {
    try { 
      const parsed = JSON.parse(raw); 
      if (parsed && typeof parsed.isLoggedIn === 'boolean') {
        return parsed;
      }
    } catch (e) { }
  }
  return { isLoggedIn: false, user: null, role: null };
}

function setAuthRole(role) {
  activeAuthRole = role;
  const tabs = ['student', 'teacher', 'admin'];
  tabs.forEach(r => {
    const btn = document.getElementById(`tab-${r}`);
    if (btn) {
      if (r === role) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });

  const emailInput = document.getElementById('loginEmail');
  if (emailInput) {
    if (role === 'student') emailInput.value = 'ahmed.student@titan.edu.pk';
    else if (role === 'teacher') emailInput.value = 'tariq.mehmood@titan.edu.pk';
    else if (role === 'admin') emailInput.value = 'admin@titan.edu.pk';
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;

  if (!email || !pass) {
    showToast('Please fill in both Email and Password fields.');
    return;
  }

  let session = { isLoggedIn: true, role: activeAuthRole, email };
  if (activeAuthRole === 'student') {
    session.name = 'Muhammad Ahmed';
    localStorage.setItem('titan_auth_session', JSON.stringify(session));
    showToast('Signed in successfully as Student');
    window.location.hash = '#/student/dashboard';
  } else if (activeAuthRole === 'teacher') {
    session.name = 'Engr. Tariq Mehmood';
    localStorage.setItem('titan_auth_session', JSON.stringify(session));
    showToast('Signed in successfully as Teacher');
    window.location.hash = '#/teacher/dashboard';
  } else if (activeAuthRole === 'admin') {
    session.name = 'System Administrator';
    localStorage.setItem('titan_auth_session', JSON.stringify(session));
    showToast('Signed in successfully as Administrator');
    window.location.hash = '#/admin/dashboard';
  }
}

function loginWithGoogle() {
  let session = { isLoggedIn: true, role: activeAuthRole };
  if (activeAuthRole === 'student') {
    session.name = 'Muhammad Ahmed';
    localStorage.setItem('titan_auth_session', JSON.stringify(session));
    showToast('Authenticated via Google as Student');
    window.location.hash = '#/student/dashboard';
  } else if (activeAuthRole === 'teacher') {
    session.name = 'Engr. Tariq Mehmood';
    localStorage.setItem('titan_auth_session', JSON.stringify(session));
    showToast('Authenticated via Google as Teacher');
    window.location.hash = '#/teacher/dashboard';
  } else if (activeAuthRole === 'admin') {
    session.name = 'System Administrator';
    localStorage.setItem('titan_auth_session', JSON.stringify(session));
    showToast('Authenticated via Google as Administrator');
    window.location.hash = '#/admin/dashboard';
  }
}

function confirmLogout() {
  const modal = document.getElementById('logoutConfirmModal');
  if (modal) {
    modal.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
  }
}

function closeLogoutModal() {
  const modal = document.getElementById('logoutConfirmModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function executeLogout() {
  closeLogoutModal();
  localStorage.removeItem('titan_auth_session');
  localStorage.removeItem('titan_active_route');
  sessionStorage.clear();
  showToast('Signed out successfully');
  window.location.hash = '#/login';
}

function logout() {
  confirmLogout();
}

function togglePasswordVisibility(fieldId, iconId) {
  const input = document.getElementById(fieldId);
  const icon = document.getElementById(iconId);
  if (!input) return;

  if (input.type === 'password') {
    input.type = 'text';
    if (icon) icon.setAttribute('data-lucide', 'eye-off');
  } else {
    input.type = 'password';
    if (icon) icon.setAttribute('data-lucide', 'eye');
  }
  if (window.lucide) window.lucide.createIcons();
}

function handleSendOTP(e) {
  e.preventDefault();
  const email = document.getElementById('forgotEmail').value;
  if (!email) { showToast('Please enter your registered email'); return; }
  showToast('OTP verification code sent to ' + email);
  window.location.hash = '#/verify-otp';
}

function handleVerifyOTP(e) {
  e.preventDefault();
  const code = document.getElementById('otpCode').value;
  if (code === '123456' || code.length === 6) {
    showToast('OTP verified successfully!');
    window.location.hash = '#/reset-password';
  } else {
    showToast('Invalid OTP code. Please enter 123456');
  }
}

function handleSaveNewPassword(e) {
  e.preventDefault();
  const newP = document.getElementById('newPass').value;
  const confP = document.getElementById('confirmNewPass').value;

  if (newP !== confP) {
    showToast('Passwords do not match');
    return;
  }
  showToast('Password reset successfully!');
  window.location.hash = '#/password-success';
}

/* ==========================================================================
   ROUTE GUARD & NAVIGATION CONTROLLER
   ========================================================================== */

function initRouting() {
  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange();
}

function handleRouteChange() {
  const currentHash = window.location.hash;
  const session = getAuthSession();

  let targetView = hashMap[currentHash];

  if (!targetView) {
    if (!session.isLoggedIn) {
      targetView = 'login';
      window.location.hash = '#/login';
    } else {
      if (session.role === 'teacher') {
        targetView = 'teacher-dashboard';
        window.location.hash = '#/teacher/dashboard';
      } else if (session.role === 'admin') {
        targetView = 'admin-dashboard';
        window.location.hash = '#/admin/dashboard';
      } else {
        const savedView = localStorage.getItem('titan_active_route') || 'dashboard';
        targetView = savedView && routeMap[savedView] ? savedView : 'dashboard';
        window.location.hash = routeMap[targetView];
      }
    }
    return;
  }

  // 1. Unauthenticated Route Guard
  const authRoutes = ['login', 'forgot-password', 'otp', 'reset-password', 'password-success'];
  if (!session.isLoggedIn && !authRoutes.includes(targetView)) {
    showToast('Please sign in to access TITAN LMS');
    window.location.hash = '#/login';
    return;
  }

  // 2. Role Access Guard
  if (session.isLoggedIn) {
    const teacherRoutes = [
      'teacher-dashboard', 'teacher-my-courses', 'teacher-course-content', 'teacher-assignments',
      'teacher-quizzes', 'teacher-live-classes', 'teacher-attendance',
      'teacher-students', 'teacher-certificates', 'teacher-announcements',
      'teacher-messages', 'teacher-calendar', 'teacher-resources', 'teacher-reports',
      'teacher-profile', 'teacher-settings'
    ];

    if (session.role === 'student' && (teacherRoutes.includes(targetView) || targetView === 'admin-dashboard')) {
      showToast('Access Denied: Student cannot access Teacher or Admin portal');
      window.location.hash = '#/student/dashboard';
      return;
    }

    if (session.role === 'teacher' && targetView === 'admin-dashboard') {
      showToast('Access Denied: Teacher cannot access Admin portal');
      window.location.hash = '#/teacher/dashboard';
      return;
    }

    if (targetView === 'login') {
      if (session.role === 'teacher') window.location.hash = '#/teacher/dashboard';
      else if (session.role === 'admin') window.location.hash = '#/admin/dashboard';
      else window.location.hash = '#/student/dashboard';
      return;
    }
  }

  const isTeacherRoute = targetView.startsWith('teacher-');
  if (!authRoutes.includes(targetView) && !isTeacherRoute && targetView !== 'admin-dashboard') {
    localStorage.setItem('titan_active_route', targetView);
  }

  activateView(targetView);
}

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item[data-view]');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = item.getAttribute('data-view');
      switchView(targetView);
    });
  });
}

function switchView(viewName) {
  if (routeMap[viewName]) {
    window.location.hash = routeMap[viewName];
  } else {
    activateView('dashboard');
  }
}

function activateView(viewName) {
  const studentSidebar = document.getElementById('appSidebar');
  const studentMainWrapper = document.getElementById('appMainWrapper');
  const teacherSidebar = document.getElementById('teacherSidebar');
  const teacherMainWrapper = document.getElementById('teacherMainWrapper');

  const authRoutes = ['login', 'forgot-password', 'otp', 'reset-password', 'password-success', 'admin-dashboard'];
  const isTeacherRoute = viewName.startsWith('teacher-');

  if (authRoutes.includes(viewName)) {
    if (studentSidebar) studentSidebar.style.display = 'none';
    if (studentMainWrapper) studentMainWrapper.style.display = 'none';
    if (teacherSidebar) teacherSidebar.style.display = 'none';
    if (teacherMainWrapper) teacherMainWrapper.style.display = 'none';
  } else if (isTeacherRoute) {
    if (studentSidebar) studentSidebar.style.display = 'none';
    if (studentMainWrapper) studentMainWrapper.style.display = 'none';
    if (teacherSidebar) teacherSidebar.style.display = 'flex';
    if (teacherMainWrapper) {
      teacherMainWrapper.style.display = 'flex';
      teacherMainWrapper.style.marginLeft = 'var(--sidebar-width)';
    }
  } else {
    if (teacherSidebar) teacherSidebar.style.display = 'none';
    if (teacherMainWrapper) teacherMainWrapper.style.display = 'none';
    if (studentSidebar) studentSidebar.style.display = 'flex';
    if (studentMainWrapper) {
      studentMainWrapper.style.display = 'flex';
      studentMainWrapper.style.marginLeft = 'var(--sidebar-width)';
    }
  }

  const navItems = document.querySelectorAll('.nav-item[data-view]');
  navItems.forEach(item => {
    if (item.getAttribute('data-view') === viewName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const teacherNavItems = document.querySelectorAll('.nav-item[data-teacher-view]');
  teacherNavItems.forEach(item => {
    if (item.getAttribute('data-teacher-view') === viewName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const pages = document.querySelectorAll('.view-page');
  pages.forEach(page => {
    if (page.id === `view-${viewName}`) {
      page.classList.add('active');
      page.style.display = authRoutes.includes(viewName) && viewName !== 'admin-dashboard' ? 'flex' : 'block';
      if (viewName === 'dashboard') {
        page.style.display = 'grid';
      }
    } else {
      page.classList.remove('active');
      page.style.display = 'none';
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.lucide) window.lucide.createIcons();
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerText = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function initCharts() {
  const miniCanvas = document.getElementById('miniAttendanceChart');
  if (miniCanvas && window.Chart) {
    new window.Chart(miniCanvas.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Attended', 'Absent'],
        datasets: [{
          data: [24, 1],
          backgroundColor: ['#0F2D69', '#E5E7EB'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: { legend: { display: false }, tooltip: { enabled: true } }
      }
    });
  }

  const attnViewCanvas = document.getElementById('attnViewChart');
  if (attnViewCanvas && window.Chart) {
    new window.Chart(attnViewCanvas.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Attended', 'Absent'],
        datasets: [{
          data: [24, 1],
          backgroundColor: ['#0F2D69', '#E5E7EB'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: { legend: { display: false }, tooltip: { enabled: true } }
      }
    });
  }
}

/* ==========================================================================
   INTERACTIVE QUIZ ENGINE FUNCTIONS
   ========================================================================== */

function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [null, null, null, null, null];
  timeRemainingSeconds = 600;
  quizStartTime = Date.now();

  document.getElementById('quiz-list-container').style.display = 'none';
  document.getElementById('quiz-results-container').style.display = 'none';
  document.getElementById('quiz-review-container').style.display = 'none';
  document.getElementById('quiz-runner-container').style.display = 'flex';

  renderQuestion();
  startTimer();

  if (window.lucide) { window.lucide.createIcons(); }
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeRemainingSeconds--;
    updateTimerDisplay();

    if (timeRemainingSeconds <= 0) {
      clearInterval(timerInterval);
      showToast('Time expired! Submitting your quiz automatically...');
      submitQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const display = document.getElementById('quiz-timer-display');
  if (!display) return;
  const minutes = Math.floor(timeRemainingSeconds / 60);
  const seconds = timeRemainingSeconds % 60;
  display.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function renderQuestion() {
  const qData = quizQuestions[currentQuestionIndex];
  
  document.getElementById('quiz-progress-text').innerText = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  document.getElementById('quiz-question-text').innerText = qData.question;

  const optionsList = document.getElementById('quiz-options-list');
  optionsList.innerHTML = '';

  const labels = ['A', 'B', 'C', 'D'];
  qData.options.forEach((optText, idx) => {
    const btn = document.createElement('div');
    btn.className = `option-btn ${userAnswers[currentQuestionIndex] === idx ? 'selected' : ''}`;
    btn.onclick = () => selectOption(idx);

    btn.innerHTML = `
      <span><strong>${labels[idx]}.</strong> ${optText}</span>
      <span style="font-size: 11px; opacity: 0.8;">${userAnswers[currentQuestionIndex] === idx ? '✓ Selected' : ''}</span>
    `;
    optionsList.appendChild(btn);
  });

  const prevBtn = document.getElementById('quiz-prev-btn');
  prevBtn.disabled = currentQuestionIndex === 0;

  const nextBtn = document.getElementById('quiz-next-btn');
  const submitBtn = document.getElementById('quiz-submit-btn');

  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-flex';
  } else {
    nextBtn.style.display = 'inline-flex';
    submitBtn.style.display = 'none';
  }
}

function selectOption(optIndex) {
  userAnswers[currentQuestionIndex] = optIndex;
  renderQuestion();
}

function nextQuestion() {
  if (userAnswers[currentQuestionIndex] === null) {
    showToast('Please select an answer before proceeding');
  }
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function submitQuiz() {
  const unansweredCount = userAnswers.filter(ans => ans === null).length;
  if (unansweredCount > 0) {
    if (!confirm(`You have ${unansweredCount} unanswered question(s). Submit quiz anyway?`)) {
      return;
    }
  }

  clearInterval(timerInterval);
  quizElapsedTimeSeconds = Math.floor((Date.now() - quizStartTime) / 1000);

  let correctCount = 0;
  userAnswers.forEach((ans, idx) => {
    if (ans === quizQuestions[idx].correctIndex) {
      correctCount++;
    }
  });

  const totalScore = correctCount * 10;
  const percentage = Math.round((totalScore / 50) * 100);
  const isPassed = totalScore >= 35;

  const mins = Math.floor(quizElapsedTimeSeconds / 60);
  const secs = quizElapsedTimeSeconds % 60;
  const timeFormatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  document.getElementById('res-score-text').innerText = `${totalScore} / 50`;
  document.getElementById('res-percent-text').innerText = `${percentage}%`;
  document.getElementById('res-correct-text').innerText = `${correctCount} / ${quizQuestions.length}`;
  document.getElementById('res-time-text').innerText = timeFormatted;

  const badge = document.getElementById('res-status-badge');
  if (isPassed) {
    badge.className = 'pass-badge';
    badge.innerText = 'PASSED';
  } else {
    badge.className = 'fail-badge';
    badge.innerText = 'FAILED';
  }

  studentQuizStats.recentScore = `${totalScore} / 50`;
  studentQuizStats.completedQuizzes += 1;
  studentQuizStats.totalScoreSum += totalScore;
  studentQuizStats.totalScoreMax += 50;
  studentQuizStats.avgScorePercentage = Math.round((studentQuizStats.totalScoreSum / studentQuizStats.totalScoreMax) * 100);

  updateQuizStatsDisplay();

  document.getElementById('quiz-runner-container').style.display = 'none';
  document.getElementById('quiz-results-container').style.display = 'block';
}

function updateQuizStatsDisplay() {
  const recElem = document.getElementById('dash-recent-score');
  const avgElem = document.getElementById('dash-avg-score');
  const compElem = document.getElementById('dash-completed-quizzes');

  if (recElem) recElem.innerText = studentQuizStats.recentScore;
  if (avgElem) avgElem.innerText = `${studentQuizStats.avgScorePercentage}%`;
  if (compElem) compElem.innerText = studentQuizStats.completedQuizzes;
}

function showAnswerReview() {
  const reviewList = document.getElementById('review-questions-list');
  if (!reviewList) return;

  reviewList.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];

  quizQuestions.forEach((q, idx) => {
    const studentAnsIdx = userAnswers[idx];
    const isCorrect = studentAnsIdx === q.correctIndex;

    const studentAnsText = studentAnsIdx !== null ? `${labels[studentAnsIdx]}. ${q.options[studentAnsIdx]}` : "Not Answered";
    const correctAnsText = `${labels[q.correctIndex]}. ${q.options[q.correctIndex]}`;

    const card = document.createElement('div');
    card.className = 'review-item-card';

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
        <span style="font-size: 14px; font-weight: 800; color: var(--navy-primary);">Question ${idx + 1}: ${q.question}</span>
        <span class="${isCorrect ? 'review-badge-correct' : 'review-badge-incorrect'}">
          ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
        </span>
      </div>
      <div style="font-size: 12px; margin-bottom: 4px;">
        <span style="color: var(--text-muted);">Your Answer: </span>
        <strong style="color: ${isCorrect ? '#059669' : '#DC2626'};">${studentAnsText}</strong>
      </div>
      <div style="font-size: 12px; margin-bottom: 6px;">
        <span style="color: var(--text-muted);">Correct Answer: </span>
        <strong style="color: #059669;">${correctAnsText}</strong>
      </div>
      <div style="font-size: 11px; color: var(--navy-primary); background: var(--navy-light); padding: 6px 10px; border-radius: 6px;">
        <strong>Explanation:</strong> ${q.explanation}
      </div>
    `;

    reviewList.appendChild(card);
  });

  document.getElementById('quiz-results-container').style.display = 'none';
  document.getElementById('quiz-review-container').style.display = 'block';
}

function retakeQuiz() {
  startQuiz();
}

function backToQuizList() {
  clearInterval(timerInterval);
  document.getElementById('quiz-runner-container').style.display = 'none';
  document.getElementById('quiz-results-container').style.display = 'none';
  document.getElementById('quiz-review-container').style.display = 'none';
  document.getElementById('quiz-list-container').style.display = 'block';
}

/* ==========================================================================
   COURSE RESOURCES LIBRARY MODULE CONTROLLER (FILES & GITHUB REPOSITORIES)
   ========================================================================== */

let teacherResourcesData = [
  {
    id: 1,
    type: "file",
    name: "React19_Notes.pdf",
    fileType: "PDF Document",
    size: "2.8 MB",
    uploadDate: "01 Aug 2026",
    uploadedBy: "Engr. Tariq Mehmood"
  },
  {
    id: 2,
    type: "github",
    name: "react-19-server-components-demo",
    url: "https://github.com/titan-lms/react-19-server-components-demo",
    uploadDate: "30 Jul 2026",
    uploadedBy: "Engr. Tariq Mehmood"
  },
  {
    id: 3,
    type: "file",
    name: "FullStack_Ecommerce_API_Architecture.zip",
    fileType: "ZIP Archive",
    size: "14.5 MB",
    uploadDate: "28 Jul 2026",
    uploadedBy: "Engr. Tariq Mehmood"
  },
  {
    id: 4,
    type: "file",
    name: "CSS_Grid_Flexbox_Masterclass.pptx",
    fileType: "PowerPoint Presentation",
    size: "8.2 MB",
    uploadDate: "25 Jul 2026",
    uploadedBy: "Engr. Tariq Mehmood"
  }
];

function renderTeacherResources() {
  const container = document.getElementById('teacherResourcesListContainer');
  if (!container) return;

  container.innerHTML = '';

  if (teacherResourcesData.length === 0) {
    container.innerHTML = `
      <div class="card-box" style="text-align: center; padding: 48px 24px; color: var(--text-muted);">
        <i data-lucide="hard-drive" style="width: 36px; height: 36px; color: var(--text-muted); margin-bottom: 12px;"></i>
        <div style="font-size: 16px; font-weight: 600; color: var(--navy-primary);">No course resources have been uploaded yet.</div>
        <div style="font-size: 13px; margin-top: 4px;">Click "Upload File" or "Add GitHub Link" above to add new materials.</div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  teacherResourcesData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'resource-card';

    if (item.type === 'github') {
      card.innerHTML = `
        <div style="display: flex; align-items: center; gap: 16px; flex: 1; min-width: 0;">
          <div class="resource-icon-box github-icon-box">
            <i data-lucide="github" style="width: 20px; height: 20px;"></i>
          </div>
          <div style="min-width: 0; flex: 1;">
            <div class="resource-name-text" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</div>
            <div class="resource-metadata-text">
              <span>GitHub Repository</span>
              <span>•</span>
              <a href="${item.url}" target="_blank" class="resource-github-url" title="${item.url}">${item.url}</a>
              <span>•</span>
              <span>Uploaded by ${item.uploadedBy}</span>
              <span>•</span>
              <span>${item.uploadDate}</span>
            </div>
          </div>
        </div>

        <div class="resource-btn-group">
          <button type="button" class="resource-btn" onclick="window.open('${item.url}', '_blank')">Open</button>
          <button type="button" class="resource-btn" onclick="copyGithubLink('${item.url}')">Copy</button>
          <button type="button" class="resource-btn" onclick="deleteTeacherResource(${item.id})">Delete</button>
        </div>
      `;
    } else {
      let iconName = "file-text";
      const fileExt = item.name.split('.').pop().toLowerCase();
      if (['zip', 'rar', '7z'].includes(fileExt)) iconName = "archive";
      else if (['ppt', 'pptx'].includes(fileExt)) iconName = "presentation";
      else if (['xls', 'xlsx'].includes(fileExt)) iconName = "file-spreadsheet";
      else if (['mp4', 'mkv', 'avi'].includes(fileExt)) iconName = "video";
      else if (['doc', 'docx'].includes(fileExt)) iconName = "file-text";

      card.innerHTML = `
        <div style="display: flex; align-items: center; gap: 16px; flex: 1; min-width: 0;">
          <div class="resource-icon-box">
            <i data-lucide="${iconName}" style="width: 20px; height: 20px;"></i>
          </div>
          <div style="min-width: 0; flex: 1;">
            <div class="resource-name-text" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</div>
            <div class="resource-metadata-text">
              <span>${item.fileType}</span>
              <span>•</span>
              <span>Uploaded by ${item.uploadedBy}</span>
              <span>•</span>
              <span>${item.uploadDate}</span>
              <span>•</span>
              <span>${item.size}</span>
            </div>
          </div>
        </div>

        <div class="resource-btn-group">
          <button type="button" class="resource-btn" onclick="viewTeacherResourceFile('${item.name}')">View</button>
          <button type="button" class="resource-btn" onclick="downloadTeacherResourceFile('${item.name}')">Download</button>
          <button type="button" class="resource-btn" onclick="deleteTeacherResource(${item.id})">Delete</button>
        </div>
      `;
    }

    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

function handleTeacherResourceFileSelect(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const maxBytes = 100 * 1024 * 1024; // 100 MB
  if (file.size > maxBytes) {
    showToast('Error: File size exceeds maximum limit of 100 MB');
    return;
  }

  const sizeFormatted = file.size > 1024 * 1024 
    ? (file.size / (1024 * 1024)).toFixed(1) + ' MB' 
    : Math.round(file.size / 1024) + ' KB';

  const ext = file.name.split('.').pop().toUpperCase();

  const newResource = {
    id: Date.now(),
    type: "file",
    name: file.name,
    fileType: `${ext} File`,
    size: sizeFormatted,
    uploadDate: "01 Aug 2026",
    uploadedBy: "Engr. Tariq Mehmood"
  };

  teacherResourcesData.unshift(newResource);
  renderTeacherResources();
  
  showToast(`✓ ${file.name} (${sizeFormatted}) Upload Successful`);
  e.target.value = '';
}

function openAddGithubLinkModal() {
  const modal = document.getElementById('addGithubLinkModal');
  if (modal) {
    modal.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
  }
}

function closeAddGithubLinkModal() {
  const modal = document.getElementById('addGithubLinkModal');
  if (modal) modal.style.display = 'none';
}

function handleAddGithubLinkSubmit(e) {
  e.preventDefault();
  const repoName = document.getElementById('githubRepoNameInput').value.trim();
  const repoUrl = document.getElementById('githubRepoUrlInput').value.trim();

  if (!repoName || !repoUrl) return;

  const newResource = {
    id: Date.now(),
    type: "github",
    name: repoName,
    url: repoUrl,
    uploadDate: "01 Aug 2026",
    uploadedBy: "Engr. Tariq Mehmood"
  };

  teacherResourcesData.unshift(newResource);
  renderTeacherResources();
  closeAddGithubLinkModal();
  showToast(`✓ GitHub repository "${repoName}" added successfully`);

  document.getElementById('githubRepoNameInput').value = '';
  document.getElementById('githubRepoUrlInput').value = '';
}

function copyGithubLink(url) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url);
  }
  showToast('✓ GitHub repository URL copied to clipboard');
}

function viewTeacherResourceFile(fileName) {
  showToast(`Opening preview for ${fileName}...`);
  const win = window.open('', '_blank');
  if (win) {
    win.document.write(`
      <html>
        <head><title>TITAN LMS File Preview - ${fileName}</title></head>
        <body style="font-family: Arial, sans-serif; padding: 40px; text-align: center; background: #F8F9FC; color: #0F2D69;">
          <h2>📄 ${fileName}</h2>
          <p style="color: #64748B;">Taj Institute of Information Technology • Resource Preview</p>
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 20px 0;">
          <div style="background: white; padding: 40px; border-radius: 12px; border: 1px solid #E5E7EB; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <p style="font-size: 16px; color: #1E293B;">Sample Document Content for <strong>${fileName}</strong></p>
            <p style="font-size: 13px; color: #64748B; line-height: 1.6;">This course resource is published for Web & App Development • Batch 08 students by Engr. Tariq Mehmood.</p>
          </div>
        </body>
      </html>
    `);
  }
}

function downloadTeacherResourceFile(fileName) {
  showToast(`Downloading ${fileName}...`);
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`TITAN LMS Course Resource: ${fileName}`));
  element.setAttribute('download', fileName);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function deleteTeacherResource(id) {
  teacherResourcesData = teacherResourcesData.filter(r => r.id !== id);
  renderTeacherResources();
  showToast('Resource item removed');
}

/* ==========================================================================
   TOP NAVBAR MODULE CONTROLLER (GLOBAL SEARCH, NOTIFICATIONS & MESSAGES)
   ========================================================================== */

let teacherNotificationsDataList = [
  { id: 1, title: "Muhammad Ahmed submitted Assignment 2.", time: "10 min ago", isRead: false, icon: "file-text" },
  { id: 2, title: "Ali Raza completed Quiz 3.", time: "25 min ago", isRead: false, icon: "help-circle" },
  { id: 3, title: "Fatima Noor sent you a message.", time: "1 hour ago", isRead: false, icon: "message-square" },
  { id: 4, title: "React 19 Live Class starts in 30 minutes.", time: "2 hours ago", isRead: false, icon: "video" },
  { id: 5, title: "Assignment deadline is tomorrow.", time: "5 hours ago", isRead: true, icon: "clock" },
  { id: 6, title: "Administrator posted a new announcement.", time: "Yesterday", isRead: true, icon: "bell" }
];

const teacherGlobalSearchIndex = [
  // Students
  { type: "Student", title: "Muhammad Ahmed", desc: "TITAN-2026-1024 • Batch 08 • Web & App Development", icon: "user", action: () => openStudentProfileModal('TITAN-2026-1024') },
  { type: "Student", title: "Ali Raza", desc: "TITAN-2026-1025 • Batch 08 • Web & App Development", icon: "user", action: () => openStudentProfileModal('TITAN-2026-1025') },
  { type: "Student", title: "Abdul Rehman", desc: "TITAN-2026-1026 • Batch 08 • Web & App Development", icon: "user", action: () => openStudentProfileModal('TITAN-2026-1026') },
  { type: "Student", title: "Ayesha Khan", desc: "TITAN-2026-1027 • Batch 08 • Web & App Development", icon: "user", action: () => openStudentProfileModal('TITAN-2026-1027') },
  { type: "Student", title: "Fatima Noor", desc: "TITAN-2026-1028 • Batch 08 • Web & App Development", icon: "user", action: () => openStudentProfileModal('TITAN-2026-1028') },

  // Courses & Modules
  { type: "Course", title: "Web & App Development • Batch 08", desc: "Track: Full-Stack Web Development & Mobile Apps", icon: "book-open", action: () => switchView('teacher-my-courses') },
  { type: "Module", title: "Module 1 - HTML5 & CSS3 Layouts", desc: "Course Content • 12 Video Lectures", icon: "folder", action: () => switchView('teacher-course-content') },
  { type: "Module", title: "Module 2 - JavaScript ES6 Basics", desc: "Course Content • ES6 Functions & Async JS", icon: "folder", action: () => switchView('teacher-course-content') },
  { type: "Module", title: "Module 3 - React 19 Fundamentals & State Management", desc: "Course Content • Active Module", icon: "folder", action: () => switchView('teacher-course-content') },
  { type: "Module", title: "Module 4 - Node.js REST APIs & Express", desc: "Course Content • Upcoming Module", icon: "folder", action: () => switchView('teacher-course-content') },

  // Assignments
  { type: "Assignment", title: "Assignment 1 - Responsive Layout", desc: "Assignments • 44 / 45 Submissions", icon: "file-text", action: () => switchView('teacher-assignments') },
  { type: "Assignment", title: "Assignment 2 - Full-Stack E-Commerce API Integration", desc: "Assignments • Active Submission Slot", icon: "file-text", action: () => switchView('teacher-assignments') },

  // Quizzes
  { type: "Quiz", title: "Quiz 1 - HTML & CSS Basics", desc: "Quizzes • 45 Completed", icon: "help-circle", action: () => switchView('teacher-quizzes') },
  { type: "Quiz", title: "Quiz 2 - JavaScript ES6", desc: "Quizzes • 44 Completed", icon: "help-circle", action: () => switchView('teacher-quizzes') },
  { type: "Quiz", title: "Quiz 3 - React Fundamentals", desc: "Quizzes • Active Online Test", icon: "help-circle", action: () => switchView('teacher-quizzes') },

  // Live Classes
  { type: "Live Class", title: "React 19 Live Workshop", desc: "Live Session Today at 7:00 PM", icon: "video", action: () => switchView('teacher-live-classes') },

  // Attendance
  { type: "Attendance", title: "Attendance Register (45 Students)", desc: "Daily Faculty Attendance Management", icon: "calendar-check", action: () => switchView('teacher-attendance') },

  // Announcements
  { type: "Announcement", title: "Assignment 2 Submission Deadline Extended", desc: "Faculty Notice • Published 01 Aug", icon: "bell", action: () => switchView('teacher-announcements') },
  { type: "Announcement", title: "React 19 Live Workshop Today", desc: "Faculty Notice • Published 01 Aug", icon: "bell", action: () => switchView('teacher-announcements') },

  // Messages
  { type: "Message", title: "Chat with Administrator", desc: "Direct Message Portal", icon: "message-square", action: () => { switchView('teacher-messages'); selectTeacherConversation('ADMIN-001'); } },
  { type: "Message", title: "Chat with Muhammad Ahmed", desc: "Direct Message Portal", icon: "message-square", action: () => { switchView('teacher-messages'); selectTeacherConversation('TITAN-2026-1024'); } },

  // Resources
  { type: "Resource", title: "React19_Notes.pdf", desc: "Course Resource • PDF Document", icon: "hard-drive", action: () => switchView('teacher-resources') },
  { type: "Resource", title: "react-19-server-components-demo", desc: "Course Resource • GitHub Repository", icon: "github", action: () => switchView('teacher-resources') }
];

function initTeacherNavbarHeader() {
  renderTeacherNotifications();
  renderTeacherHeaderMessages();

  // Dismiss floating panels when clicking outside
  document.addEventListener('click', (e) => {
    const searchTrigger = document.querySelector('.search-trigger-box');
    const notifBtn = document.getElementById('teacherNotificationBtn');
    const msgBtn = document.getElementById('teacherHeaderMessagesBtn');
    const profileBtn = document.getElementById('teacherHeaderUserProfile');

    if (searchTrigger && !searchTrigger.contains(e.target)) {
      const panel = document.getElementById('teacherSearchDropdownPanel');
      if (panel) panel.style.display = 'none';
    }

    if (notifBtn && !notifBtn.contains(e.target)) {
      const panel = document.getElementById('teacherNotificationDropdownPanel');
      if (panel) panel.style.display = 'none';
    }

    if (msgBtn && !msgBtn.contains(e.target)) {
      const panel = document.getElementById('teacherMessagesDropdownPanel');
      if (panel) panel.style.display = 'none';
    }

    if (profileBtn && !profileBtn.contains(e.target)) {
      const dropdown = document.getElementById('teacherProfileMenuDropdown');
      if (dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        setTimeout(() => { dropdown.style.display = 'none'; }, 200);
      }
    }
  });
}

/* 4. TEACHER PROFILE DROPDOWN CONTROLLER */
function toggleTeacherProfileDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('teacherProfileMenuDropdown');
  const notifDropdown = document.getElementById('teacherNotificationDropdownPanel');
  const msgDropdown = document.getElementById('teacherMessagesDropdownPanel');
  const searchDropdown = document.getElementById('teacherSearchDropdownPanel');

  if (notifDropdown) notifDropdown.style.display = 'none';
  if (msgDropdown) msgDropdown.style.display = 'none';
  if (searchDropdown) searchDropdown.style.display = 'none';

  if (dropdown) {
    const isShowing = dropdown.classList.contains('show');
    if (isShowing) {
      dropdown.classList.remove('show');
      setTimeout(() => { dropdown.style.display = 'none'; }, 200);
    } else {
      dropdown.style.display = 'block';
      setTimeout(() => { dropdown.classList.add('show'); }, 10);
    }
  }
}

function selectTeacherProfileDropdownOption(option) {
  const dropdown = document.getElementById('teacherProfileMenuDropdown');
  if (dropdown) {
    dropdown.classList.remove('show');
    setTimeout(() => { dropdown.style.display = 'none'; }, 200);
  }

  if (option === 'profile') {
    switchView('teacher-profile');
  } else if (option === 'settings') {
    switchView('teacher-settings');
  } else if (option === 'password') {
    window.location.hash = '#/reset-password';
  } else if (option === 'logout') {
    confirmLogout();
  }
}

/* 1. GLOBAL SEARCH HANDLER */
function handleTeacherGlobalSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const dropdown = document.getElementById('teacherSearchDropdownPanel');
  const container = document.getElementById('teacherSearchResultsContainer');

  if (!dropdown || !container) return;

  if (!query) {
    dropdown.style.display = 'none';
    return;
  }

  const results = teacherGlobalSearchIndex.filter(item => {
    return item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query) || item.type.toLowerCase().includes(query);
  });

  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = `<div style="padding: 16px; text-align: center; font-size: 12px; color: var(--text-muted);">No matching results found for "${query}".</div>`;
  } else {
    results.slice(0, 8).forEach(res => {
      const div = document.createElement('div');
      div.className = 'search-result-item';
      div.onclick = () => {
        dropdown.style.display = 'none';
        res.action();
      };

      div.innerHTML = `
        <div class="circle-icon-box sm"><i data-lucide="${res.icon}"></i></div>
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 13px; font-weight: 800; color: var(--navy-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${res.title}</span>
            <span class="status-badge" style="background: var(--navy-light); color: var(--navy-primary); border: 1px solid var(--navy-primary); font-size: 9px; padding: 2px 6px;">${res.type}</span>
          </div>
          <div style="font-size: 11px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 1px;">${res.desc}</div>
        </div>
      `;

      container.appendChild(div);
    });
  }

  dropdown.style.display = 'block';
  if (window.lucide) window.lucide.createIcons();
}

/* 2. NOTIFICATIONS HANDLER */
function toggleTeacherNotificationDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('teacherNotificationDropdownPanel');
  const msgDropdown = document.getElementById('teacherMessagesDropdownPanel');
  const searchDropdown = document.getElementById('teacherSearchDropdownPanel');

  if (msgDropdown) msgDropdown.style.display = 'none';
  if (searchDropdown) searchDropdown.style.display = 'none';

  if (dropdown) {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  }
}

function renderTeacherNotifications() {
  const container = document.getElementById('teacherNotificationsContainer');
  const badge = document.getElementById('teacherNotificationBadge');
  if (!container) return;

  container.innerHTML = '';

  const unreadCount = teacherNotificationsDataList.filter(n => !n.isRead).length;
  if (badge) {
    badge.innerText = unreadCount;
    badge.style.display = unreadCount > 0 ? 'inline-block' : 'none';
  }

  teacherNotificationsDataList.forEach(n => {
    const div = document.createElement('div');
    div.className = `notification-dropdown-item ${!n.isRead ? 'unread' : ''}`;
    div.onclick = () => {
      n.isRead = true;
      renderTeacherNotifications();
      showToast(n.title);
    };

    div.innerHTML = `
      <div class="circle-icon-box sm"><i data-lucide="${n.icon}"></i></div>
      <div style="flex: 1; min-width: 0;">
        <div style="font-size: 12px; font-weight: ${!n.isRead ? '800' : '600'}; color: var(--navy-primary); line-height: 1.3;">${n.title}</div>
        <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">${n.time}</div>
      </div>
      ${!n.isRead ? `<span style="width: 7px; height: 7px; border-radius: 50%; background: var(--navy-primary); display: inline-block;"></span>` : ''}
    `;

    container.appendChild(div);
  });

  if (window.lucide) window.lucide.createIcons();
}

function markAllNotificationsAsRead() {
  teacherNotificationsDataList.forEach(n => n.isRead = true);
  renderTeacherNotifications();
  showToast('All notifications marked as read');
}

/* 3. MESSAGES DROPDOWN HANDLER */
function toggleTeacherMessagesDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('teacherMessagesDropdownPanel');
  const notifDropdown = document.getElementById('teacherNotificationDropdownPanel');
  const searchDropdown = document.getElementById('teacherSearchDropdownPanel');

  if (notifDropdown) notifDropdown.style.display = 'none';
  if (searchDropdown) searchDropdown.style.display = 'none';

  if (dropdown) {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  }
}

function renderTeacherHeaderMessages() {
  const container = document.getElementById('teacherHeaderMessagesContainer');
  const badge = document.getElementById('teacherHeaderMessagesBadge');
  if (!container) return;

  container.innerHTML = '';

  const recentList = teacherConversationsList.slice(0, 6);
  const totalUnread = recentList.reduce((acc, curr) => acc + curr.unread, 0);

  if (badge) {
    badge.innerText = totalUnread > 0 ? totalUnread : '5';
  }

  recentList.forEach(c => {
    const div = document.createElement('div');
    div.className = 'notification-dropdown-item';
    div.onclick = () => selectTeacherHeaderConversation(c.id);

    div.innerHTML = `
      <div style="position: relative;">
        <div class="circle-icon-box sm"><i data-lucide="${c.isAdmin ? 'shield' : 'user'}"></i></div>
        <div class="online-dot-badge ${c.isOnline ? 'online' : 'offline'}"></div>
      </div>
      <div style="flex: 1; min-width: 0;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12px; font-weight: 800; color: var(--navy-primary);">${c.name}</span>
          <span style="font-size: 10px; color: var(--text-muted);">${c.lastTime}</span>
        </div>
        <div style="font-size: 11px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${c.lastMsg}</div>
      </div>
      ${c.unread > 0 ? `<span class="unread-count-badge" style="font-size: 9px; padding: 1px 5px;">${c.unread}</span>` : ''}
    `;

    container.appendChild(div);
  });

  if (window.lucide) window.lucide.createIcons();
}

function selectTeacherHeaderConversation(id) {
  const dropdown = document.getElementById('teacherMessagesDropdownPanel');
  if (dropdown) dropdown.style.display = 'none';

  switchView('teacher-messages');
  selectTeacherConversation(id);
}

function openAllTeacherMessages() {
  const dropdown = document.getElementById('teacherMessagesDropdownPanel');
  if (dropdown) dropdown.style.display = 'none';

  switchView('teacher-messages');
}

/* ==========================================================================
   TEACHER SETTINGS CONTROLLER
   ========================================================================== */

function saveTeacherSettings() {
  const emailNotif = document.getElementById('toggleEmailNotif')?.checked ?? true;
  const lmsNotif = document.getElementById('toggleLmsNotif')?.checked ?? true;
  const assignNotif = document.getElementById('toggleAssignNotif')?.checked ?? true;
  const quizNotif = document.getElementById('toggleQuizNotif')?.checked ?? true;
  const liveNotif = document.getElementById('toggleLiveNotif')?.checked ?? true;
  const announceNotif = document.getElementById('toggleAnnounceNotif')?.checked ?? true;

  const settingsState = { emailNotif, lmsNotif, assignNotif, quizNotif, liveNotif, announceNotif };
  localStorage.setItem('titan_teacher_settings', JSON.stringify(settingsState));
  showToast('✓ Instructor portal preferences & settings saved successfully!');
}

function resetTeacherSettings() {
  const ids = ['toggleEmailNotif', 'toggleLmsNotif', 'toggleAssignNotif', 'toggleQuizNotif', 'toggleLiveNotif', 'toggleAnnounceNotif'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = true;
  });
  localStorage.removeItem('titan_teacher_settings');
  showToast('✓ Preferences reset to default settings');
}

/* ==========================================================================
   COURSE CONTENT BUILDER MODULE CONTROLLER (PUBLISH CONTENT & PERSISTENCE)
   ========================================================================== */

const defaultCourseContentData = [
  {
    id: "LES-2026-1001",
    course: "Web & App Development • Batch 08",
    moduleTitle: "Module 1 - HTML5 & CSS3 Responsive Layout Architecture",
    lessonTitle: "Flexbox & CSS Grid Masterclass with Modern UI Systems",
    fileName: "HTML5_CSS3_Masterclass.pdf",
    fileType: "PDF Document",
    size: "4.2 MB",
    uploadDate: "15 Jul 2026",
    status: "Published",
    instructor: "Engr. Tariq Mehmood"
  },
  {
    id: "LES-2026-1002",
    course: "Web & App Development • Batch 08",
    moduleTitle: "Module 2 - JavaScript ES6+ & Asynchronous Programming",
    lessonTitle: "ES6 Functions, Promises, Async/Await & Fetch API",
    fileName: "JS_Async_Programming_Guide.zip",
    fileType: "ZIP Archive",
    size: "12.8 MB",
    uploadDate: "22 Jul 2026",
    status: "Published",
    instructor: "Engr. Tariq Mehmood"
  },
  {
    id: "LES-2026-1003",
    course: "Web & App Development • Batch 08",
    moduleTitle: "Module 3 - React 19 Fundamentals & State Management",
    lessonTitle: "React 19 Server Components, Custom Hooks & Actions",
    fileName: "React19_Architecture_Slides.pptx",
    fileType: "PowerPoint Presentation",
    size: "8.5 MB",
    uploadDate: "28 Jul 2026",
    status: "Published",
    instructor: "Engr. Tariq Mehmood"
  },
  {
    id: "LES-2026-1004",
    course: "Web & App Development • Batch 08",
    moduleTitle: "Module 3 - React 19 Fundamentals & State Management",
    lessonTitle: "Building Reusable Component Libraries & Context API",
    fileName: "React_Component_Design_Patterns.mp4",
    fileType: "MP4 Video Lecture",
    size: "85.0 MB",
    uploadDate: "01 Aug 2026",
    status: "Published",
    instructor: "Engr. Tariq Mehmood"
  }
];

let activeViewLessonItem = null;
let replacingLessonId = null;
let deletingLessonId = null;

function renderTeacherCourseContentList() {
  const container = document.getElementById('teacherCourseContentListContainer');
  if (!container) return;

  container.innerHTML = '';

  if (teacherCourseContentData.length === 0) {
    container.innerHTML = `
      <div class="card-box" style="text-align: center; padding: 40px; color: var(--text-muted);">
        <i data-lucide="folder" style="width: 32px; height: 32px; color: var(--text-muted); margin-bottom: 8px;"></i>
        <div style="font-size: 14px; font-weight: 700; color: var(--navy-primary);">No published lessons found.</div>
        <div style="font-size: 12px; margin-top: 4px;">Use the form above to publish your first module and lesson.</div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  teacherCourseContentData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'resource-card';

    let iconName = "file-text";
    const fileExt = (item.fileName || '').split('.').pop().toLowerCase();
    if (['zip', 'rar', '7z'].includes(fileExt)) iconName = "archive";
    else if (['ppt', 'pptx'].includes(fileExt)) iconName = "presentation";
    else if (['xls', 'xlsx'].includes(fileExt)) iconName = "file-spreadsheet";
    else if (['mp4', 'mkv', 'avi'].includes(fileExt)) iconName = "video";
    else if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(fileExt)) iconName = "image";

    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 16px; flex: 1; min-width: 0;">
        <div class="resource-icon-box">
          <i data-lucide="${iconName}" style="width: 20px; height: 20px;"></i>
        </div>
        <div style="min-width: 0; flex: 1;">
          <div style="font-size: 12px; font-weight: 700; color: var(--gold-accent); text-transform: uppercase; margin-bottom: 2px;">${item.moduleTitle}</div>
          <div class="resource-name-text" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.lessonTitle}</div>
          <div class="resource-metadata-text" style="display: flex; align-items: center; gap: 8px; flex-wrap: nowrap; overflow: hidden; white-space: nowrap; margin-top: 4px;">
            <span style="flex-shrink: 0;">${item.instructor}</span>
            <span style="color: var(--text-muted); flex-shrink: 0;">•</span>
            <span style="flex-shrink: 0;">${item.uploadDate}</span>
            <span style="color: var(--text-muted); flex-shrink: 0;">•</span>
            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 220px;" title="${item.fileName}">${item.fileName} (${item.size || '38 KB'})</span>
            <span style="color: var(--text-muted); flex-shrink: 0;">•</span>
            <span style="color: var(--navy-primary); font-weight: 600; flex-shrink: 0;">Status: Published</span>
          </div>
        </div>
      </div>

      <div class="resource-btn-group" style="flex-wrap: nowrap;">
        <button type="button" class="resource-btn" onclick="viewCourseContentLesson('${item.id}')">View</button>
        <button type="button" class="resource-btn" onclick="editCourseContentLesson('${item.id}')">Edit</button>
        <button type="button" class="resource-btn" onclick="replaceCourseContentFile('${item.id}')">Replace</button>
        <button type="button" class="resource-btn" onclick="downloadTeacherResourceFile('${item.fileName}')">Download</button>
        <button type="button" class="resource-btn" onclick="deleteCourseContentLesson('${item.id}')">Delete</button>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

function handlePublishFileSelect(e) {
  const file = e.target.files && e.target.files[0];
  const previewBar = document.getElementById('publishFilePreviewBar');
  const nameText = document.getElementById('publishFileNameText');
  const sizeText = document.getElementById('publishFileSizeText');

  if (!file) {
    publishAttachedFile = null;
    if (previewBar) previewBar.style.display = 'none';
    return;
  }

  const sizeFormatted = file.size > 1024 * 1024 
    ? (file.size / (1024 * 1024)).toFixed(1) + ' MB' 
    : Math.round(file.size / 1024) + ' KB';

  publishAttachedFile = {
    name: file.name,
    size: sizeFormatted,
    type: file.type || 'Content File'
  };

  if (nameText) nameText.innerText = file.name;
  if (sizeText) sizeText.innerText = sizeFormatted;
  if (previewBar) previewBar.style.display = 'flex';
}

function removePublishAttachedFile() {
  publishAttachedFile = null;
  const input = document.getElementById('publishFileInput');
  const previewBar = document.getElementById('publishFilePreviewBar');
  if (input) input.value = '';
  if (previewBar) previewBar.style.display = 'none';
}

function handlePublishCourseContentSubmit(e) {
  e.preventDefault();

  const courseSelect = document.getElementById('publishCourseSelect');
  const moduleInput = document.getElementById('publishModuleTitleInput');
  const lessonInput = document.getElementById('publishLessonTitleInput');
  const submitBtn = document.getElementById('publishContentSubmitBtn');
  const btnText = document.getElementById('publishBtnText');

  const course = courseSelect ? courseSelect.value : '';
  const moduleTitle = moduleInput ? moduleInput.value.trim() : '';
  const lessonTitle = lessonInput ? lessonInput.value.trim() : '';

  if (!course || !moduleTitle || !lessonTitle || !publishAttachedFile) {
    showToast('Validation Error: Please fill out all required fields and select a content file.');
    return;
  }

  // Button Loading State
  if (submitBtn) submitBtn.disabled = true;
  if (btnText) btnText.innerHTML = '<span class="loading-spinner-sm"></span> Publishing...';

  setTimeout(() => {
    const ext = publishAttachedFile.name.split('.').pop().toUpperCase();
    const newLesson = {
      id: `LES-${Date.now()}`,
      course: course,
      moduleTitle: moduleTitle,
      lessonTitle: lessonTitle,
      fileName: publishAttachedFile.name,
      fileType: `${ext} File`,
      size: publishAttachedFile.size,
      uploadDate: "01 Aug 2026",
      status: "Published",
      instructor: "Engr. Tariq Mehmood"
    };

    teacherCourseContentData.unshift(newLesson);
    localStorage.setItem('titan_teacher_course_content', JSON.stringify(teacherCourseContentData));

    // Reset Form
    document.getElementById('publishCourseContentForm').reset();
    removePublishAttachedFile();

    // Restore Button
    if (submitBtn) submitBtn.disabled = false;
    if (btnText) btnText.innerText = 'Publish Content →';

    // Refresh UI & Show Toast
    renderTeacherCourseContentList();
    showToast('✓ Content Published Successfully');
  }, 1000);
}

/* 1. VIEW BUTTON CONTROLLER */
function viewCourseContentLesson(id) {
  const item = teacherCourseContentData.find(l => l.id === id);
  if (!item) return;

  activeViewLessonItem = item;
  const modal = document.getElementById('courseLessonViewModal');
  const modalTitle = document.getElementById('viewLessonModalTitle');
  const container = document.getElementById('viewLessonModalContentContainer');

  if (modalTitle) modalTitle.innerText = `Preview: ${item.lessonTitle}`;

  const fileExt = (item.fileName || '').split('.').pop().toLowerCase();

  let previewHtml = '';
  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(fileExt)) {
    previewHtml = `
      <div style="text-align: center; width: 100%;">
        <div style="font-size: 13px; font-weight: 700; color: var(--navy-primary); margin-bottom: 12px;">📷 Image Content Preview (${item.fileName})</div>
        <div style="background: white; border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; max-width: 400px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <i data-lucide="image" style="width: 48px; height: 48px; color: var(--navy-primary); margin-bottom: 8px;"></i>
          <div style="font-size: 14px; font-weight: 700; color: var(--navy-primary);">${item.fileName}</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">Size: ${item.size || '38 KB'} • Uploaded ${item.uploadDate}</div>
        </div>
      </div>
    `;
  } else if (['mp4', 'mkv', 'avi', 'mov'].includes(fileExt)) {
    previewHtml = `
      <div style="text-align: center; width: 100%;">
        <div style="font-size: 13px; font-weight: 700; color: var(--navy-primary); margin-bottom: 12px;">🎬 Video Player Lecture (${item.fileName})</div>
        <div style="background: #000; border-radius: 8px; padding: 40px 20px; color: #FFF; max-width: 500px; margin: 0 auto;">
          <i data-lucide="video" style="width: 48px; height: 48px; color: var(--gold-accent); margin-bottom: 8px;"></i>
          <div style="font-size: 14px; font-weight: 700;">[ TITAN Video Stream Player Placeholder ]</div>
          <div style="font-size: 12px; color: rgba(255,255,255,0.7); margin-top: 4px;">Playing ${item.lessonTitle}</div>
        </div>
      </div>
    `;
  } else if (['pdf'].includes(fileExt)) {
    previewHtml = `
      <div style="text-align: center; width: 100%;">
        <div style="font-size: 13px; font-weight: 700; color: var(--navy-primary); margin-bottom: 12px;">📄 PDF Document Viewer (${item.fileName})</div>
        <div style="background: white; border: 1px solid var(--border-color); border-radius: 8px; padding: 30px 20px; max-width: 480px; margin: 0 auto;">
          <i data-lucide="file-text" style="width: 44px; height: 44px; color: var(--navy-primary); margin-bottom: 8px;"></i>
          <div style="font-size: 15px; font-weight: 800; color: var(--navy-primary);">${item.fileName}</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">Published by ${item.instructor} • ${item.uploadDate}</div>
          <div style="margin-top: 14px; padding: 12px; background: var(--bg-main); border-radius: 6px; font-size: 12px; color: var(--text-muted);">
            Sample PDF slides and lecture material content for ${item.moduleTitle}.
          </div>
        </div>
      </div>
    `;
  } else if (['ppt', 'pptx'].includes(fileExt)) {
    previewHtml = `
      <div style="text-align: center; width: 100%;">
        <div style="font-size: 13px; font-weight: 700; color: var(--navy-primary); margin-bottom: 12px;">📊 Presentation Slide Deck Preview (${item.fileName})</div>
        <div style="background: white; border: 1px solid var(--border-color); border-radius: 8px; padding: 30px 20px; max-width: 480px; margin: 0 auto;">
          <i data-lucide="presentation" style="width: 44px; height: 44px; color: var(--gold-accent); margin-bottom: 8px;"></i>
          <div style="font-size: 15px; font-weight: 800; color: var(--navy-primary);">${item.fileName}</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">Microsoft PowerPoint Deck • ${item.size}</div>
        </div>
      </div>
    `;
  } else if (['doc', 'docx'].includes(fileExt)) {
    previewHtml = `
      <div style="text-align: center; width: 100%;">
        <div style="font-size: 13px; font-weight: 700; color: var(--navy-primary); margin-bottom: 12px;">📝 Word Document Preview (${item.fileName})</div>
        <div style="background: white; border: 1px solid var(--border-color); border-radius: 8px; padding: 30px 20px; max-width: 480px; margin: 0 auto;">
          <i data-lucide="file-text" style="width: 44px; height: 44px; color: var(--navy-primary); margin-bottom: 8px;"></i>
          <div style="font-size: 15px; font-weight: 800; color: var(--navy-primary);">${item.fileName}</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">Microsoft Word Document • ${item.size}</div>
        </div>
      </div>
    `;
  } else {
    previewHtml = `
      <div style="text-align: center; width: 100%;">
        <div style="font-size: 13px; font-weight: 700; color: var(--navy-primary); margin-bottom: 12px;">📦 Archive Material Details (${item.fileName})</div>
        <div style="background: white; border: 1px solid var(--border-color); border-radius: 8px; padding: 30px 20px; max-width: 480px; margin: 0 auto;">
          <i data-lucide="archive" style="width: 44px; height: 44px; color: var(--navy-primary); margin-bottom: 8px;"></i>
          <div style="font-size: 15px; font-weight: 800; color: var(--navy-primary);">${item.fileName}</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">ZIP Archive • File Size: ${item.size || '12.8 MB'} • Uploaded: ${item.uploadDate}</div>
        </div>
      </div>
    `;
  }

  if (container) container.innerHTML = previewHtml;
  if (window.lucide) window.lucide.createIcons();

  if (modal) modal.style.display = 'flex';
}

function closeCourseLessonViewModal() {
  const modal = document.getElementById('courseLessonViewModal');
  if (modal) modal.style.display = 'none';
  activeViewLessonItem = null;
}

function downloadActiveViewLessonFile() {
  if (activeViewLessonItem) {
    downloadTeacherResourceFile(activeViewLessonItem.fileName);
    closeCourseLessonViewModal();
  }
}

/* 2. EDIT BUTTON CONTROLLER */
function editCourseContentLesson(id) {
  const item = teacherCourseContentData.find(l => l.id === id);
  if (!item) return;

  document.getElementById('editLessonIdInput').value = item.id;
  document.getElementById('editLessonModuleInput').value = item.moduleTitle;
  document.getElementById('editLessonTitleInput').value = item.lessonTitle;
  document.getElementById('editLessonDescInput').value = item.description || `Lecture notes and learning material for ${item.lessonTitle}`;
  document.getElementById('editLessonFileNameInput').value = item.fileName;

  const modal = document.getElementById('courseLessonEditModal');
  if (modal) modal.style.display = 'flex';
}

function closeCourseLessonEditModal() {
  const modal = document.getElementById('courseLessonEditModal');
  if (modal) modal.style.display = 'none';
}

function handleSaveCourseLessonEdit(e) {
  e.preventDefault();
  const id = document.getElementById('editLessonIdInput').value;
  const moduleTitle = document.getElementById('editLessonModuleInput').value.trim();
  const lessonTitle = document.getElementById('editLessonTitleInput').value.trim();
  const description = document.getElementById('editLessonDescInput').value.trim();
  const fileName = document.getElementById('editLessonFileNameInput').value.trim();

  const itemIndex = teacherCourseContentData.findIndex(l => l.id === id);
  if (itemIndex !== -1) {
    teacherCourseContentData[itemIndex].moduleTitle = moduleTitle;
    teacherCourseContentData[itemIndex].lessonTitle = lessonTitle;
    teacherCourseContentData[itemIndex].description = description;
    teacherCourseContentData[itemIndex].fileName = fileName;

    localStorage.setItem('titan_teacher_course_content', JSON.stringify(teacherCourseContentData));
    renderTeacherCourseContentList();
    closeCourseLessonEditModal();
    showToast('Lesson updated successfully.');
  }
}

/* 3. REPLACE BUTTON CONTROLLER */
function replaceCourseContentFile(id) {
  replacingLessonId = id;
  const fileInput = document.getElementById('replaceLessonFileInput');
  if (fileInput) fileInput.click();
}

function handleReplaceLessonFileSelected(e) {
  const file = e.target.files && e.target.files[0];
  if (!file || !replacingLessonId) return;

  const sizeFormatted = file.size > 1024 * 1024 
    ? (file.size / (1024 * 1024)).toFixed(1) + ' MB' 
    : Math.round(file.size / 1024) + ' KB';

  const ext = file.name.split('.').pop().toUpperCase();

  const itemIndex = teacherCourseContentData.findIndex(l => l.id === replacingLessonId);
  if (itemIndex !== -1) {
    teacherCourseContentData[itemIndex].fileName = file.name;
    teacherCourseContentData[itemIndex].fileType = `${ext} File`;
    teacherCourseContentData[itemIndex].size = sizeFormatted;
    teacherCourseContentData[itemIndex].uploadDate = "01 Aug 2026";

    localStorage.setItem('titan_teacher_course_content', JSON.stringify(teacherCourseContentData));
    renderTeacherCourseContentList();
    showToast('File replaced successfully.');
  }

  e.target.value = '';
  replacingLessonId = null;
}

/* 4. DOWNLOAD BUTTON CONTROLLER */
function downloadTeacherResourceFile(fileName) {
  showToast('Download started.');
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`TITAN LMS Published Lesson File: ${fileName}`));
  element.setAttribute('download', fileName);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

/* 5. DELETE BUTTON CONTROLLER */
function deleteCourseContentLesson(id) {
  deletingLessonId = id;
  const modal = document.getElementById('courseLessonDeleteModal');
  if (modal) modal.style.display = 'flex';
}

function closeCourseLessonDeleteModal() {
  const modal = document.getElementById('courseLessonDeleteModal');
  if (modal) modal.style.display = 'none';
  deletingLessonId = null;
}

function confirmDeleteCourseLesson() {
  if (!deletingLessonId) return;

  teacherCourseContentData = teacherCourseContentData.filter(l => l.id !== deletingLessonId);
  localStorage.setItem('titan_teacher_course_content', JSON.stringify(teacherCourseContentData));
  renderTeacherCourseContentList();
  closeCourseLessonDeleteModal();
  showToast('Lesson deleted successfully.');
}

/* ==========================================================================
   TEACHER EDIT PROFILE CONTROLLER & LOCALSTORAGE PERSISTENCE
   ========================================================================== */

const defaultTeacherProfileState = {
  fullName: "Engr. Tariq Mehmood",
  empId: "TITAN-FAC-2024-008",
  designation: "Senior Faculty Instructor / Lecturer",
  department: "Computer Science & Web Engineering",
  assignedCourses: "Web & App Development • Batch 08",
  email: "tariq.mehmood@titan.edu.pk",
  phone: "+92 300 9876543",
  qualification: "M.S. Software Engineering (FAST-NUCES)",
  experience: "8+ Years Industry & Academic Experience",
  joiningDate: "15 January 2024",
  officeLocation: "Faculty Block B • Office 204",
  bio: "Senior lecturer and lead instructor specializing in modern Web Development, React, and REST APIs.",
  photoUrl: null
};

let teacherProfileData = JSON.parse(localStorage.getItem('titan_teacher_profile')) || defaultTeacherProfileState;

function updateTeacherProfileUI() {
  const p = teacherProfileData;

  // Profile Page Elements
  const nameHeading = document.getElementById('teacherProfileNameHeading');
  const subHeading = document.getElementById('teacherProfileSubHeading');
  const valFullName = document.getElementById('profileValFullName');
  const valEmpId = document.getElementById('profileValEmpId');
  const valDesignation = document.getElementById('profileValDesignation');
  const valDepartment = document.getElementById('profileValDepartment');
  const valEmail = document.getElementById('profileValEmail');
  const valPhone = document.getElementById('profileValPhone');
  const valQualification = document.getElementById('profileValQualification');
  const valExperience = document.getElementById('profileValExperience');
  const valJoiningDate = document.getElementById('profileValJoiningDate');
  const valOfficeLocation = document.getElementById('profileValOfficeLocation');
  const valBio = document.getElementById('profileValBio');

  if (nameHeading) nameHeading.innerText = p.fullName;
  if (subHeading) subHeading.innerText = `${p.designation} • ${p.department}`;
  if (valFullName) valFullName.innerText = p.fullName;
  if (valEmpId) valEmpId.innerText = p.empId;
  if (valDesignation) valDesignation.innerText = p.designation;
  if (valDepartment) valDepartment.innerText = p.department;
  if (valEmail) valEmail.innerText = p.email;
  if (valPhone) valPhone.innerText = p.phone;
  if (valQualification) valQualification.innerText = p.qualification;
  if (valExperience) valExperience.innerText = p.experience;
  if (valJoiningDate) valJoiningDate.innerText = p.joiningDate;
  if (valOfficeLocation) valOfficeLocation.innerText = p.officeLocation || "Faculty Block B • Office 204";
  if (valBio) valBio.innerText = p.bio || "Senior lecturer and lead instructor specializing in modern Web Development.";

  // Top Navbar Header Profile Pill Elements
  const headerName = document.querySelector('#teacherHeaderUserProfile div > div:first-child');
  const headerRole = document.querySelector('#teacherHeaderUserProfile div > div:last-child');
  const sidebarName = document.querySelector('.sidebar-user-card .user-name-sm');
  const sidebarRole = document.querySelector('.sidebar-user-card .user-role-sm');

  if (headerName) headerName.innerText = p.fullName;
  if (headerRole) headerRole.innerText = p.designation;
  if (sidebarName) sidebarName.innerText = p.fullName;
  if (sidebarRole) sidebarRole.innerText = p.designation;
}

function toggleTeacherProfileEditMode(isEditing) {
  const readView = document.getElementById('profileDetailsReadView');
  const editView = document.getElementById('profileDetailsEditView');
  const badge = document.getElementById('editModeIndicatorBadge');
  const headerBtn = document.getElementById('editProfileHeaderBtn');

  if (isEditing) {
    const p = teacherProfileData;
    document.getElementById('inlineEditFullName').value = p.fullName;
    document.getElementById('inlineEditEmpId').value = p.empId;
    document.getElementById('inlineEditDesignation').value = p.designation;
    document.getElementById('inlineEditDepartment').value = p.department;
    document.getElementById('inlineEditEmail').value = p.email;
    document.getElementById('inlineEditPhone').value = p.phone;
    document.getElementById('inlineEditQualification').value = p.qualification;
    document.getElementById('inlineEditExperience').value = p.experience;
    document.getElementById('inlineEditJoiningDate').value = p.joiningDate;
    document.getElementById('inlineEditOfficeLocation').value = p.officeLocation || '';
    document.getElementById('inlineEditBio').value = p.bio || '';

    if (readView) readView.style.display = 'none';
    if (editView) editView.style.display = 'block';
    if (badge) badge.style.display = 'inline-block';
    if (headerBtn) headerBtn.style.display = 'none';
  } else {
    if (readView) readView.style.display = 'block';
    if (editView) editView.style.display = 'none';
    if (badge) badge.style.display = 'none';
    if (headerBtn) headerBtn.style.display = 'inline-block';
  }
}

function handleTeacherPhotoSelect(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const maxBytes = 5 * 1024 * 1024; // 5 MB
  if (file.size > maxBytes) {
    showToast('Error: Image size exceeds maximum limit of 5 MB');
    return;
  }

  showToast(`✓ Photo "${file.name}" selected`);
}

function removeTeacherPhoto() {
  const input = document.getElementById('inlineTeacherPhotoInput');
  if (input) input.value = '';
  showToast('Profile photo removed');
}

function handleSaveTeacherInlineProfile(e) {
  e.preventDefault();

  const fullName = document.getElementById('inlineEditFullName').value.trim();
  const designation = document.getElementById('inlineEditDesignation').value.trim();
  const department = document.getElementById('inlineEditDepartment').value.trim();
  const email = document.getElementById('inlineEditEmail').value.trim();
  const phone = document.getElementById('inlineEditPhone').value.trim();

  if (!fullName || !designation || !department || !email || !phone) {
    showToast('Validation Error: Please fill out all required fields.');
    return;
  }

  teacherProfileData.fullName = fullName;
  teacherProfileData.designation = designation;
  teacherProfileData.department = department;
  teacherProfileData.email = email;
  teacherProfileData.phone = phone;
  teacherProfileData.qualification = document.getElementById('inlineEditQualification').value.trim();
  teacherProfileData.experience = document.getElementById('inlineEditExperience').value.trim();
  teacherProfileData.officeLocation = document.getElementById('inlineEditOfficeLocation').value.trim();
  teacherProfileData.bio = document.getElementById('inlineEditBio').value.trim();

  localStorage.setItem('titan_teacher_profile', JSON.stringify(teacherProfileData));

  updateTeacherProfileUI();
  toggleTeacherProfileEditMode(false);
  showToast('✓ Profile updated successfully.');
}

/* ==========================================================================
   STUDENT MESSAGES MODULE CONTROLLER & TWO-WAY SYNCHRONIZATION
   ========================================================================== */

const defaultStudentConversationsData = [
  {
    id: "teacher",
    name: "Engr. Tariq Mehmood",
    sub: "Faculty Instructor • Web & App Development",
    role: "Faculty Instructor",
    isOnline: true,
    unread: 0,
    messages: [
      { id: 1, sender: "received", text: "Respected Ahmed, make sure to complete the Full-Stack E-Commerce API integration before the deadline.", timestamp: "Yesterday 04:30 PM", read: true },
      { id: 2, sender: "sent", text: "Assalam-o-Alaikum Sir! I have submitted Assignment 2 on the LMS portal.", timestamp: "Today 01:15 PM", read: true },
      { id: 3, sender: "received", text: "Walaikum Assalam Ahmed! Excellent work, I will review your submission shortly.", timestamp: "Today 01:25 PM", read: true }
    ]
  },
  {
    id: "admin",
    name: "Administrator",
    sub: "System Admin • TITAN LMS",
    role: "System Administrator",
    isOnline: true,
    unread: 0,
    messages: [
      { id: 1, sender: "received", text: "Welcome to TITAN LMS Student Portal, Muhammad Ahmed. Feel free to reach out if you need assistance with LMS portal features or batch registration.", timestamp: "Yesterday 09:00 AM", read: true },
      { id: 2, sender: "sent", text: "Thank you Administrator! All my enrolled modules and live classes are displaying correctly.", timestamp: "Yesterday 09:30 AM", read: true }
    ]
  }
];

let studentConversationsData = JSON.parse(localStorage.getItem('titan_student_conversations')) || defaultStudentConversationsData;
let activeStudentChatId = "teacher";
let studentAttachedFile = null;

function initStudentMessagesModule() {
  renderStudentConversationsList();
  renderStudentChatMessages();

  // Close emoji popover when clicking outside
  document.addEventListener('click', (e) => {
    const btn = document.getElementById('studentChatEmojiBtn');
    const picker = document.getElementById('studentChatEmojiPicker');
    if (picker && btn && !btn.contains(e.target) && !picker.contains(e.target)) {
      picker.style.display = 'none';
    }
  });
}

function renderStudentConversationsList() {
  const container = document.getElementById('studentChatConversationList');
  if (!container) return;

  container.innerHTML = '';

  const search = document.getElementById('studentChatSearchInput')?.value.toLowerCase().trim() || '';

  const filtered = studentConversationsData.filter(conv => {
    return conv.name.toLowerCase().includes(search) || conv.sub.toLowerCase().includes(search);
  });

  filtered.forEach(conv => {
    const lastMsgObj = conv.messages[conv.messages.length - 1];
    const lastMsgText = lastMsgObj ? (lastMsgObj.file ? `📎 ${lastMsgObj.file.name}` : lastMsgObj.text) : "No messages yet";
    const lastTime = lastMsgObj ? lastMsgObj.timestamp.split(' ').slice(-2).join(' ') : "";

    const card = document.createElement('div');
    card.className = `chat-conv-item ${conv.id === activeStudentChatId ? 'active' : ''}`;
    card.onclick = () => selectStudentConversation(conv.id);

    card.innerHTML = `
      <div style="position: relative;">
        <div class="circle-icon-box md"><i data-lucide="user"></i></div>
        ${conv.isOnline ? '<div class="online-dot-badge online"></div>' : ''}
      </div>
      
      <div style="flex: 1; min-width: 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <span style="font-size: 13px; font-weight: 800; color: var(--navy-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${conv.name}</span>
          <span style="font-size: 10px; color: var(--text-muted); font-weight: 600;">${lastTime}</span>
        </div>
        <div style="font-size: 11px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${lastMsgText}</div>
      </div>
      
      ${conv.unread > 0 ? `<span class="unread-count-badge" style="font-size: 9px; padding: 2px 6px;">${conv.unread}</span>` : ''}
    `;

    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

function selectStudentConversation(id) {
  activeStudentChatId = id;

  const conv = studentConversationsData.find(c => c.id === id);
  if (conv) {
    conv.unread = 0;
    localStorage.setItem('titan_student_conversations', JSON.stringify(studentConversationsData));
  }

  renderStudentConversationsList();
  renderStudentChatMessages();
}

function filterStudentConversations() {
  renderStudentConversationsList();
}

function renderStudentChatMessages() {
  const container = document.getElementById('studentChatMessagesContainer');
  const title = document.getElementById('studentChatActiveTitle');
  const sub = document.getElementById('studentChatActiveSub');
  const onlineDot = document.getElementById('studentChatActiveOnlineDot');

  if (!container) return;

  const conv = studentConversationsData.find(c => c.id === activeStudentChatId);
  if (!conv) return;

  if (title) title.innerText = conv.name;
  if (sub) sub.innerText = conv.sub;
  if (onlineDot) onlineDot.className = `online-dot-badge ${conv.isOnline ? 'online' : 'offline'}`;

  container.innerHTML = '';

  // Render Date Separator
  const dateSep = document.createElement('div');
  dateSep.className = 'chat-date-separator';
  dateSep.innerHTML = '<span>Today</span>';
  container.appendChild(dateSep);

  conv.messages.forEach(msg => {
    const isSentByStudent = msg.sender === 'sent';
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = isSentByStudent ? 'flex-end' : 'flex-start';
    wrapper.style.marginBottom = '12px';

    let fileHtml = '';
    if (msg.file) {
      fileHtml = `
        <div style="background: rgba(15, 45, 105, 0.05); border: 1px solid var(--border-color); border-radius: 6px; padding: 8px 10px; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; font-size: 12px;">
          <i data-lucide="paperclip" style="width: 14px; height: 14px; color: var(--navy-primary);"></i>
          <span style="font-weight: 700; color: var(--navy-primary);">${msg.file.name}</span>
          <span style="color: var(--text-muted); font-size: 10px;">(${msg.file.size})</span>
        </div>
      `;
    }

    wrapper.innerHTML = `
      <div class="msg-bubble ${isSentByStudent ? 'sent' : 'received'}" style="max-width: 75%;">
        ${fileHtml}
        <div>${msg.text}</div>
        <div class="msg-time-status" style="display: flex; justify-content: flex-end; align-items: center; gap: 4px; font-size: 10px; opacity: 0.75; margin-top: 4px;">
          <span>${msg.timestamp}</span>
          ${isSentByStudent ? '<span>✓✓</span>' : ''}
        </div>
      </div>
    `;

    container.appendChild(wrapper);
  });

  if (window.lucide) window.lucide.createIcons();
  container.scrollTop = container.scrollHeight;
}

function handleStudentChatFileSelect(e) {
  const file = e.target.files && e.target.files[0];
  const previewBar = document.getElementById('studentChatAttachmentPreviewBar');
  const nameText = document.getElementById('studentAttachedFileNameText');
  const sizeText = document.getElementById('studentAttachedFileSizeText');

  if (!file) {
    studentAttachedFile = null;
    if (previewBar) previewBar.style.display = 'none';
    return;
  }

  const sizeFormatted = file.size > 1024 * 1024 
    ? (file.size / (1024 * 1024)).toFixed(1) + ' MB' 
    : Math.round(file.size / 1024) + ' KB';

  studentAttachedFile = {
    name: file.name,
    size: sizeFormatted
  };

  if (nameText) nameText.innerText = file.name;
  if (sizeText) sizeText.innerText = sizeFormatted;
  if (previewBar) previewBar.style.display = 'flex';
}

function removeStudentChatAttachedFile() {
  studentAttachedFile = null;
  const input = document.getElementById('studentChatFileInput');
  const previewBar = document.getElementById('studentChatAttachmentPreviewBar');
  if (input) input.value = '';
  if (previewBar) previewBar.style.display = 'none';
}

function toggleStudentChatEmojiPicker(e) {
  if (e) e.stopPropagation();
  const picker = document.getElementById('studentChatEmojiPicker');
  if (picker) {
    picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
  }
}

function insertStudentEmoji(emoji) {
  const input = document.getElementById('studentChatMessageInput');
  if (input) {
    input.value += emoji;
    input.focus();
  }
  const picker = document.getElementById('studentChatEmojiPicker');
  if (picker) picker.style.display = 'none';
}

function handleSendStudentChatMessage(e) {
  e.preventDefault();

  const input = document.getElementById('studentChatMessageInput');
  const text = input ? input.value.trim() : '';

  if (!text && !studentAttachedFile) return;

  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  const timestamp = `${hours}:${minutes} ${ampm}`;

  const convIndex = studentConversationsData.findIndex(c => c.id === activeStudentChatId);
  if (convIndex !== -1) {
    const newMsg = {
      id: Date.now(),
      sender: "sent",
      text: text || (studentAttachedFile ? `Attached File: ${studentAttachedFile.name}` : ""),
      timestamp: timestamp,
      read: true,
      file: studentAttachedFile ? { ...studentAttachedFile } : null
    };

    studentConversationsData[convIndex].messages.push(newMsg);
    localStorage.setItem('titan_student_conversations', JSON.stringify(studentConversationsData));

    // TWO-WAY SYNCHRONIZATION WITH TEACHER PANEL CONVERSATIONS LIST
    if (activeStudentChatId === 'teacher' && typeof teacherConversationsList !== 'undefined') {
      const studentIdInTeacher = "TITAN-2026-1024"; // Muhammad Ahmed
      const teacherConvItem = teacherConversationsList.find(t => t.id === studentIdInTeacher);
      if (teacherConvItem) {
        teacherConvItem.messages.push({
          sender: "other",
          text: text || (studentAttachedFile ? `Attached File: ${studentAttachedFile.name}` : ""),
          timestamp: timestamp,
          file: studentAttachedFile ? { ...studentAttachedFile } : null
        });
        teacherConvItem.lastMsg = text || studentAttachedFile.name;
        teacherConvItem.lastTime = timestamp;
        teacherConvItem.unread += 1;
        localStorage.setItem('titan_teacher_conversations', JSON.stringify(teacherConversationsList));
        if (typeof renderTeacherChatConversationList === 'function') renderTeacherChatConversationList();
      }
    }
  }

  // Reset Input & Attachment
  if (input) input.value = '';
  removeStudentChatAttachedFile();

  renderStudentConversationsList();
  renderStudentChatMessages();
  showToast('✓ Message sent successfully');
}
