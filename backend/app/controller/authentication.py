from fastapi import APIRouter

from app.service.schema import ResponseSchema, RegisterSchema, LoginSchema, ForgotPasswordSchema
from app.service.auth_service import AuthService

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/register", response_model= ResponseSchema, response_model_exclude_none=True)
async def register(request_body: RegisterSchema):
    await AuthService.register_service(request_body)
    return ResponseSchema(detail="Successfully data saved.")
    
@router.post("/login", response_model=ResponseSchema)
async def login(request_body: LoginSchema):
    token = await AuthService.login_service(request_body)
    return ResponseSchema(detail="Successfully Login.", result={"token_type": "Bearer", "access_token":token})
    
@router.post("/forgot-password", response_model=ResponseSchema, response_model_exclude_none=True)
async def login(request_body: ForgotPasswordSchema):
    await AuthService.forgot_password_service(request_body)
    return ResponseSchema(detail="Successfully updated password.")