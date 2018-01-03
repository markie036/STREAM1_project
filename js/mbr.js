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
function validate(){
    onclick
}

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