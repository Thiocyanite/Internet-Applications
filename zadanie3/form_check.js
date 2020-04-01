
function validate(formularz) {
  checkAndFocus(formularz.elements["f_imie"],"imie!",isWhiteSpaceOrEmpty);
  checkString(formularz.elements["f_nazwisko"].value,"nazwisko!", isWhiteSpaceOrEmpty);
  checkString(formularz.elements["f_kod"].value, "kod!", isWhiteSpaceOrEmpty);
  checkString(formularz.elements["f_ulica"].value,"ulica!", isWhiteSpaceOrEmpty);
  checkString(formularz.elements["f_miasto"].value,"miasto!",isWhiteSpaceOrEmpty);
  checkEmail(formularz.elements["f_email"].value,"mejl!",isEmailInvalid);
}

function showElement(what) {
      document.getElementById(what).style.visibility = 'visible';
}

function hideElement(what) {
      document.getElementById(what).style.visibility = 'visible';
}

function checkString(what, comment){
  if (isEmpty(what) || isWhiteSpaceOrEmpty(what))
    {
      alert("Podaj "+comment+"!");
      return false;
    }
  return true;
}
function isEmpty(what) {
  if (what.lenght==0)
    return true;
  return false;
}

function isWhiteSpaceOrEmpty(str){
  return /^[\s\t\r\n]*$/.test(str);
}

function checkEmail(str){
  let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
  if(email.test(str))
    return true;
  else
  {
    return false;
  }
}


function isEmailInvalid(str){
  let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
  if(email.test(str))
    return false;
  else
  {
    return true;
  }
}

function checkAndFocus(obj, msg, fun) {
  let str = obj.value;
  let errorFieldName = "e_"+ obj.name.substr(2, obj.name.length);
  if (fun(obj))
  {
    document.getElementById(errorFieldName).innerHTML = msg;
    obj.focus();
    return false;
  }
  else{
    document.getElementById(errorFieldName).innerHTML = "";
    return true;
  }
}

function checkStringAndFocus(obj, msg){
  let str = obj.value;
  let errorFieldName = "e_"+ obj.name.substr(2, obj.name.length);
  if(isWhiteSpaceOrEmpty(str))
  {
    document.getElementById(errorFieldName).innerHTML = msg;
    obj.focus();
    return false;
  }
  else
  {
    document.getElementById(errorFieldName).innerHTML = "";
    return true;
  }
}

function checkEmailAndFocus(obj, msg){
  let str = obj.value;
  let errorFieldName = "e_"+ obj.name.substr(2, obj.name.length);
  if(checkEmail(str))
  {
    document.getElementById(errorFieldName).innerHTML = msg;
    obj.focus();
    return false;
  }
  else
  {
    document.getElementById(errorFieldName).innerHTML = "";
    return true;
  }
}
