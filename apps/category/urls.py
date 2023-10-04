from django.urls import path

from .views import *

urlpatterns = [
    path('categories', ListCategoriesAPIView.as_view()),
]