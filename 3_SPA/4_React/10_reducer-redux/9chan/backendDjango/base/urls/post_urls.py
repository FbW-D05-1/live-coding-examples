from django.urls import path
from base.views import post_views as views


urlpatterns = [ 
    path('', views.getPosts, name="posts"),
    path('create/', views.createPost, name="post-create"),
    path('upload/', views.uploadImage, name="image-upload"),

    path('<str:pk>/reviews/', views.createPostComment, name="create-review"),

    path('<str:pk>/', views.getPost, name="post"),

    path('update/<str:pk>/', views.updatePost, name="post-update"),

]
