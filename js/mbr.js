//nav scroll to section
function scrollto(id) {
    $('html, body').animate(
        {
            scrollTop: $("#"+id).offset().top
    },
    'slow');
};

//scroll to top functionality

function backTop(headerPic) { //scroll up to div headerPic slowly
    $('html, body').animate(
        {
            scrollTop:0
        },
        'slow');
};

//Form validation on submit
/*function formCheck(){
    var val = document.forms["Form"]["firstName"], "secondName", "addone", "addtwo", "town", "pcode", "email"].value;
    if (val ==""){
        alert("Please fill in your first name");
        return false;
    }
}*/

function formCheck() {
    var val = document.getElementById("fillMeIn").value;
    var val = document.getElementById("fillMeIn2").value;
    var val = document.getElementById("fillMeIn3").value;
    var val = document.getElementById("fillMeIn4").value;
    var val = document.getElementById("fillMeIn5").value;
    var val = document.getElementById("fillMeIn6").value;
    var val = document.getElementById("fillMeIn7").value;
    if (val == "") {
        alert("Please fill in the missing fields");
        document.getElementById("fillMeIn").style.borderColor = "red";
        document.getElementById("fillMeIn2").style.borderColor = "red";
        document.getElementById("fillMeIn3").style.borderColor = "red";
        document.getElementById("fillMeIn4").style.borderColor = "red";
        document.getElementById("fillMeIn5").style.borderColor = "red";
        document.getElementById("fillMeIn6").style.borderColor = "red";
        document.getElementById("fillMeIn7").style.borderColor = "red";
        return false;
    }
    else {
        document.getElementById("fillMeIn").style.borderColor = "green";
        document.getElementById("fillMeIn2").style.borderColor = "green";
        document.getElementById("fillMeIn3").style.borderColor = "green";
        document.getElementById("fillMeIn4").style.borderColor = "green";
        document.getElementById("fillMeIn5").style.borderColor = "green";
        document.getElementById("fillMeIn6").style.borderColor = "green";
        document.getElementById("fillMeIn7").style.borderColor = "green";
    }
}

/*
var form = document.forms["mbrForm"]
var val = ["fillMeIn", "fillMeIn2", "fillMeIn3", "fillMeIn4", "fillMeIn5", "fillMeIn6", "fillMeIn7"];

function formCheck() {
    if(form['fillMeIn].value{
        alert("Please fill this field in");
        elem.fillMeIn.focus();
        error.className = "error";
        return false;
    }
    else {
        error.className = "noerror";
        return true;
    }
}
form.onsubmit = formCheck;*/

//show trails by country tests
/*function showCountryEng() {
    var eng = document.getElementById("ENG");
    if (eng.style.display === 'none') { //if it's not visible, 
        eng.style.display = 'block'; //then make it visible
    } else {
        eng.style.display = 'none'; //else don't display it
    }
}
function showCountrySco() {
    var sco = document.getElementById("SCO");
    if (sco.style.display === 'none') { 
        sco.style.display = 'block';
    } else {
        sco.style.display = 'none'; 
    }
}
function showCountryWal() {
    var wal = document.getElementById("WAL");
    if (wal.style.display === 'none') {
        wal.style.display = 'block';
    } else {
        wal.style.display = 'none';
    }
}*/

//show trails by country - working code
function showCountryEng() {
    var eng = document.getElementById("ENG");
    var sco = document.getElementById("SCO");
    var wal = document.getElementById("WAL");
    // If England trails are not visible
    if (eng.style.display == 'none') {
        // Make England trails visible
        eng.style.display = 'block';
        // Make Scotland and Wales invisible
        sco.style.display = 'none';
        wal.style.display = 'none';
        // If England is visible
    } else if (eng.style.display = 'block') {
        // Keep it that way and hide the others
        sco.style.display = 'none';
        wal.style.display = 'none';
    }
}
function showCountrySco() {
    var eng = document.getElementById("ENG");
    var sco = document.getElementById("SCO");
    var wal = document.getElementById("WAL");
    // If Scotland trails are not visible
    if (sco.style.display == 'none') {
        // Make Scotland trails visible
        sco.style.display = 'block';
        // Make Wales and England invisible
        wal.style.display = 'none';
        eng.style.display = 'none';
        // If Scotland is visible
    } else if (sco.style.display = 'block') {
        // Keep it that way and hide the others
        wal.style.display = 'none';
        eng.style.display = 'none';
    }
}
function showCountryWal() {
    var eng = document.getElementById("ENG");
    var sco = document.getElementById("SCO");
    var wal = document.getElementById("WAL");
    // If Wales trails are not visible
    if (wal.style.display == 'none') {
        // Make Wales trails visible
        wal.style.display = 'block';
        // Make Scotland and England invisible
        sco.style.display = 'none';
        eng.style.display = 'none';
        // If Wales is visible
    } else if (wal.style.display = 'block') {
        // Keep it that way and hide the others
        sco.style.display = 'none';
        eng.style.display = 'none';
    }
}
function showAll() {
    var eng = document.getElementById("ENG");
    var sco = document.getElementById("SCO");
    var wal = document.getElementById("WAL");
    eng.style.display = "block";
    sco.style.display = "block";
    wal.style.display = "block";
}