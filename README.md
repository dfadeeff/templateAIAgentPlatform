# 🚀 AI Platform - Enterprise Integration Hub

> A easy to reproduce AI platform for seamless enterprise system integration with advanced SAP connectivity, real-time analytics, and intelligent automation.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.11-yellow?style=flat-square&logo=python)](https://www.python.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat-square&logo=docker)](https://www.docker.com/)
[![SAP](https://img.shields.io/badge/SAP-Certified-0FAAFF?style=flat-square&logo=sap)](https://www.sap.com/)

## ✨ Features

### 🏢 **Enterprise-Grade SAP Integration**
- **SAP ERP** - Full ERP system connectivity with FI, CO, SD, MM modules
- **SAP SuccessFactors** - HR and employee data synchronization
- **Real-time sync** - Configurable intervals with OAuth2 authentication
- **Enterprise ready** - Production-grade security and monitoring

### 🎯 **Multi-Platform Connectivity**
- **Salesforce CRM** - Customer data and sales automation
- **Slack Integration** - AI-powered communication workflows
- **AWS Cloud Monitoring** - Infrastructure insights and auto-scaling
- **Database Analytics** - Performance optimization recommendations

### 📊 **Advanced Analytics Dashboard**
- **Real-time metrics** - Live performance monitoring
- **Data flow visualization** - Track integration health
- **Success rate tracking** - Per-agent performance analytics
- **Activity logging** - Comprehensive audit trails

### 🎨 **Modern Dark UI**
- **Professional design** - Production-grade interface
- **Responsive layout** - Desktop and mobile optimized
- **Dark theme** - Reduced eye strain for extended use
- **Intuitive navigation** - Streamlined user experience

## 🏗️ Architecture

```mermaid
graph TB
    A[Next.js Frontend] --> B[FastAPI Backend]
    B --> C[SQLite Database]
    B --> D[SAP ERP System]
    B --> E[SAP SuccessFactors]
    B --> F[Salesforce API]
    B --> G[Slack API]
    B --> H[AWS Services]
    
    subgraph "Frontend Stack"
        A --> A1[React 18]
        A --> A2[Tailwind CSS]
        A --> A3[TypeScript]
        A --> A4[TanStack Query]
    end
    
    subgraph "Backend Stack"
        B --> B1[SQLAlchemy ORM]
        B --> B2[Pydantic Schemas]
        B --> B3[OAuth2 Security]
        B --> B4[RESTful APIs]
    end
```

## 📁 Project Structure

```
aiplatform/
├── 📱 frontend/                 # Next.js 14 App Router
│   ├── app/
│   │   ├── dashboard/          # Main dashboard pages
│   │   │   ├── agents/         # Agent management
│   │   │   ├── analytics/      # Performance metrics
│   │   │   └── settings/       # Configuration
│   │   └── layout.tsx          # Root layout
│   ├── components/
│   │   ├── dashboard/          # Dashboard components
│   │   ├── ui/                 # Reusable UI components
│   │   └── providers/          # React providers
│   ├── lib/                    # Utilities and API
│   └── types/                  # TypeScript definitions
├── 🔧 backend/                 # FastAPI Backend
│   ├── app/
│   │   ├── api/endpoints/      # REST API routes
│   │   ├── core/               # Configuration
│   │   ├── models/             # Database models
│   │   ├── schemas/            # Pydantic schemas
│   │   └── services/           # Business logic
│   ├── main.py                 # FastAPI entry point
│   └── requirements.txt        # Python dependencies
├── 🐳 docker-compose.yml       # Development environment
└── 📚 docs/                    # Documentation
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and npm
- **Python** 3.11+
- **Docker** (optional)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ai-platform.git
cd ai-platform
```

### 2. Environment Setup
```bash
# Frontend environment
cp frontend/.env.example frontend/.env.local

# Backend environment  
cp backend/.env.example backend/.env
```

### 3. Start with Docker (Recommended)
```bash
# Start all services
docker-compose up -d

# Access the platform
# Frontend: http://localhost:3000
# Backend API: http://localhost:8001
# API Documentation: http://localhost:8001/docs
```

### 4. Manual Development Setup

#### Frontend
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

#### Backend
```bash
cd backend
pip install -r requirements.txt
python init_db.py  # Initialize database
uvicorn main:app --reload --port 8001
# Runs on http://localhost:8001
```

## 🔧 Configuration

### SAP Integration Setup
```python
# backend/.env
SAP_SERVER=sap.company.com
SAP_CLIENT=100
SAP_USERNAME=your_username
SAP_PASSWORD=your_password
```

### Database Configuration
```python
# For development (SQLite)
DATABASE_URL=sqlite:///./aiplatform.db

# For production (PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost:5432/aiplatform
```

## 📊 API Documentation

### Agent Management
```http
GET    /api/v1/agents/          # List all agents
POST   /api/v1/agents/          # Create new agent
GET    /api/v1/agents/{id}      # Get agent details
PUT    /api/v1/agents/{id}      # Update agent
DELETE /api/v1/agents/{id}      # Delete agent
```

### Example Response
```json
{
  "id": 1,
  "name": "SAP ERP Integration",
  "description": "Enterprise ERP system integration",
  "status": "active",
  "agent_type": "sap_erp",
  "config": {
    "sap_server": "sap.company.com",
    "modules": ["FI", "CO", "SD", "MM"],
    "sync_interval": 300
  },
  "created_at": "2025-07-20T13:08:53",
  "is_active": true
}
```

## 🎨 UI Components

### Dashboard Features
- **📈 Metrics Cards** - Real-time KPI monitoring
- **🔧 Agent Management** - Start/stop/configure integrations
- **📊 Analytics** - Performance insights and trends
- **⚙️ Settings** - Platform and security configuration

### Design System
- **Dark Theme** - Professional enterprise appearance
- **Responsive** - Mobile and desktop optimized
- **Accessible** - WCAG compliant interface
- **Modern** - Latest UI/UX best practices

## 🔒 Security

### Authentication & Authorization
- **OAuth2** implementation with JWT tokens
- **API key** rotation every 90 days
- **Role-based** access control

### Data Protection
- **AES-256** encryption at rest
- **TLS 1.3** for data in transit
- **GDPR** compliant data handling

## 🚀 Deployment

### Production Environment
```bash
# Build for production
docker-compose -f docker-compose.prod.yml up -d

# Or deploy individually
npm run build && npm start  # Frontend
gunicorn main:app --workers 4  # Backend
```

### Environment Variables
```bash
# Production settings
NODE_ENV=production
DATABASE_URL=postgresql://...
SECRET_KEY=your-production-secret
SAP_SERVER=production-sap-server
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

