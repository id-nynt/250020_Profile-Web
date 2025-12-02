// Test script to verify Phase 1 setup
import { projectService } from './src/services/projectService'
import { getMockProjects } from './src/data/mockProjects'

async function testPhase1() {
  console.log('🧪 Testing Phase 1 Setup...')
  
  try {
    // Test 1: Mock data service
    console.log('📊 Testing mock data...')
    const mockProjects = getMockProjects()
    console.log(`✅ Mock projects loaded: ${mockProjects.length} projects`)
    
    // Test 2: Service layer
    console.log('🔄 Testing service layer...')
    const serviceProjects = await projectService.getAllProjects()
    console.log(`✅ Service projects loaded: ${serviceProjects.length} projects`)
    
    // Test 3: Environment
    console.log('🌍 Testing environment...')
    const phase = process.env.NEXT_PUBLIC_DEPLOYMENT_PHASE || 'phase1'
    console.log(`✅ Current phase: ${phase}`)
    
    console.log('🎉 Phase 1 setup is working correctly!')
    
  } catch (error) {
    console.error('❌ Phase 1 setup error:', error)
  }
}

// Run test if this file is executed directly
if (require.main === module) {
  testPhase1()
}

export default testPhase1