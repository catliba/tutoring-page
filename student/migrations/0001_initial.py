# Generated by Django 4.0.6 on 2022-07-27 10:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_dept', models.CharField(choices=[('CSE', 'CSE'), ('MATH', 'MATH'), ('COGS', 'COGS'), ('POLI', 'POLI'), ('CHEM', 'CHEM')], max_length=10)),
                ('course_num', models.CharField(max_length=200, null=True)),
                ('prof', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(max_length=200, null=True)),
                ('lname', models.CharField(max_length=200, null=True)),
                ('phone', models.CharField(max_length=200, null=True)),
                ('email', models.CharField(max_length=200, null=True)),
                ('current_courses', models.ManyToManyField(related_name='current_courses_set', to='student.course')),
                ('past_courses', models.ManyToManyField(related_name='past_courses_set', to='student.course')),
                ('student_user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('tutoring_courses', models.ManyToManyField(related_name='tutoring_courses_set', to='student.course')),
            ],
        ),
    ]