function valueCheck() {
    if (document.getElementById('age').value == null) {
        document.getElementById('age').innerHTML = "--";
    }

    var ageInput = document.getElementById('ageInput');
    ageInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            document.getElementById('submitButton').onclick();
        }
    });
}

function getCurrentYear() {
    var d = new Date();
    var n = d.getFullYear();
    return n;
}

function getBirthYear() {
    var ageInput = document.getElementById('ageInput');
    var correctAge = document.getElementById('correctAge');
    var incorrectAge = document.getElementById('incorrectAge');
    if (ageInput.value == null || ageInput.value.length == 0) {
        document.getElementById('age').innerHTML = "--";
        correctAge.setAttribute("style", "display:inline-block");
        incorrectAge.setAttribute("style", "display:none");
    }
    else if (ageInput.value > getCurrentYear()) {
        correctAge.setAttribute("style", "display:none");
        incorrectAge.setAttribute("style", "display:inline-block");
        document.getElementById('incorrectAgeExplanation').innerHTML = "You haven't been born yet.";
    }
    else if (ageInput.value < 1903) {
        correctAge.setAttribute("style", "display:inline-block");
        incorrectAge.setAttribute("style", "display:inline-block");
        document.getElementById('age').innerHTML = getCurrentYear() - ageInput.value;
        document.getElementById('incorrectAgeExplanation').innerHTML = "Congratulations, you are the oldest living person!";
    }
    else {
        document.getElementById('age').innerHTML = getCurrentYear() - ageInput.value;
        correctAge.setAttribute("style", "display:inline-block");
        incorrectAge.setAttribute("style", "display:none");
    }
}
