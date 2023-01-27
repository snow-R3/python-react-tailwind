from sqlalchemy.future import select

from app.model.users import Users
from app.model.person import Person

from app.config import db

class UserService:
    
    @staticmethod
    async def get_user_profile(username: str):
        query = select(
            Users.username, 
            Users.email,
            Person.name,
            Person.birth,
            Person.gender,
            Person.profile,
            Person.phone_number
        ).join_from(Users,Person).where(Users.username == username)

        return (await db.execute(query)).mappings().one()
