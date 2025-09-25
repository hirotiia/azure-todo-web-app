from django.urls import path
from users.views import RegisterView

urlpatterns = [
    path("api/auth/register/", RegisterView.as_view()),
    # path("api/auth/login/", TokenObtainPairView.as_view()),
    # path("api/auth/refresh/", TokenRefreshView.as_view()),
]
