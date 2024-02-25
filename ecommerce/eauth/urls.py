from django.urls import path
from eauth import views


urlpatterns = [
    # path('admin/', admin.site.urls),
    path('signup/',views.signup,name="signup"),
    path('login/',views.login,name="login"),
    path('logout/',views.logout,name="logout"),
]