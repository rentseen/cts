# coding=utf-8

from django.http import HttpResponse
from django.shortcuts import render
import json

def index(request):
	#return HttpResponse("Hello world ! ")
	return render(request, 'index.html')

def test(request):
	request.encoding = 'utf-8'
	if 'reward' in request.GET:
		return HttpResponse("test")
	else:
		return HttpResponse("failed")
