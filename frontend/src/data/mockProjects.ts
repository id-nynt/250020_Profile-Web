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
    demoUrl: 'https://github.com/id-nynt/250019_Microservice-E-gov-Platform#demo',
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