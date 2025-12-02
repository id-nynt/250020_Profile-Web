// Data service abstraction layer - handles switching between phases
import { Project, ProjectFilters, PaginationParams, PaginatedResponse } from '../types/project'
import { 
  getMockProjects, 
  getMockProjectById, 
  getMockProjectsByCategory,
  getMockProjectsByType,
  getFeaturedProjects 
} from '../data/mockProjects'

// Abstract service interface - same for all phases
export interface ProjectService {
  getAllProjects(): Promise<Project[]>
  getProjectById(id: string): Promise<Project | null>
  getProjectsByCategory(category: 'academic' | 'professional' | 'all'): Promise<Project[]>
  getProjectsByType(projectCategory: 'software' | 'data-ml' | 'cloud-networking' | 'all'): Promise<Project[]>
  getFeaturedProjects(): Promise<Project[]>
  // Phase 2+ methods (will return empty/default for Phase 1)
  searchProjects?(query: string, filters?: ProjectFilters): Promise<Project[]>
  getPaginatedProjects?(params: PaginationParams, filters?: ProjectFilters): Promise<PaginatedResponse<Project>>
  createProject?(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<Project>
  updateProject?(id: string, updates: Partial<Project>): Promise<Project>
  deleteProject?(id: string): Promise<boolean>
}

// Phase 1: Mock data implementation
class MockProjectService implements ProjectService {
  async getAllProjects(): Promise<Project[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100))
    return getMockProjects()
  }

  async getProjectById(id: string): Promise<Project | null> {
    await new Promise(resolve => setTimeout(resolve, 50))
    return getMockProjectById(id) || null
  }

  async getProjectsByCategory(category: 'academic' | 'professional' | 'all'): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 75))
    return getMockProjectsByCategory(category)
  }

  async getProjectsByType(projectCategory: 'software' | 'data-ml' | 'cloud-networking' | 'all'): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 75))
    return getMockProjectsByType(projectCategory)
  }

  async getFeaturedProjects(): Promise<Project[]> {
    await new Promise(resolve => setTimeout(resolve, 50))
    return getFeaturedProjects()
  }
}

// Phase 2+: API implementation
class ApiProjectService implements ProjectService {
  private baseUrl: string

  constructor() {
    this.baseUrl = getApiBaseUrl()
  }

  async getAllProjects(): Promise<Project[]> {
    const response = await fetch(`${this.baseUrl}/projects`)
    const data = await response.json()
    return data.success ? data.data : []
  }

  async getProjectById(id: string): Promise<Project | null> {
    const response = await fetch(`${this.baseUrl}/projects/${id}`)
    const data = await response.json()
    return data.success ? data.data : null
  }

  async getProjectsByCategory(category: 'academic' | 'professional' | 'all'): Promise<Project[]> {
    const url = category === 'all' 
      ? `${this.baseUrl}/projects`
      : `${this.baseUrl}/projects?category=${category}`
    
    const response = await fetch(url)
    const data = await response.json()
    return data.success ? data.data : []
  }

  async getProjectsByType(projectCategory: 'software' | 'data-ml' | 'cloud-networking' | 'all'): Promise<Project[]> {
    const url = projectCategory === 'all'
      ? `${this.baseUrl}/projects`
      : `${this.baseUrl}/projects?projectCategory=${projectCategory}`
    
    const response = await fetch(url)
    const data = await response.json()
    return data.success ? data.data : []
  }

  async getFeaturedProjects(): Promise<Project[]> {
    const response = await fetch(`${this.baseUrl}/projects?featured=true`)
    const data = await response.json()
    return data.success ? data.data : []
  }

  async searchProjects(query: string, filters?: ProjectFilters): Promise<Project[]> {
    const params = new URLSearchParams({
      search: query,
      ...filters as Record<string, string>
    })
    
    const response = await fetch(`${this.baseUrl}/projects/search?${params}`)
    const data = await response.json()
    return data.success ? data.data : []
  }

  async getPaginatedProjects(params: PaginationParams, filters?: ProjectFilters): Promise<PaginatedResponse<Project>> {
    const searchParams = new URLSearchParams({
      page: params.page.toString(),
      limit: params.limit.toString(),
      sortBy: params.sortBy || 'createdAt',
      sortOrder: params.sortOrder || 'desc',
      ...filters as Record<string, string>
    })
    
    const response = await fetch(`${this.baseUrl}/projects?${searchParams}`)
    return await response.json()
  }

  async createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<Project> {
    const response = await fetch(`${this.baseUrl}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    })
    const data = await response.json()
    return data.data
  }

  async updateProject(id: string, updates: Partial<Project>): Promise<Project> {
    const response = await fetch(`${this.baseUrl}/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates)
    })
    const data = await response.json()
    return data.data
  }

  async deleteProject(id: string): Promise<boolean> {
    const response = await fetch(`${this.baseUrl}/projects/${id}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    return data.success
  }
}

// Simple helper to check if we should use mock data (Phase 1)
const useMockData = () => {
  const phase = process.env.NEXT_PUBLIC_DEPLOYMENT_PHASE || 'phase1'
  return phase === 'phase1'
}

// Simple helper to get API base URL (Phase 2+)
const getApiBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || 'https://your-backend.onrender.com/api'
}

// Service factory - automatically chooses implementation based on phase
export function createProjectService(): ProjectService {
  return useMockData() ? new MockProjectService() : new ApiProjectService()
}

// Default service instance
export const projectService = createProjectService()