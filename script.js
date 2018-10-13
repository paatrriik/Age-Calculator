function valueCheck() {
    if (document.getElementById('age').value == null) {
        document.getElementById('age').innerHTML = "--";
    }
}

function getDate() {
    var d = new Date();
    var n = d.getFullYear();
    return n;
}

function getBirthYear() {
    if (document.getElementById('ageInput').value == null) {
        document.getElementById('age').innerHTML = "--";
    }
    else {
        document.getElementById('age').innerHTML = getDate() - document.getElementById('ageInput').value;
    }
}