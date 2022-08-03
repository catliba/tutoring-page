from django.urls import path

from . import views
urlpatterns=[
    path('',views.index, name="home"),
    path('login/', views.loginPage),
    path('add_course/', views.addCourse, name="add_course"),
    path('remove_course/<str:pk>/', views.removeCourse, name="remove_course"),
]