from django.utils import timezone
from django.db import models
from django.db.models.query import QuerySet
import uuid

from apps.category.models import Category

# Create your models here.
def blog_directory_path(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

class Post(models.Model):
    class PostObjects(models.Manager):
        def get_queryset(self):
            #lista los blog publicados
            return super().get_queryset().filter(status= 'published')
    
    options = (
        ('draft', 'Draft'),
        ('published', 'Published')
    )
    
    #le pasamos el modelo/campos que quiero

    #Identificadores universalmente únicos
    blog_uuid =   models.UUIDField(default=uuid.uuid4, unique=True)
    title =       models.CharField(max_length=255)
    slug =        models.SlugField(unique=True)
    thumbnail =   models.ImageField(upload_to=blog_directory_path)
    video =       models.FileField(upload_to=blog_directory_path, blank=True, null=True)
    description = models.TextField()
    excerpt =     models.CharField(max_length=100)

    #author =      models.CharField(max_length=255)
    category =    models.ForeignKey(Category, on_delete=models.PROTECT)

    published =   models.DateTimeField(default=timezone.now)

    status =      models.CharField(max_length=10, choices=options, default='draft')

    objects =     models.Manager()
    postobjects = PostObjects()

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title
    
    def get_video(self):
        if self.video:
            return self.video.url
        return ''

    def get_thumbnail(self):
        if self.thumbnail:
            return self.thumbnail.url
        return ''