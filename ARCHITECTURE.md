# Phase-Based Architecture Guide

## Overview

This portfolio project is designed with a scalable, phase-based architecture that allows smooth transitions between deployment strategies:

- **Phase 1**: Frontend-only (React + GitHub Pages) with mock data
- **Phase 2**: Full-stack (React + ASP.NET + Render) with real database
- **Phase 3**: Cloud deployment (AWS) with advanced features

## Architecture Design

### 📁 Folder Structure

```
src/
├── types/          # TypeScript interfaces (shared across all phases)
├── services/       # Data service abstraction layer
├── data/          # Mock data (Phase 1 only)
├── lib/           # Configuration and utilities
├── components/    # Reusable UI components
└── app/          # Next.js pages
```

### 🏗️ Key Architecture Principles

1. **Data Abstraction**: Service layer hides implementation details
2. **Configuration-Based**: Environment variables control behavior
3. **Type Safety**: Consistent TypeScript interfaces across phases
4. **Zero Breaking Changes**: Same component APIs across all phases

## Phase Transition Guide

### Phase 1: Frontend Only (Current)

**Status**: ✅ **CURRENT PHASE**

**Configuration**:

```env
NEXT_PUBLIC_DEPLOYMENT_PHASE=phase1
```

**What's Working**:

- Mock data from `src/data/mockProjects.ts`
- All UI components and filtering
- Static image hosting
- GitHub Pages deployment ready

**Data Flow**:

```
Component → projectService → MockProjectService → mockProjects.ts
```

### Phase 2: Full-Stack (ASP.NET Backend)

**Status**: 🚧 **READY TO IMPLEMENT**

**Steps to Transition**:

1. **Create ASP.NET Backend**:

   ```bash
   # In your project root
   mkdir backend
   cd backend
   dotnet new webapi -n PortfolioApi
   ```

2. **Update Environment**:

   ```env
   NEXT_PUBLIC_DEPLOYMENT_PHASE=phase2
   NEXT_PUBLIC_API_BASE_URL=https://your-backend.onrender.com/api
   ```

3. **Database Schema** (Entity Framework):
   ```csharp
   public class Project
   {
       public string Id { get; set; }
       public string Title { get; set; }
       public string ShortDescription { get; set; }
       public string FullDescription { get; set; }
       public string Category { get; set; }
       public string ProjectCategory { get; set; }
       public List<string> Technologies { get; set; }
       public string GithubUrl { get; set; }
       public string LiveUrl { get; set; }
       public string Team { get; set; }
       public string Role { get; set; }
       public List<string> Responsibilities { get; set; }
       public List<string> Outcomes { get; set; }
       public string Period { get; set; }
       public string ImageUrl { get; set; }
       public bool Featured { get; set; }
       public string Status { get; set; }
       public DateTime CreatedAt { get; set; }
       public DateTime UpdatedAt { get; set; }
   }
   ```

**Data Flow**:

```
Component → projectService → ApiProjectService → ASP.NET API → Database
```

**No Frontend Changes Required!** 🎉

### Phase 3: AWS Cloud Deployment

**Status**: 📋 **PLANNED**

**AWS Services**:

- **Frontend**: S3 + CloudFront
- **Backend**: ECS/Fargate or Lambda
- **Database**: RDS (PostgreSQL)
- **Images**: S3 + CloudFront CDN
- **Auth**: Cognito (if admin features needed)

**Update Environment**:

```env
NEXT_PUBLIC_DEPLOYMENT_PHASE=phase3
NEXT_PUBLIC_API_BASE_URL=https://api.your-domain.com
NEXT_PUBLIC_CDN_URL=https://d1234567890.cloudfront.net
NEXT_PUBLIC_AWS_REGION=us-east-1
```

**Additional Features Available**:

- Admin panel for project management
- Real-time analytics
- Image optimization via CloudFront
- Advanced caching strategies

## Key Files Explained

### `src/types/project.ts`

- **Purpose**: Central type definitions
- **Phase Impact**: None - same types across all phases
- **Contains**: Project interface, API responses, filters

### `src/services/projectService.ts`

- **Purpose**: Data access abstraction
- **Phase Impact**: **Automatic switching** based on config
- **Magic**: Same interface, different implementations

### `src/lib/config.ts`

- **Purpose**: Phase-specific configuration
- **Phase Impact**: Controls which services to use
- **Features**: Environment-based switching

### `src/data/mockProjects.ts`

- **Purpose**: Phase 1 mock data
- **Phase Impact**: Only used in Phase 1
- **Future**: Can be used for development/testing in later phases

## Benefits of This Architecture

### ✅ **Easy Transitions**

- Change one environment variable to switch phases
- No component rewrites needed
- Gradual feature additions

### ✅ **Development Friendly**

- Mock data for fast local development
- Type safety prevents runtime errors
- Clear separation of concerns

### ✅ **Production Ready**

- Service abstraction supports scaling
- Configuration-based deployments
- Industry-standard patterns

### ✅ **Future Proof**

- Easy to add new features per phase
- Extensible service interfaces
- Clean migration paths

## Testing Strategy

### Phase 1 Testing

```bash
# Local development
npm run dev

# Build verification
npm run build
npm start
```

### Phase 2 Testing

```bash
# Test with local backend
NEXT_PUBLIC_DEPLOYMENT_PHASE=phase2 npm run dev

# Test API integration
curl https://your-backend.onrender.com/api/projects
```

### Phase 3 Testing

```bash
# Test with AWS services
NEXT_PUBLIC_DEPLOYMENT_PHASE=phase3 npm run dev
```

## Deployment Commands

### Phase 1: GitHub Pages

```bash
npm run build
npm run export  # If using static export
# Push to GitHub - Pages deploys automatically
```

### Phase 2: Render

```bash
# Frontend (Render)
npm run build

# Backend (Render)
cd backend && dotnet publish -c Release
```

### Phase 3: AWS

```bash
# Using AWS CDK/CloudFormation
npm run build
aws s3 sync out/ s3://your-bucket --delete
aws cloudfront create-invalidation --distribution-id ABCD --paths "/*"
```

## Troubleshooting

### Common Issues

1. **Images not loading**: Check `src/lib/config.ts` image paths
2. **API calls failing**: Verify `NEXT_PUBLIC_DEPLOYMENT_PHASE` setting
3. **Types mismatch**: Ensure all phases use same `src/types/project.ts`

### Debug Mode

```typescript
// Add to any component
import { getCurrentPhaseConfig } from "../lib/config";

console.log("Current Phase:", getCurrentPhaseConfig());
```

---

## Next Steps

1. **Complete Phase 1**: Add all your project images and deploy to GitHub Pages
2. **Prepare Phase 2**: Design your ASP.NET API endpoints to match the service interface
3. **Plan Phase 3**: Research AWS services and plan your cloud architecture

The beauty of this architecture is that **your frontend code never changes** - only configuration and backend services evolve! 🚀
