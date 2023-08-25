from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from .views import CustomUserViewSet, EmployeeViewSet

router = DefaultRouter()
router.register(r'users', CustomUserViewSet)

router.register(r'employees', EmployeeViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/token/', obtain_auth_token, name='obtain-token'),
]
