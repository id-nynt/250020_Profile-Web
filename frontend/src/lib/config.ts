// Get current phase from environment
const getCurrentPhase = () => (process.env.NEXT_PUBLIC_DEPLOYMENT_PHASE || 'phase1') as 'phase1' | 'phase2' | 'phase3'

// Configuration for different deployment phases
export const config = {
  // Current phase configuration
  CURRENT_PHASE: getCurrentPhase(),
  
  // API Configuration
  API: {
    // Phase 1: Mock data (no API)
    PHASE1: {
      USE_MOCK_DATA: true,
      BASE_URL: '',
    },
    // Phase 2: Backend API (Render deployment)
    PHASE2: {
      USE_MOCK_DATA: false,
      BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://your-backend.onrender.com/api',
    },
    // Phase 3: AWS deployment
    PHASE3: {
      USE_MOCK_DATA: false,
      BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.your-domain.com',
      AWS_REGION: process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1',
    }
  },
  
  // Image storage configuration
  IMAGES: {
    // Phase 1: Local static images
    PHASE1: {
      BASE_PATH: '/images',
      CDN_URL: '',
    },
    // Phase 2: Backend served images
    PHASE2: {
      BASE_PATH: '/images',
      CDN_URL: process.env.NEXT_PUBLIC_CDN_URL || '',
    },
    // Phase 3: AWS S3/CloudFront
    PHASE3: {
      BASE_PATH: '/images',
      CDN_URL: process.env.NEXT_PUBLIC_CDN_URL || 'https://d1234567890.cloudfront.net',
      S3_BUCKET: process.env.NEXT_PUBLIC_S3_BUCKET || 'your-portfolio-assets',
    }
  }
}

// Helper function to get current phase configuration
export function getCurrentPhaseConfig() {
  const phase = config.CURRENT_PHASE
  return {
    CURRENT_PHASE: phase,
    API_CONFIG: config.API[phase.toUpperCase() as keyof typeof config.API],
    IMAGE_CONFIG: config.IMAGES[phase.toUpperCase() as keyof typeof config.IMAGES],
  }
}

// Feature flags for different phases
export const getFeatures = () => {
  const phase = getCurrentPhase()
  return {
    CONTACT_FORM_SUBMIT: phase !== 'phase1',
    ADMIN_PANEL: phase === 'phase3',
    REAL_TIME_UPDATES: phase === 'phase3',
    ANALYTICS: phase !== 'phase1',
  }
}

// Helper to check if we should use mock data
export const useMockData = () => {
  return getCurrentPhaseConfig().API_CONFIG.USE_MOCK_DATA
}

// Helper to get API base URL
export const getApiBaseUrl = () => {
  return getCurrentPhaseConfig().API_CONFIG.BASE_URL
}

// Helper to get image URL
export const getImageUrl = (path: string) => {
  const imageConfig = getCurrentPhaseConfig().IMAGE_CONFIG
  const cdnUrl = imageConfig.CDN_URL
  const basePath = imageConfig.BASE_PATH
  
  if (cdnUrl) {
    return `${cdnUrl}${path}`
  }
  return `${basePath}${path}`
}