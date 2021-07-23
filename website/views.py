from django.shortcuts import render, redirect

from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages

def home(request):
	if request.method == 'POST':
		name = request.POST.get('Name')
		email = request.POST.get('Email')
		message = request.POST.get('Message')
		send_mail(f'contact form {name}', f'Name: {name}\nEmail: {email}\nMessage: {message}', settings.EMAIL_HOST_USER, ['gunagang24@gmail.com'], fail_silently=False)
		messages.success(request, "your message has been sent successfully")
		return redirect('/#contact')
	return render(request, 'index.html' )