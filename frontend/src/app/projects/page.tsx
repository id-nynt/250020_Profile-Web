'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Github, ExternalLink, Filter, Computer } from 'lucide-react'
import Image from 'next/image'
import { Project } from '../../types/project'
import { projectService } from '../../services/projectService'
import Footer from '@/components/Footer'



const ProjectCard = ({ project }: { project: Project }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
        <div className="p-6 flex-1 flex flex-col">
          {/* Header: Title & Period */}
          <div className="mb-3">
            <h3 className="text-xl font-semibold text-primary-800 mb-1">
              {project.title}
            </h3>
            <p className="text-primary-600 text-sm">{project.period}</p>
          </div>

          {/* Introduction */}
          <p className="text-primary-700 leading-relaxed mb-4 flex-grow">
            {project.shortDescription}
          </p>

          {/* Tech Stack Tags */}
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

          {/* Project Image */}
          {project.imageUrl && (
            <div className="mb-4 -mx-6 px-6">
              <div className="w-full h-40 bg-primary-100 rounded-lg overflow-hidden relative border border-gray-300">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
              >
                <ExternalLink size={16} className="mr-2" />
                View Demo
              </a>
            )}
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-colors font-medium text-sm"
              >
                <ExternalLink size={16} className="mr-2" />
                View Live
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors font-medium text-sm"
            >
              <Github size={16} className="mr-2" />
              View Code
            </a>
          </div>

          {/* Project Details Button */}
          <button
            onClick={() => setShowModal(true)}
            className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
          >
            Project Details
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 pt-20">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[calc(100vh-100px)] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary-200 flex-shrink-0 bg-white rounded-t-lg">
              <h2 className="text-2xl font-bold text-primary-800">{project.title}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-primary-600 hover:text-primary-800 text-2xl font-bold leading-none"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1">
              {/* Project Overview Section */}
              <div className="space-y-4">
                {/* Time & Introduction */}
                <div>
                  <p className="text-primary-600 text-sm font-medium mb-2">{project.period}</p>
                  <p className="text-primary-700 leading-relaxed">{project.shortDescription}</p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Image */}
                {project.imageUrl && (
                  <div className="w-full h-60 bg-primary-100 rounded-lg overflow-hidden relative border border-gray-300">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-800 mb-3">Project Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-primary-700">Type:</span>
                    <span className="text-primary-600 ml-2">{project.team}</span>
                  </div>
                  <div>
                    <span className="font-medium text-primary-700">Role:</span>
                    <span className="text-primary-600 ml-2">{project.role}</span>
                  </div>
                </div>
              </div>

              {/* Problem */}
              {project.problem && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <h3 className="font-semibold text-primary-800 mb-2 flex items-center">
                    <span className="text-red-600 mr-2">🎯</span>
                    Problem
                  </h3>
                  <p className="text-primary-700 text-sm">{project.problem}</p>
                </div>
              )}

              {/* Approach */}
              {project.approach && (
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <h3 className="font-semibold text-primary-800 mb-2 flex items-center">
                    <span className="text-purple-600 mr-2">🛠️</span>
                    Approach
                  </h3>
                  <p className="text-primary-700 text-sm">{project.approach}</p>
                </div>
              )}

              {/* Key Responsibilities */}
              {project.responsibilities.length > 0 && (
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <h3 className="font-semibold text-primary-800 mb-3 flex items-center">
                    <span className="mr-2">📋</span>
                    Key Responsibilities
                  </h3>
                  <ul className="text-sm text-primary-700 space-y-2">
                    {project.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcome Summary */}
              {project.outcome && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h3 className="font-semibold text-primary-800 mb-2">Outcome</h3>
                  <p className="text-primary-700 text-sm">{project.outcome}</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-primary-200 flex gap-3 justify-end bg-primary-50 rounded-b-lg flex-shrink-0 flex-wrap">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Demo
                </a>
              )}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-colors font-medium text-sm"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors font-medium text-sm"
                >
                  <Github size={16} className="mr-2" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'academic' | 'personal' | 'commercial'>('all')
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
  const personalProjects = projects.filter(p => p.category === 'personal').length
  const commercialProjects = projects.filter(p => p.category === 'commercial').length

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
                  onClick={() => setActiveCategory('personal')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === 'personal'
                      ? 'bg-accent-100 text-accent-700'
                      : 'text-primary-600 hover:text-accent-600'
                  }`}
                >
                  Personal ({personalProjects})
                </button>
                <button
                  onClick={() => setActiveCategory('commercial')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === 'commercial'
                      ? 'bg-accent-100 text-accent-700'
                      : 'text-primary-600 hover:text-accent-600'
                  }`}
                >
                  Commercial ({commercialProjects})
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