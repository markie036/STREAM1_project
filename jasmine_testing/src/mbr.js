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

/*show trails by country */
function showCountryEng() {
    var eng = document.getElementById("ENG");
    if (eng.style.visibility === 'hidden') {
        eng.style.visibility = 'visible';
    } else {
        eng.style.visibility = 'hidden';
    }
}
function showCountrySco() {
    var sco = document.getElementById("SCO");
    if (sco.style.visibility === 'hidden') {
        sco.style.visibility = 'visible';
    } else {
        sco.style.visibility = 'hidden';
    }
}
function showCountryWal() {
    var wal = document.getElementById("WAL");
    if (wal.style.visibility === 'hidden') {
        wal.style.visibility = 'visible';
    } else {
        wal.style.visibility = 'hidden';
    }
}