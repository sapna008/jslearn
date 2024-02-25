from django.urls import path
from ecommerceapp import views


urlpatterns = [
    # path('admin/', admin.site.urls),
    path('',views.index,name="index"),
    path('blog',views.blog,name="blog"),
    path('about',views.blog,name="blog"),
]