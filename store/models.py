from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=225)
    desc = models.TextField()
    price = models.DecimalField(max_digits= 10, decimal_places=2)
    inventory = models.IntegerField(default=100)
    quantity_sold = models.IntegerField(default=0)
    image = models.ImageField(upload_to='products/')
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)