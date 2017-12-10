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