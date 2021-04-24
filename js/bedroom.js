//bedroom //
function showDiaryForm() {
    $('#diary').css('display', 'block');
}

function writeDiaryCookie() {
    diaryText = escape(document.diary.diaryPage.value) + ";";
    console.log(diaryText);
    document.cookie = "Dear Diary... " + diaryText;
    console.log(diaryText);
}

writeDiaryCookie();

//TODO look up onsubmit //
function diaryForm() {
    $('#diary').hide();
    $('#bedroomMask').css('display', 'block');
};

//TODO cookies //


//when form #diary, is submitted (#new Entry)- prevent default

//the trim the textarea (#diaryPage)

//send #diaryPage to ktichen.php

//populate #fridgeDump div

// kitchen.php //

// $('#newEntry').click(function (e) {
//     e.preventDefault();
//     var entry = $.trim($('#diaryPage').val());
//     console.log(entry);
//     if (entry != '') {
//         alert(entry);
//         // $('#kitchenFridge').click(function (e) {
//         //     console.log(e);
//         //     $('#fridgeDump').load('bedroom.php #diaryPage');
//         // });
//         // $('#fridgeDump').append('<p>'+entry+'</p');
//         // $("#fridgeDump").load("bedroom.php #diaryPage");
//     };
// });
