//bedroom //
function showDiaryForm() {
    $('#diary').css('display', 'block');
}

//
function writeDiaryCookie() {
    console.log('diary page value' , document.diary.diaryPage.value);
    diaryText = escape(document.diary.diaryPage.value) + ";";
    console.log('escape diary text' , diaryText);
    document.cookie = "Dear Diary... " + diaryText;
    console.log('log document.cookie', document.cookie);
}

//after diary is clicked //
function hideDiaryForm() {
    //hide diary form //
    $('#diary').hide();
    //show bedroom mask //
    $('#bedroomMask').css('display', 'block');
}

//on submit save cookie, show facemask
function handleDiary() {
    writeDiaryCookie();
    hideDiaryForm();
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
