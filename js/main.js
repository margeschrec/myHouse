$(document).ready(function () {
    $('#indexClock').click(function () {
        $('#indexBg').toggleClass('indexBgNight').toggleClass('indexBgDay');
        $('#indexKnob').toggleClass('d-none');
    });
});

$(document).ready(function () {
    $('#bedroomDiary').click(function (e) {
        console.log('hellooooo');
        $('#diaryEntry').toggleClass('d-none');
    });
});

$(document).ready(function () {
    $('#newEntry').click(function (e) {
        e.preventDefault();
        var entry = $.trim($('#diaryPage').val());
        console.log(entry);
        if (entry != '') {
            alert(entry);
        };
    });
});

