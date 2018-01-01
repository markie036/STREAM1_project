/*scroll to top functionality */
function scrollto(id) {
    $('html, body').animate(
        {
            scrollTop: $("#"+id).offset().top
    },
    'slow');
};

function backTop(headerPic) {
    $('html, body').animate(
        {
            scrollTop: $("#" + "topRight").offset().top
        },
        'slow');
};

/*show trails by country*/
function showCountryEng() {
    var eng = document.getElementById("ENG");
    if (eng.style.display === 'none') {
        eng.style.display = 'block';
    } else {
        eng.style.display = 'none';
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
}
/*NEW FUNCTION
function showCountryEng() {
    var eng = document.getElementById("ENG");
    if (eng.style.visibility === 'hidden') {
        eng.style.visibility = 'visible';
    } else {
        eng.style.visibility = 'hidden';
    }
}*/