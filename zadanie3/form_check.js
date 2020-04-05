function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
}

function isNotAnEmail(str){
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    return !email.test(str);
}

function validate(formularz){
    return  checkAnythingAndFocus(formularz.elements["f_imie"], "Podaj imię!",isWhiteSpaceOrEmpty)
    &&      checkAnythingAndFocus(formularz.elements["f_nazwisko"], "Podaj nazwisko!",isWhiteSpaceOrEmpty)
    &&      checkAnythingAndFocus(formularz.elements["f_kod"], "Podaj kod!",isWhiteSpaceOrEmpty)
    &&      checkAnythingAndFocus(formularz.elements["f_ulica"], "Podaj ulica!",isWhiteSpaceOrEmpty)
    &&      checkAnythingAndFocus(formularz.elements["f_miasto"], "Podaj miasto!",isWhiteSpaceOrEmpty)
    &&      checkAnythingAndFocus (formularz.elements["f_email"], "Podaj właściwy e-mail", isNotAnEmail);
}


function checkAnythingAndFocus(obj, msg, predicate)
{
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    let errorField = document.getElementById(errorFieldName);
    if (predicate(str)) {
        errorField.innerHTML = msg;
        errorField.style.display = "block";
        obj.focus();
        return false;
    }
    else {
        errorField.innerHTML = "";
        errorField.style.display = "none";
        return true;
    }
}

function showElem(name){
    document.getElementById(name).style.visibility="visible";
}


function hideElem(name){
    document.getElementById(name).style.visibility="hidden";
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
    if (form.value.length > maxSize)
    form.value = form.value.substring(0, maxSize);
    else
    msg.innerHTML = maxSize - form.value.length;
}
