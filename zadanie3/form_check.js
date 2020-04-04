
function validate(formularz) {
  checkAndFocus(formularz.elements["f_imie"],"imie!",isWhiteSpaceOrEmpty);
  checkAndFocus(formularz.elements["f_nazwisko"].value,"nazwisko!", isWhiteSpaceOrEmpty);
  checkAndFocus(formularz.elements["f_kod"].value, "kod!", isWhiteSpaceOrEmpty);
  checkAndFocus(formularz.elements["f_ulica"].value,"ulica!", isWhiteSpaceOrEmpty);
  checkAndFocus(formularz.elements["f_miasto"].value,"miasto!",isWhiteSpaceOrEmpty);
  checkAndFocus(formularz.elements["f_email"].value,"mejl!",isEmailInvalid);
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
    alert("Podaj "+comment+"!");
    return false;
  }
  else
  {
    document.getElementById(errorFieldName).innerHTML = "";
    return true;
  }
}


function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1) {
            e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}

function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
    return e;
}
function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}
function swapRows(b) {
    let tab = prevNode(b.previousSibling);
    let tBody = nextNode(tab.firstChild);
    let lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize) form.value = form.value.substring(0, maxSize);
    else msg.innerHTML = maxSize - form.value.length;
}

submitButton = document.querySelectorAll("input[type=submit]")[0];

submitButton.addEventListener('click', function(event) {
    if (!validate(this.form)) event.preventDefault(); // A to na szczęście tak
});

womanButton = document.querySelectorAll("input[value=f_k]")[0];
manButton = document.querySelectorAll("input[value=f_m]")[0];
womanButton.onclick = function() {
    showElement("NazwiskoPanienskie");
};
manButton.onclick = function() {
    hideElement("NazwiskoPanienskie");
};

alterRows(1, document.getElementsByTagName("tr")[0]);
