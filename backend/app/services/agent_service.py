from sqlalchemy.orm import Session
from typing import List, Optional
from app.models.agent import Agent
from app.schemas.agent import AgentCreate, AgentUpdate

class AgentService:
    @staticmethod
    def get_agent(db: Session, agent_id: int) -> Optional[Agent]:
        return db.query(Agent).filter(Agent.id == agent_id).first()

    @staticmethod
    def get_agents(db: Session, skip: int = 0, limit: int = 100) -> List[Agent]:
        return db.query(Agent).offset(skip).limit(limit).all()

    @staticmethod
    def create_agent(db: Session, agent: AgentCreate) -> Agent:
        db_agent = Agent(**agent.model_dump())
        db.add(db_agent)
        db.commit()
        db.refresh(db_agent)
        return db_agent

    @staticmethod
    def update_agent(db: Session, agent_id: int, agent_update: AgentUpdate) -> Optional[Agent]:
        db_agent = db.query(Agent).filter(Agent.id == agent_id).first()
        if db_agent:
            update_data = agent_update.model_dump(exclude_unset=True)
            for key, value in update_data.items():
                setattr(db_agent, key, value)
            db.commit()
            db.refresh(db_agent)
        return db_agent

    @staticmethod
    def delete_agent(db: Session, agent_id: int) -> bool:
        db_agent = db.query(Agent).filter(Agent.id == agent_id).first()
        if db_agent:
            db.delete(db_agent)
            db.commit()
            return True
        return False