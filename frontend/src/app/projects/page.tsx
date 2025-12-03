'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Github, ExternalLink, Filter, Computer } from 'lucide-react'
import Image from 'next/image'
import { Project } from '../../types/project'
import { projectService } from '../../services/projectService'
import Footer from '@/components/Footer'



const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-all duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-primary-800 mb-2">
              {project.title}
            </h3>
            <p className="text-primary-600 text-sm mb-2">{project.period}</p>
            <p className="text-primary-700 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
          <div className="flex gap-2 ml-4">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-600 hover:bg-accent-700 text-white rounded-full p-2 transition-colors shadow-sm"
                title="View Project Demo"
              >
                <Computer size={16} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full p-2 transition-colors shadow-sm"
              title="View on GitHub"
            >
              <Github size={16} />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-accent-600 transition-colors"
                title="View Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium transition-colors"
        >
          <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
          <ChevronDown
            size={16}
            className={`transform transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-primary-200 space-y-4">
            {/* Project Image */}
            {project.imageUrl && (
              <div className="mb-4">
                <div className="w-full h-48 bg-primary-100 rounded-lg overflow-hidden relative border border-gray-300">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            )}

            <div>
              <h4 className="font-semibold text-primary-800 mb-2">Project Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-primary-700">Team:</span>
                  <span className="text-primary-600 ml-2">{project.team}</span>
                </div>
                <div>
                  <span className="font-medium text-primary-700">Role:</span>
                  <span className="text-primary-600 ml-2">{project.role}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-primary-800 mb-2">Key Responsibilities</h4>
              <ul className="text-sm text-primary-700 space-y-1">
                {project.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary-800 mb-2">Outcomes</h4>
              <ul className="text-sm text-primary-700 space-y-1">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'academic' | 'professional'>('all')
  const [activeProjectCategory, setActiveProjectCategory] = useState<'all' | 'software' | 'data-ml' | 'cloud-networking'>('all')
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  // Load projects on component mount
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true)
        const data = await projectService.getAllProjects()
        setProjects(data)
      } catch (error) {
        console.error('Failed to load projects:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeCategory === 'all' || project.category === activeCategory
    const projectCategoryMatch = activeProjectCategory === 'all' || project.projectCategory === activeProjectCategory
    return categoryMatch && projectCategoryMatch
  })

  const academicProjects = projects.filter(p => p.category === 'academic').length
  const professionalProjects = projects.filter(p => p.category === 'professional').length

  const projectsByCategory = {
    software: projects.filter(p => p.projectCategory === 'software'),
    'data-ml': projects.filter(p => p.projectCategory === 'data-ml'),
    'cloud-networking': projects.filter(p => p.projectCategory === 'cloud-networking')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-50 py-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-600 mx-auto mb-4"></div>
          <p className="text-primary-600">Loading projects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Content area with background */}
      <div className="flex-1 relative">
        {/* Background Image - only covers content area */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/project-background.jpg"
            alt="Projects Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
          {/* 1. Introduction */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to My Project Showcase! 👋
            </h1>
            <p className="text-lg text-white max-w-3xl mx-auto mb-4">
              Welcome to my project showcase! Here's a collection of academic and professional projects 
              demonstrating my journey in software development, machine learning, cloud technologies, and system design.
            </p>
            <p className="text-base text-white max-w-2xl mx-auto">
              Each project represents hands-on experience with modern technologies and collaborative development practices. 
              Click on any project to explore the details and view the source code on GitHub.
            </p>
          </div>

        {/* 2. Projects Section */}
        <div className="mb-16">
          {/* Sorting System */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            {/* Academic/Professional Filter */}
            <div className="flex justify-center">
              <div className="inline-flex bg-white rounded-lg border border-primary-200 p-1">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === 'all'
                      ? 'bg-accent-100 text-accent-700'
                      : 'text-primary-600 hover:text-accent-600'
                  }`}
                >
                  All Projects ({projects.length})
                </button>
                <button
                  onClick={() => setActiveCategory('academic')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === 'academic'
                      ? 'bg-accent-100 text-accent-700'
                      : 'text-primary-600 hover:text-accent-600'
                  }`}
                >
                  Academic ({academicProjects})
                </button>
                <button
                  onClick={() => setActiveCategory('professional')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === 'professional'
                      ? 'bg-accent-100 text-accent-700'
                      : 'text-primary-600 hover:text-accent-600'
                  }`}
                >
                  Personal ({professionalProjects})
                </button>
              </div>
            </div>

            {/* Project Category Filter */}
            <div className="flex justify-center">
              <div className="relative w-full md:w-auto">
                <select
                  value={activeProjectCategory}
                  onChange={(e) => setActiveProjectCategory(e.target.value as 'all' | 'software' | 'data-ml' | 'cloud-networking')}
                  className="appearance-none bg-white border border-primary-200 rounded-lg px-4 py-3 pr-8 text-sm font-medium text-primary-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 w-full md:min-w-[200px] h-12"
                >
                  <option value="all">All Categories</option>
                  <option value="software">Software/Web ({projectsByCategory.software.length})</option>
                  <option value="data-ml">Data & ML ({projectsByCategory['data-ml'].length})</option>
                  <option value="cloud-networking">Cloud & Networking ({projectsByCategory['cloud-networking'].length})</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-primary-600">No projects found with the selected filters.</p>
            </div>
          )}
        </div>

        {/* 3. All Projects */}
        <div className="text-center mb-16 p-6 bg-gradient-to-r from-accent-50 to-primary-50 rounded-lg border border-accent-200">
          <h3 className="text-xl font-semibold text-primary-800 mb-3">📁 All Projects</h3>
          <p className="text-primary-700 mb-4">
            👉 And there are more! Visit{' '}
            <a
              href="https://github.com/id-nynt?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:text-accent-700 font-medium underline"
            >
              All GitHub Repos
            </a>
            {' '}to see my journey!
          </p>
        </div>

        {/* 4. Tech Stack */}
        <div className="mb-16">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-primary-200">
            <h3 className="text-2xl font-semibold text-primary-800 mb-6">🔧 Tech Stack</h3>
            <div className="space-y-4 text-primary-700">
              <div className="flex items-start gap-3">
                <span className="text-xl">💻</span>
                <div>
                  <span className="font-semibold">Languages:</span> Python, JavaScript, C#.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">⚛️</span>
                <div>
                  <span className="font-semibold">Frameworks:</span> React.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🗄️</span>
                <div>
                  <span className="font-semibold">Databases:</span> MySQL.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">☁️</span>
                <div>
                  <span className="font-semibold">Cloud & DevOps:</span> AWS (EC2, S3, IAM), Docker, CI/CD basics.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🛠️</span>
                <div>
                  <span className="font-semibold">Tools:</span> Git, GitHub, VS Code, Jupyter Notebook.
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}