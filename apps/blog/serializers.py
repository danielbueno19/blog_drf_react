from rest_framework import serializers
from .models import Post
from apps.category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    thumbnail = serializers.CharField(source= 'get_thumbnail')
    video = serializers.CharField(source='get_video')
    category = CategorySerializer()

    class Meta:
        model = Post
        exclude = ('objects', 'postobjects','author',) 