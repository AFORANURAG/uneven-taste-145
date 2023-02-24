function ValidateEmail(email) 
{
 
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true
  }else{
    
return false
  }
}
// must be of 8 length,one uppercase,one lowercase,one special character and one numeric
//digit
function CheckPassword(password) 
{ 

  var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  console.log(decimal)
if(password.match(decimal)) 
{ 
return true

}
else
{ 
return false
}
}
export {ValidateEmail,CheckPassword}