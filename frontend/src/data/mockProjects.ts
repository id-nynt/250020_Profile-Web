import { Project } from '../types/project'

// Phase 1: Mock data for projects
export const mockProjects: Project[] = [
  {
    id: 'nhan-van-ielts',
    title: 'Nhan Van IELTS Practice Platform',
    shortDescription: 'Developing an IELTS practice platform with interactive learning features.',
    fullDescription: 'Joined as a junior developer in a professional team to build a comprehensive IELTS practice platform to help students prepare for the IELTS examination. The platform includes practice tests, vocabulary building, and progress tracking features.',
    problem: 'Implement backend APIs and frontend components to create an interactive learning experience for IELTS students, ensuring responsiveness and usability across devices.',
    approach: 'Collaborated with a team of developers, received tasks from product owner and follow Agile methodologies to deliver features incrementally. Focused on building blogs features with ASP.NET, reusable components and ensuring responsive design with React Tailwind CSS. Learned and applied best practices in code quality, GitHub workflow, CI/CD, and DevOps.',
    outcome: 'Created an intuitive learning platform enabling students to practice and track their IELTS preparation progress with clean, maintainable code.',
    category: 'commercial',
    projectCategory: 'software',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Backend APIs'],
    projectUrl: 'https://www.nhanvaneducation.com/',
    team: 'Software development team',
    role: 'Full-stack Developer',
    responsibilities: [
      'Successfully implemented Backend APIs for blog management using ASP.NET',
      'Built interactive practice test components with real-time feedback',
      'Integrated frontend with backend services for seamless data flow',
      'Created responsive design for all device sizes'
    ],
    period: '10/2025 - Current',
    imageUrl: '/images/projects/ielts-platform.png',
    featured: false,
    status: 'in-progress'
  },
  {
    id: 'richard-le-storyblok',
    title: 'Richard Le StoryBlok Migration',
    shortDescription: 'Migrated static homepage to Storyblok CMS to improve content management flexibility and maintainability.',
    fullDescription: 'Joined a professional development team to migrate Richard Le\'s portfolio website from a static HTML/CSS structure to a modern headless CMS architecture using Storyblok. After receiving project requirements from the product owner, thoroughly learned the existing codebase and legacy implementation, then led the frontend refactoring while maintaining performance and visual consistency. Enabled non-technical stakeholders to manage and update content independently through a robust CMS integration.',
    problem: 'Legacy static homepage lacked content management flexibility, requiring developer involvement for any content updates. Team needed a scalable solution that decouples content management from frontend code while preserving performance and design consistency.',
    approach: 'Collaborated with the team, received tasks and CMS architecture specifications from the product owner. Invested time learning the existing codebase and frontend structure to understand dependencies and legacy patterns. Implemented Storyblok headless CMS integration with React/Next.js, refactored component structure to be CMS-driven, and created content schemas for dynamic data retrieval. Applied modern content management best practices and shared knowledge with team members throughout the migration process.',
    outcome: 'Successfully delivered a fully functional CMS-driven portfolio enabling content editors to manage pages, projects, and updates without technical knowledge. Improved team productivity through reduced maintenance overhead and established scalable architecture for future content expansion. Demonstrated strong learning capability and collaborative development practices.',
    category: 'commercial',
    projectCategory: 'software',
    technologies: ['React', 'Next.js', 'Storyblok', 'TypeScript', 'TailwindCSS', 'Headless CMS'],
    projectUrl: 'https://www.richardle.com.au/',
    team: 'Software development team',
    role: 'Full-stack Developer',
    responsibilities: [
      'Successfully learned existing codebase and legacy implementation patterns',
      'Implemented Storyblok headless CMS integration with React/Next.js architecture',
      'Refactored components to consume CMS-driven content dynamically',
      'Designed and implemented content schemas for optimal data structure',
      'Maintained performance optimization and SEO during migration process',
      'Collaborated with team members and received guidance from product owner'
    ],
    period: '12/2025 - Current',
    imageUrl: '/images/projects/richard-le-storyblok.png',
    featured: false,
    status: 'in-progress'
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    shortDescription: 'Designed and developed a responsive portfolio website to showcase skills, resume, and projects.',
    fullDescription: 'Created a modern, responsive portfolio website using React and Next.js with a focus on performance, SEO, and user experience. Features dynamic project filtering, clean component structure, and optimized styling with Tailwind CSS.',
    problem: 'Needed a professional online presence to showcase my technical skills, projects, and resume to potential employers and collaborators.',
    approach: 'Built a responsive portfolio using React and Next.js with Tailwind CSS. Implemented modular component structure, integrated project data management, and optimized for performance and SEO.',
    outcome: 'Successfully delivered a polished, professional portfolio that effectively showcases technical skills and project accomplishments. Mobile-friendly design ensures accessibility.',
    category: 'personal',
    projectCategory: 'software',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
    githubUrl: 'https://github.com/id-nynt/250020_Profile-Web',
    projectUrl: 'https://janny-portfolio.vercel.app/',
    team: 'Individual project',
    role: 'Full-stack Developer',
    responsibilities: [
      'Successfully implemented responsive frontend using React and Tailwind CSS',
      'Integrated frontend with backend APIs with clean data flow',
      'Applied reusable UI patterns and maintainable styling practices',
      'Optimized for performance and SEO',
      'Focused on user experience and accessibility'
    ],
    period: '11/2025 - 12/2025',
    imageUrl: '/images/projects/portfolio-website.png',
    featured: true,
    status: 'completed'
  },
  {
    id: 'job-tracker',
    title: 'Job Tracker Application',
    shortDescription: 'A full-stack job application management system to organize and track multiple job applications in one place.',
    fullDescription: 'Built a comprehensive job tracking application to help job seekers manage multiple applications across different companies and roles. The application provides a clean interface for organizing job applications by search periods, tracking interview progress through different statuses, and maintaining detailed notes. Created with both a responsive React frontend and ASP.NET Core backend for flexible deployment options.',
    problem: 'Job seekers managing multiple applications across different companies need a centralized system to track applications, monitor interview progress, and organize outcomes. Without proper organization, it\'s easy to lose track of applications, interview schedules, and feedback from different companies.',
    approach: 'Built a full-stack application with React 18 and Vite for fast, responsive frontend development and ASP.NET Core 8 for robust backend services. Implemented JWT authentication for secure access, Entity Framework Core for efficient data management, and responsive Tailwind CSS design. Created mock data system for instant demos without backend setup. Included features for organizing applications by job search periods, tracking status lifecycle (Applied, Interviewing, Offered, Accepted, Rejected), and toggling between dark and light themes.',
    outcome: 'Successfully delivered a fully functional job tracking application with clean UI/UX, accessible from desktop to mobile devices. Application supports both frontend-only demo mode with mock data and full-stack deployment with persistent storage. Ready for production use with support for user authentication and multi-user scenarios.',
    category: 'personal',
    projectCategory: 'software',
    technologies: ['React 18', 'Vite', 'Tailwind CSS', 'ASP.NET Core 8', 'Entity Framework Core', 'JWT Authentication', 'SQLite', 'PostgreSQL'],
    githubUrl: 'https://github.com/id-nynt/260001_JobTracker',
    projectUrl: 'https://260001-job-tracker.vercel.app/',
    team: 'Individual project',
    role: 'Full-stack Developer',
    responsibilities: [
      'Successfully designed and built responsive React frontend with Vite for optimal performance',
      'Implemented ASP.NET Core 8 backend with Entity Framework Core for robust data management',
      'Created JWT authentication system for secure user access and multi-user support',
      'Built job application management features with full CRUD operations',
      'Implemented status tracking and job search period organization system',
      'Developed dark/light theme switching with persistent user preferences',
      'Created mock data system enabling instant demo without backend setup',
      'Deployed frontend to production using Vercel for global availability'
    ],
    period: '01/2026 - 03/2026',
    imageUrl: '/images/projects/job-tracker.png',
    featured: false,
    status: 'completed'
  },
  {
    id: 'twitter-classification',
    title: '(University) Human vs Non-Human Twitter Account Classification',
    shortDescription: 'Big data analytics project to distinguish human accounts from bots/brands on Twitter using machine learning classification.',
    fullDescription: 'Conducted comprehensive machine learning analysis on 25,450+ Twitter profiles to classify human vs. non-human (bot/brand) accounts. Built a production-grade ML pipeline combining supervised learning (XGBoost), unsupervised clustering (K-Means), and multi-modal feature engineering (textual, behavioral, structural). Achieved 80.45% classification accuracy with detailed persona discovery and feature importance analysis for misinformation detection at scale.',
    problem: 'Misclassified Twitter profiles undermine platform credibility and amplify misinformation. Needed an automated system to distinguish genuine human accounts from bots and brand accounts at scale, reducing manual moderation overhead while improving content filtering accuracy across millions of profiles.',
    approach: 'Implemented comprehensive multi-modal ML pipeline with three complementary data components: textual features (5,000+ TF-IDF vectors), behavioral metrics (18 features including activity patterns and engagement ratios), and structural signals (profile metadata and customization). Combined XGBoost classification with K-Means unsupervised clustering to discover 9 distinct user personas. Performed stratified 5-fold cross-validation, ROC-AUC analysis, and anomaly detection via regression for robust evaluation on imbalanced real-world data.',
    outcome: 'Successfully built production-ready Twitter account classifier achieving 80.45% accuracy (ROC-AUC: 0.8535) on imbalanced dataset. Identified key discriminative features and extracted 9 behavioral personas revealing distinct human vs. bot patterns. Delivered actionable insights on high-risk indicators (>100 tweets/day, <30% engagement) and generated comprehensive visualizations demonstrating multi-view analysis for platform security teams.',
    category: 'academic',
    projectCategory: 'data-ml',
    technologies: ['Python', 'XGBoost', 'scikit-learn', 'Pandas', 'NumPy', 'TF-IDF', 'K-Means', 'PCA', 'Jupyter', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/id-nynt/250027_twitter_classification',
    team: '6-member research team',
    role: 'Machine Learning Engineer',
    responsibilities: [
      'Successfully designed multi-modal ML architecture combining textual, behavioral, and structural features',
      'Implemented XGBoost classifier with hyperparameter optimization achieving 80.45% accuracy',
      'Performed comprehensive data preprocessing handling 25K+ records with UTF-8 encoding and missing value imputation',
      'Executed K-Means unsupervised clustering discovering 9 distinct user personas with behavioral interpretation',
      'Conducted stratified cross-validation analysis and ROC-AUC evaluation on imbalanced data',
      'Extracted feature importance from XGBoost revealing top discriminative signals for bot detection',
      'Generated professional visualizations including ROC curves, confusion matrices, and clustering analysis',
      'Documented findings with actionable recommendations for platform security and user safety'
    ],
    period: '02/2025 - 05/2025',
    imageUrl: '/images/projects/twitter-classification.png',
    featured: true,
    status: 'completed'
  },
  {
    id: 'recording-studio-booking',
    title: '(University) MyRecordingStudio - Booking System',
    shortDescription: 'Object-oriented PHP/MySQL web application for managing recording studio bookings with role-based access control.',
    fullDescription: 'Built a complete recording studio booking management system using object-oriented PHP principles and MySQL database. The application provides administrators with studio management capabilities and enables clients to search locations, check real-time availability, and manage their bookings. Implemented secure authentication, role-based authorization, and business logic for availability tracking with overlap detection.',
    problem: 'Recording studios need an efficient system to manage bookings, track studio availability across multiple locations, and handle client reservations. Manual booking systems lead to double-bookings and poor resource utilization. Required an automated solution with real-time availability checking and role-based access for administrators and clients.',
    approach: 'Developed object-oriented PHP application with MySQLi database using XAMPP stack. Implemented secure authentication with Bcrypt password hashing and session-based authorization. Built comprehensive business logic for availability checking, booking management, and cost calculation. Designed database schema with proper relationships (Users, Locations, Bookings) and integrity constraints. Applied SQL prepared statements throughout to prevent injection attacks and implemented multi-layer input validation.',
    outcome: 'Successfully delivered a fully functional booking system with secure role-based access control, real-time availability detection, and complete CRUD operations for bookings and locations. Admin users can manage studios and track system-wide bookings while clients can efficiently browse locations and manage their reservations with automated conflict resolution.',
    category: 'academic',
    projectCategory: 'software',
    technologies: ['PHP (OOP)', 'MySQL', 'MySQLi', 'HTML', 'CSS', 'Bcrypt', 'XAMPP', 'Sessions'],
    projectUrl: 'https://myrecordingstudio.infinityfree.me/',
    githubUrl: 'https://github.com/id-nynt/260012_MyRecordingStudio',
    team: 'Individual project',
    role: 'Full-stack Developer',
    responsibilities: [
      'Successfully designed and implemented object-oriented PHP architecture with MVC patterns',
      'Created MySQL database schema with proper relationships and business logic constraints',
      'Implemented secure authentication system using Bcrypt hashing and PHP sessions',
      'Built real-time availability checking with overlap detection across multiple studios',
      'Developed booking management features with create, read, update, delete operations',
      'Enforced role-based access control for administrators and clients',
      'Applied SQL prepared statements and input validation to prevent security vulnerabilities',
      'Implemented business logic including cost calculation and status flow management'
    ],
    period: '04/2026 - 05/2026',
    imageUrl: '/images/projects/recording-studio.png',
    featured: false,
    status: 'completed'
  },
  {
    id: 'shakespeare-chatbot',
    title: '(University) Shakespeare Literature Chatbot',
    shortDescription: 'Built a domain-specific intelligent chatbot to answer questions about Shakespeare\'s plays using RAG.',
    fullDescription: 'Independently designed and built an end-to-end AI system, structuring raw text data into retrievable formats and integrating RAG to improve answer accuracy and relevance. Demonstrated strong self-learning by iteratively refining prompts, data chunking, and system architecture.',
    problem: 'Chatbots often hallucinate answers when lacking grounding in source material. Needed an accurate, fact-based system specifically for Shakespeare literature that could retrieve relevant play excerpts to support responses. This project required self-learning of the process of building a chatbot from scratch.',
    approach: 'Python, RAG (Retrieval-Augmented Generation), FAISS for vector search, and small language models (TinyLlama). Structured Shakespeare texts into searchable vector embeddings, implemented a retrieval layer to fetch relevant passages, and used LLMs to generate contextual answers.',
    outcome: 'Successfully built a reliable Shakespeare chatbot that grounds answers in actual play text. Significantly reduced hallucinations through RAG implementation. Achieved production-ready architecture with iterative refinement.',
    category: 'academic',
    projectCategory: 'data-ml',
    technologies: ['Python', 'RAG', 'FAISS', 'TinyLlama', 'Streamlit'],
    githubUrl: 'https://github.com/id-nynt/250021_shakespeare-chatbot',
    demoUrl: '/video/projects/shakespeare-chatbot-demo.mp4',
    team: 'Individual project',
    role: 'Lead Developer & Architect',
    responsibilities: [
      'Successfully implemented end-to-end AI system with RAG architecture',
      'Structured raw text data into searchable vector embeddings',
      'Built retrieval layer fetching relevant play passages for accuracy',
      'Iteratively refined prompts and data chunking for optimal performance'
    ],
    period: '04/2025 - 06/2025',
    imageUrl: '/images/projects/shakespeare-chatbot.png',
    featured: true,
    status: 'completed'
  },
  {
    id: 'egovernment-microservice',
    title: '(University) E-government Microservice Platform',
    shortDescription: 'Developed a microservice-based government service portal in a 6-member team.',
    fullDescription: 'Architected and implemented a scalable e-government platform using microservices architecture. The system handles multiple government services through independent, containerized services with API gateway integration.',
    problem: 'Government services need scalability and independence—monolithic systems become bottlenecks. Required a platform where multiple government services could be deployed, scaled, and maintained independently.',
    approach: 'Microservices architecture using C# and ASP.NET Core. Each service runs in Docker containers, coordinated through an API Gateway. Services communicate via REST APIs, enabling independent scaling and deployment.',
    outcome: 'Successfully delivered a scalable microservice platform at scale. Each service can be updated independently without affecting others. Docker containerization ensures consistent environments across environments.',
    category: 'academic',
    projectCategory: 'software',
    technologies: ['C#', 'ASP.NET Core', 'Docker', 'Microservices', 'API Gateway'],
    githubUrl: 'https://github.com/id-nynt/250019_Microservice-E-gov-Platform',
    demoUrl: '/video/projects/egovernment-platform-demo.mp4',
    team: '6-member team',
    role: 'Project Coordinator',
    responsibilities: [
      'Successfully coordinated project planning and requirement analysis across 6 members',
      'Implemented two independent microservices using ASP.NET Core',
      'Integrated four services via ASP.NET API Gateway for seamless communication',
      'Containerized and deployed all services using Docker for consistency'
    ],
    period: '09/2025 - 11/2025',
    imageUrl: '/images/projects/egovernment-platform.png',
    featured: false,
    status: 'completed'
  },
  {
    id: 'big-data-analytics',
    title: '(University) Big Data Analytics for ImageNet Classification',
    shortDescription: 'Conducted large-scale analytics using ImageNet features generated by EVA-02.',
    fullDescription: 'Performed comprehensive big data analysis on ImageNet classification tasks using advanced machine learning techniques. Implemented efficient data pipelines and achieved significant performance improvements through hyperparameter optimization.',
    problem: 'ImageNet classification accuracy gaps between models indicate room for improvement. Needed to analyze high-dimensional feature data and optimize classifiers to reduce the accuracy gap.',
    approach: 'Python pipeline with XGBoost, scikit-learn for feature analysis and model building. Performed exploratory data analysis, implemented baseline classifiers, and systematically tuned hyperparameters to maximize accuracy.',
    outcome: 'Successfully achieved 86.86% and 76.47% accuracy on separate test sets, reducing performance gap from 10.39% to 7.56%. Received commendation for "high technical maturity" demonstrating strong data science fundamentals.',
    category: 'academic',
    projectCategory: 'data-ml',
    technologies: ['Python', 'XGBoost', 'scikit-learn', 'ImageNet', 'Data Analytics'],
    githubUrl: 'https://github.com/id-nynt/250022_imagenet_analysis',
    team: 'Individual project',
    role: 'Data Scientist',
    responsibilities: [
      'Successfully designed end-to-end ML pipeline and analyzed requirements',
      'Performed comprehensive data preprocessing and exploratory data analysis',
      'Implemented baseline ImageNet classifier achieving competitive accuracy',
      'Systematically tuned hyperparameters reducing performance gap by 2.83%'
    ],
    period: '10/2025 - 11/2025',
    imageUrl: '/images/projects/big-data-analytics.png',
    featured: true,
    status: 'completed'
  },
  {
    id: 'aws-serverless-data-lake',
    title: 'AWS Serverless Data Lake Workshop',
    shortDescription: 'Hands-on serverless data lake development using AWS cloud-native tools.',
    fullDescription: 'Built a comprehensive serverless data lake architecture using AWS services. Implemented automated data ingestion, transformation, and querying capabilities with cloud-native tools and infrastructure as code.',
    problem: 'Organizations need scalable data pipelines without managing servers. Built a serverless architecture to ingest, transform, and query large datasets efficiently.',
    approach: 'AWS CloudFormation for infrastructure, AWS Glue for ETL, S3 for storage, Athena for querying. Implemented infrastructure as code ensuring reproducibility and scalability.',
    outcome: 'Successfully built a fully serverless GDELT ingestion and query pipeline. Demonstrated understanding of serverless architecture patterns and AWS best practices.',
    category: 'personal',
    projectCategory: 'cloud-networking',
    technologies: ['AWS', 'CloudFormation', 'IAM', 'AWS Glue', 'S3', 'Athena'],
    githubUrl: 'https://github.com/id-nynt/250016_aws-serverless-lake-day',
    team: 'Individual workshop',
    role: 'Cloud Developer',
    responsibilities: [
      'Successfully provisioned cloud infrastructure using CloudFormation and IAM roles',
      'Implemented ETL pipeline and metadata cataloguing with AWS Glue',
      'Built serverless queries on global datasets using Athena',
      'Designed and deployed fully serverless data pipeline'
    ],
    period: '09/2025 - 10/2025',
    imageUrl: '/images/projects/aws-data-lake.png',
    featured: false,
    status: 'completed'
  },
  {
    id: 'aws-101-workshop',
    title: 'AWS 101 Workshop',
    shortDescription: 'Hands-on introduction to AWS cloud services and infrastructure.',
    fullDescription: 'Comprehensive introduction to Amazon Web Services covering fundamental concepts, core services, and hands-on practice with cloud infrastructure deployment and management.',
    problem: 'Need foundational knowledge of AWS cloud services to build scalable, cloud-native applications.',
    approach: 'Participated in structured workshop covering AWS fundamentals, core services (EC2, S3, Lambda), and hands-on labs for practical experience.',
    outcome: 'Successfully gained foundational knowledge of AWS services and cloud infrastructure fundamentals.',
    category: 'personal',
    projectCategory: 'cloud-networking',
    technologies: ['AWS', 'Cloud Computing', 'Infrastructure'],
    githubUrl: 'https://github.com/id-nynt/250015_aws-101-workshop',
    team: 'Individual workshop',
    role: 'Cloud Student',
    responsibilities: [
      'Learned fundamental AWS services and concepts',
      'Hands-on practice with EC2, S3, and other core services',
      'Understanding cloud architecture principles',
      'Completed practical exercises and labs'
    ],
    period: '08/2025 - 09/2025',
    imageUrl: '/images/projects/aws-101.png',
    featured: false,
    status: 'completed'
  },
  {
    id: 'healthcare-network-design',
    title: '(University) Healthcare Network Design',
    shortDescription: 'Designed a realistic network architecture for a healthcare facility.',
    fullDescription: 'Comprehensive network design project for a healthcare facility, including security considerations, compliance requirements, and scalable infrastructure planning for medical data management.',
    problem: 'Healthcare facilities need secure, scalable network infrastructure that complies with HIPAA requirements while supporting multiple departments and high data availability.',
    approach: 'Designed comprehensive network architecture including security considerations, compliance requirements, and scalable infrastructure planning for medical data management. Developed detailed documentation and technical specifications.',
    outcome: 'Successfully delivered network design achieving 98/100 score. Demonstrated strong technical communication and network architecture expertise.',
    category: 'academic',
    projectCategory: 'cloud-networking',
    technologies: ['Network Design', 'Infrastructure Planning', 'Documentation'],
    githubUrl: 'https://github.com/id-nynt/Healthcare-Network-System',
    team: 'Academic team project',
    role: 'Project Lead',
    responsibilities: [
      'Successfully led project planning and team coordination',
      'Analyzed infrastructure requirements and compliance needs',
      'Communicated complex networking challenges to team members',
      'Structured and delivered outstanding technical presentation'
    ],
    period: '08/2024 - 10/2024',
    imageUrl: '/images/projects/healthcare-network.png',
    featured: false,
    status: 'completed'
  },
  {
    id: 'software-testing-analysis',
    title: '(University) Software Testing and Analysis',
    shortDescription: 'Explored QA processes, test design, and software analysis techniques.',
    fullDescription: 'Comprehensive study and implementation of software testing methodologies, including functional testing, structural analysis, and quality assurance processes using industry-standard tools and frameworks.',
    problem: 'Software quality assurance requires comprehensive testing strategies combining functional, structural, and analytical approaches to ensure reliability and correctness.',
    approach: 'Implemented comprehensive testing methodologies including functional testing, structural analysis, and quality assurance processes. Used industry-standard tools and frameworks to design and execute test plans.',
    outcome: 'Successfully achieved 37.45/40 score with well-structured report. Demonstrated comprehensive understanding of testing methodologies and effective presentation delivery.',
    category: 'academic',
    projectCategory: 'software',
    technologies: ['Software Testing', 'QA Processes', 'Test Design', 'Documentation'],
    githubUrl: 'https://github.com/id-nynt/250019_matplotlib-test',
    team: 'Academic team project',
    role: 'Team Coordinator',
    responsibilities: [
      'Successfully coordinated team meetings and progress tracking',
      'Managed communication with tutors and stakeholders',
      'Structured comprehensive test planning and documentation',
      'Applied functional, structural, and analytic testing concepts effectively'
    ],
    period: '04/2025 - 05/2025',
    imageUrl: '/images/projects/software-testing.png',
    featured: false,
    status: 'completed'
  }
]

// Helper functions for mock data
export const getMockProjects = () => mockProjects

export const getMockProjectById = (id: string) => {
  return mockProjects.find(project => project.id === id)
}

export const getMockProjectsByCategory = (category: 'academic' | 'personal' | 'commercial' | 'all') => {
  if (category === 'all') return mockProjects
  return mockProjects.filter(project => project.category === category)
}

export const getMockProjectsByType = (projectCategory: 'software' | 'data-ml' | 'cloud-networking' | 'all') => {
  if (projectCategory === 'all') return mockProjects
  return mockProjects.filter(project => project.projectCategory === projectCategory)
}

export const getFeaturedProjects = () => {
  return mockProjects.filter(project => project.featured)
}