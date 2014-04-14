function check()
{
    var full_name = document.getElementById('full_name').value;
    var email = document.getElementById('email').value;
    var text = document.getElementById('text').value;

    
    var frm_code = document.getElementById('frm_code').value;
    if(full_name=="" && email=="" && text=="")
    {
        alert("Fill Your form");
                return false;
    }

    if(full_name=="")
    {
        alert("Enter Your Full Name");
                return false;
    }
    
    if(email=="")
    {
        alert("Enter Your Email ID");
                return false;
    }

   
}

    //nested done next time bitch!