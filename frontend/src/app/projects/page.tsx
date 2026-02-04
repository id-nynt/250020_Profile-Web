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
      <div className="rounded-lg shadow-sm border border-gray-500 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col" style={{ backgroundColor: 'rgba(40, 40, 40, 0.9)' }}>
        <div className="p-6 flex-1 flex flex-col">
          {/* Header: Title & Period */}
          <div className="mb-3">
            <h3 className="text-xl font-semibold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm">{project.period}</p>
          </div>

          {/* Introduction */}
          <p className="text-gray-200 leading-relaxed mb-4 flex-grow">
            {project.shortDescription}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ff903b' }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Image */}
          {project.imageUrl && (
            <div className="mb-4 -mx-6 px-6">
              <div className="w-full h-40 rounded-lg overflow-hidden relative border border-gray-600" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
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
                className="inline-flex items-center px-4 py-2 bg-black hover:bg-gray-900 hover:font-bold text-white rounded-lg transition-colors font-medium text-sm"
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
                className="inline-flex items-center px-4 py-2 bg-black hover:bg-gray-900 hover:font-bold text-white rounded-lg transition-colors font-medium text-sm"
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
                className="inline-flex items-center px-4 py-2 bg-black hover:bg-gray-900 hover:font-bold text-white rounded-lg transition-colors font-medium text-sm"
              >
                <Github size={16} className="mr-2" />
                View Code
              </a>
            )}
          </div>

          {/* Project Details Button */}
          <button
            onClick={() => setShowModal(true)}
            className="text-white hover:font-semibold hover:underline font-medium transition-colors"
          >
            Project Details
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-85 z-50 flex items-start justify-center p-4 pt-20">
          <div className="rounded-lg shadow-2xl max-w-4xl w-full max-h-[calc(100vh-100px)] flex flex-col" style={{ backgroundColor: 'rgb(31, 31, 31)' }}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-600 flex-shrink-0 rounded-t-lg" style={{ backgroundColor: 'rgb(75, 75, 75)' }}>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-300 hover:text-white text-2xl font-bold leading-none"
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
                  <p className="text-gray-300 text-sm font-medium mb-2">{project.period}</p>
                  <p className="text-gray-200 leading-relaxed">{project.shortDescription}</p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{ backgroundColor: 'rgba(185, 185, 185, 0.2)', color: '#ff903b' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Image */}
                {project.imageUrl && (
                  <div className="w-full h-60 rounded-lg overflow-hidden relative border border-gray-600" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
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
              <div className="p-4 rounded-lg border border-gray-600" style={{ backgroundColor: 'rgba(255, 144, 59, 0.1)' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#ff903b' }}>Project Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-300">Type:</span>
                    <span className="text-gray-200 ml-2">{project.team}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-300">Role:</span>
                    <span className="text-gray-200 ml-2">{project.role}</span>
                  </div>
                </div>
              </div>

              {/* Problem */}
              {project.problem && (
                <div className="border-l-4 border-red-500 p-4 rounded" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
                  <h3 className="font-semibold text-white mb-2 flex items-center">
                    <span className="text-red-500 mr-2">🎯</span>
                    Problem
                  </h3>
                  <p className="text-gray-200 text-sm">{project.problem}</p>
                </div>
              )}

              {/* Approach */}
              {project.approach && (
                <div className="border-l-4 border-purple-500 p-4 rounded" style={{ backgroundColor: 'rgba(147, 51, 234, 0.1)' }}>
                  <h3 className="font-semibold text-white mb-2 flex items-center">
                    <span className="text-purple-400 mr-2">🛠️</span>
                    Approach
                  </h3>
                  <p className="text-gray-200 text-sm">{project.approach}</p>
                </div>
              )}

              {/* Key Responsibilities */}
              {project.responsibilities.length > 0 && (
                <div className="border-l-4 border-blue-400 p-4 rounded" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                  <h3 className="font-semibold text-white mb-3 flex items-center">
                    <span className="mr-2">📋</span>
                    Key Responsibilities
                  </h3>
                  <ul className="text-sm text-gray-200 space-y-2">
                    {project.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff903b' }}></span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcome Summary */}
              {project.outcome && (
                <div className="border-l-4 border-green-500 p-4 rounded" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                  <h3 className="font-semibold text-white mb-2">Outcome</h3>
                  <p className="text-gray-200 text-sm">{project.outcome}</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-600 flex gap-3 justify-end rounded-b-lg flex-shrink-0 flex-wrap" style={{ backgroundColor: 'rgb(75, 75, 75)' }}>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-black hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
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
                  className="inline-flex items-center px-4 py-2 bg-black hover:bg-accent-700 text-white rounded-lg transition-colors font-medium text-sm"
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
                  className="inline-flex items-center px-4 py-2 bg-black hover:bg-gray-900 hover:font-bold text-white rounded-lg transition-colors font-medium text-sm"
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
      <div className="min-h-screen py-16 flex items-center justify-center" style={{ backgroundColor: '#0E1830' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading projects...</p>
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
        
        {/* Black Overlay */}
        <div className="absolute inset-0 z-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
          {/* 1. Introduction */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-5xl font-bold text-white mb-4 font-orbitron">
              Welcome to My Project Showcase!
            </h1>
            <div className="w-24 lg:w-64 h-1 mx-auto mb-6" style={{ backgroundColor: '#ff903b' }}></div>
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
            <div className="flex justify-center w-full">
              <div className="inline-flex flex-wrap rounded-lg border border-gray-600 p-1 gap-1 justify-center" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
                <button
                  onClick={() => {
                    setActiveCategory('all')
                    setActiveProjectCategory('all')
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === 'all'
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={activeCategory === 'all' ? { backgroundColor: 'rgba(255, 151, 71, 0.3)', color: '#ff903b' } : {}}
                >
                  All Projects ({projects.length})
                </button>
                <button
                  onClick={() => {
                    setActiveCategory('academic')
                    setActiveProjectCategory('all')
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === 'academic'
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={activeCategory === 'academic' ? { backgroundColor: 'rgba(255, 144, 59, 0.2)', color: '#ff903b' } : {}}
                >
                  Academic ({academicProjects})
                </button>
                <button
                  onClick={() => {
                    setActiveCategory('personal')
                    setActiveProjectCategory('all')
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === 'personal'
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={activeCategory === 'personal' ? { backgroundColor: 'rgba(255, 144, 59, 0.2)', color: '#ff903b' } : {}}
                >
                  Personal ({personalProjects})
                </button>
                <button
                  onClick={() => {
                    setActiveCategory('commercial')
                    setActiveProjectCategory('all')
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === 'commercial'
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={activeCategory === 'commercial' ? { backgroundColor: 'rgba(255, 144, 59, 0.2)', color: '#ff903b' } : {}}
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
                  className="appearance-none border border-gray-600 rounded-lg px-4 py-3 pr-8 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full md:min-w-[200px] h-12"
                  style={{ backgroundColor: 'rgb(0, 0, 0)' }}
                >
                  <option value="all" style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>All Categories</option>
                  <option value="software" style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>Software/Web ({projectsByCategory.software.length})</option>
                  <option value="data-ml" style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>Data & ML ({projectsByCategory['data-ml'].length})</option>
                  <option value="cloud-networking" style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>Cloud & Networking ({projectsByCategory['cloud-networking'].length})</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2" style={{ color: '#ff903b' }}>
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
              <p className="text-gray-300">No projects found with the selected filters.</p>
            </div>
          )}
        </div>

        {/* 3. All Projects */}
        <div className="text-center mb-16 p-6 rounded-lg border border-gray-600" style={{ backgroundColor: 'rgb(4, 23, 44)' }}>
          <h3 className="text-xl font-semibold text-white mb-3" style={{ color: '#ffffff' }}>All Projects</h3>
          <p className="text-gray-200 mb-4">
            👉 And there are more! Visit{' '}
            <a
              href="https://github.com/id-nynt?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline hover:text-white"
              style={{ color: '#ff903b' }}
            >
              All GitHub Repos
            </a>
            {' '}to see my journey!
          </p>
        </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}