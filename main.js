function checkName(){
    var name = document.getElementById("input1").value
    var pattern = /^[a-zA-Z]{1,50}$/;
    if(pattern.test(name))
    {
        document.getElementById("nameerror").innerHTML = "Valid!";
        document.getElementById("nameerror").style.color = "green";
    }
    else
    {
        document.getElementById("nameerror").innerHTML = "Invalid!!";
        document.getElementById("nameerror").style.color = "red";
    }
}

function checkEmail(){
    var email = document.getElementById("input2").value
    var pattern = /^[a-zA-Z0-9\.\_\-]+\@+[a-zA-Z]+\.+[a-z]{2}\.+[a-z]{2}$/;
    if(pattern.test(email))
    {
        document.getElementById("emailerror").innerHTML = "Valid!";
        document.getElementById("emailerror").style.color = "green";
    }
    else
    {
        document.getElementById("emailerror").innerHTML = "Invalid!!";
        document.getElementById("emailerror").style.color = "red";
    }
}

function checkPhone(){
    var phone = document.getElementById("input3").value
    var pattern = /^\(?(\d{5})\)?[-]?(\d{6})$/;
    if(pattern.test(phone))
    {
        document.getElementById("phoneerror").innerHTML = "Valid!";
        document.getElementById("phoneerror").style.color = "green";
    }
    else
    {
        document.getElementById("phoneerror").innerHTML = "Invalid!!";
        document.getElementById("phoneerror").style.color = "red";
    }
}

function checkText(){
    var text = document.getElementById("input4").value
    var pattern = /^(?=.*[A-Z]{2})(?=.*[a-z]{2})(?=.*[0-9]{2}).{6,6}$/;
    if(pattern.test(text))
    {
        document.getElementById("texterror").innerHTML = "Valid!";
        document.getElementById("texterror").style.color = "green";
    }
    else
    {
        document.getElementById("texterror").innerHTML = "Invalid!!";
        document.getElementById("texterror").style.color = "red";
    }
}