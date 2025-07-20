#!/usr/bin/env python3

import asyncio
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.config import settings
from app.core.database import Base
from app.models.agent import Agent

# Create engine for database initialization
engine = create_engine("sqlite:///./aiplatform.db")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def init_database():
    """Initialize database with tables and sample data"""
    print("Creating database tables...")
    Base.metadata.create_all(bind=engine)
    
    print("Adding sample agents...")
    db = SessionLocal()
    
    try:
        # Check if agents already exist
        existing_agents = db.query(Agent).count()
        if existing_agents > 0:
            print(f"Database already has {existing_agents} agents. Skipping initialization.")
            return
        
        # Sample agents including SAP integration
        sample_agents = [
            Agent(
                name="SAP ERP Integration",
                description="Connects to SAP ERP system for real-time data synchronization and business process automation",
                status="active",
                agent_type="sap_erp",
                config={
                    "sap_server": "sap.company.com",
                    "sap_client": "100",
                    "modules": ["FI", "CO", "SD", "MM"],
                    "sync_interval": 300,
                    "authentication": "oauth2"
                }
            ),
            Agent(
                name="Salesforce CRM Agent",
                description="Integrates with Salesforce for customer data management and sales automation",
                status="active", 
                agent_type="salesforce",
                config={
                    "instance_url": "https://company.salesforce.com",
                    "api_version": "v58.0",
                    "objects": ["Account", "Contact", "Opportunity", "Lead"],
                    "sync_interval": 600
                }
            ),
            Agent(
                name="Slack Communication Bot",
                description="AI-powered Slack bot for team communication and workflow automation",
                status="active",
                agent_type="slack",
                config={
                    "workspace": "company-workspace",
                    "channels": ["#general", "#ai-platform", "#alerts"],
                    "features": ["nlp", "task_automation", "reporting"]
                }
            ),
            Agent(
                name="AWS Cloud Monitor",
                description="Monitors AWS infrastructure and provides automated scaling recommendations",
                status="inactive",
                agent_type="aws_monitor",
                config={
                    "regions": ["us-east-1", "eu-west-1"],
                    "services": ["EC2", "RDS", "Lambda", "S3"],
                    "alert_threshold": 80
                }
            ),
            Agent(
                name="SAP SuccessFactors HR",
                description="Integrates with SAP SuccessFactors for employee data and HR process automation",
                status="active",
                agent_type="sap_successfactors",
                config={
                    "datacenter": "eu1",
                    "company_id": "COMP001",
                    "modules": ["Employee Central", "Performance & Goals", "Learning"],
                    "sync_schedule": "daily"
                }
            ),
            Agent(
                name="Database Analytics Agent",
                description="Analyzes database performance and suggests optimizations",
                status="error",
                agent_type="database_analytics",
                config={
                    "databases": ["postgresql", "mysql"],
                    "metrics": ["query_performance", "index_usage", "table_size"],
                    "report_frequency": "weekly"
                }
            )
        ]
        
        for agent in sample_agents:
            db.add(agent)
        
        db.commit()
        print(f"Successfully added {len(sample_agents)} sample agents!")
        
    except Exception as e:
        print(f"Error initializing database: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    init_database()