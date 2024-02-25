from django.shortcuts import redirect, render
from django.contrib.auth.models import User
# Create your views here.
def signup(request):
    if request.method=="POST":
        email=request.POST['email']
        password=request.POST['pass1']
        confirm_password=request.POST['pass2']
        if password!=confirm_password:
            # messages.warning(request,"Password is Not Matching")
            return render(request,'signup.html')                   
        try:
            if User.objects.get(username=email):
                # return HttpResponse("email already exist")
                # messages.info(request,"Email is Taken")
                return render(request,'signup.html')
        except Exception as identifier:
            pass
        user = User.objects.create_user(email,email,password)
        user.is_active=False
        user.save()
        email_subject="Activate Your Account"
        # message=render_to_string('activate.html',{
        #     'user':user,
        #     'domain':'127.0.0.1:8000',
        #     'uid':urlsafe_base64_encode(force_bytes(user.pk)),
        #     'token':generate_token.make_token(user)

        # })

        # email_message = EmailMessage(email_subject,message,settings.EMAIL_HOST_USER,[email])
        # email_message.send()
        # messages.success(request,f"Activate Your Account by clicking the link in your gmail {message}")
        return redirect('/auth/login/')
    return render(request,"signup.html")
    
def login(request):
    print('loginnnnnnnnn')
    return render(request,"login.html")
def logout():
    pass