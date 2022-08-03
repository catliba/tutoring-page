from django import forms
from django.forms import ModelForm
from .models import Course, Student
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class CourseForm(forms.Form):
    course = forms.CharField(required=True)