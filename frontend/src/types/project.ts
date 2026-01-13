// Central type definitions for all phases
export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription?: string
  problem?: string
  approach?: string
  outcome?: string
  category: 'academic' | 'personal' | 'commercial'
  projectCategory: 'software' | 'data-ml' | 'cloud-networking'
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  projectUrl?: string
  liveUrl?: string
  team?: string
  role?: string
  responsibilities: string[]
  outcomes?: string[]
  period: string
  imageUrl?: string
  featured?: boolean
  status: 'completed' | 'in-progress' | 'planning'
  // Phase 2+ fields (optional for Phase 1)
  createdAt?: Date
  updatedAt?: Date
  userId?: string
}

// API Response types for Phase 2+
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

export interface ProjectsResponse extends ApiResponse<Project[]> {}
export interface ProjectResponse extends ApiResponse<Project> {}

// Filter and pagination types for Phase 2+
export interface ProjectFilters {
  category?: 'academic' | 'personal' | 'commercial' | 'all'
  projectCategory?: 'software' | 'data-ml' | 'cloud-networking' | 'all'
  technologies?: string[]
  status?: 'completed' | 'in-progress' | 'planning'
  featured?: boolean
}

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: 'createdAt' | 'updatedAt' | 'title'
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    currentPage: number
    totalPages: number
    totalItems: number
    hasNext: boolean
    hasPrevious: boolean
  }
}