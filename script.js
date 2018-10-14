function valueCheck() {
    if (document.getElementById('age').value == null) {
        document.getElementById('age').innerHTML = "--";
    }
}

function getCurrentYear() {
    var d = new Date();
    var n = d.getFullYear();
    return n;
}

function getBirthYear() {
    var ageInput = document.getElementById('ageInput');
    var correctAge = document.getElementById('correctAge');
    var notBornYet = document.getElementById('notBornYet');
    if (ageInput.value == null || ageInput.value.length == 0) {
        document.getElementById('age').innerHTML = "--";
        correctAge.setAttribute("style", "display:block");
        notBornYet.setAttribute("style", "display:none");
    }
    else if (ageInput.value >= getCurrentYear()) {
        correctAge.setAttribute("style", "display:none");
        notBornYet.setAttribute("style", "display:block");
    }
    else {
        document.getElementById('age').innerHTML = getCurrentYear() - ageInput.value;
        correctAge.setAttribute("style", "display:block");
        notBornYet.setAttribute("style", "display:none");
    }
}