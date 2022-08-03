from django.shortcuts import render, redirect
from .models import *
from .forms import *
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.models import Group
from rest_framework import viewsets
from .serializers import StudentSerializer
from .models import Student

# Create your views here.

from django.http import HttpResponse
 
def index(request):

    curr = request.user.student.current_courses.all()
    past = request.user.student.past_courses.all()
    tut = request.user.student.tutoring_courses.all()

    context = {'curr': curr, 'past': past, 'tut': tut}

    return render(request, 'student/index.html', context)

def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'username or password is incorrect')

    return render(request, 'student/login.html')

def addCourse(request):
    form = CourseForm()
    if request.method == 'POST': 
        form = CourseForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')

    context = {'form': form}

    return render(request, 'student/add_course.html', context)

def removeCourse(request, pk):

    request.user.student.current_courses.remove(Course.objects.get(id=pk))
    return redirect('/')

def updateCourse(request):
    return

class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()