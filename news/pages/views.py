from django.views.generic import TemplateView, CreateView, DeleteView


class HomePageView(TemplateView):
    template_name = 'home.html'

