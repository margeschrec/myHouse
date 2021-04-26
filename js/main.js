
//Diary Entry Cookie set and get //


// write cooie from diary entry form
function writeDiaryCookie() {
    console.log('diary page value', document.diary.diaryPage.value);
    //diary text takes the value of the text area //
    diaryText = document.diary.diaryPage.value;
    //cookie named for the date in seconds the diary was subited //
    diaryName = Date.now();
    console.log('diary name', diaryName);
    //cookie saved //
    document.cookie = diaryName + "= Dear Diary... " + diaryText;
    console.log('log document.cookie', document.cookie);
    // function sendDiaryCookie() {
    //     if (diaryName != "") {
    //         alert('this is working' + diaryName);
    //     };
    // };
}

//splits the diary entries into a two object array for each cookie
const diaryEntries = document.cookie.split(';').map(cookie => cookie.split('='));

// get the value from each cookie without the name //
function getDiaryValues() {
    //set single entry to the second element of the array//
    diaryValues = diaryEntries[1][1];
    //loopthrough each array in the cookie object //
    for (var x = 1; x < diaryEntries.length; x++) {
        //save new array called
        diaryValues = diaryEntries[x][1];
    };
    return diaryValues;
};

function appendEntries() {
    let p = document.createElement('p');
    singleEntry = diaryValues[i];
    for (var i = 1; i < diaryValues.length; i++) {
        p.append(singleEntry);
    };
}


getDiaryValues();
appendEntries();

console.log(diaryValues);

//append each cookie to a div //
// function DiaryText() {
//     diaryEntry = diaryEntries[1];






console.log(diaryEntries);
// console.log(diaryEntries);
//loops through cookies
// function readDiaryEntry() {
//     //split the cookies
//     diaryEntries = document.cookie.split(';');
//         //as long as cookies is more than 0
//     for (var x = 0; x < diaryEntries.length; x++) {
//         //save each item in array as a single entry
//         var singleEntry = diaryEntries[x];
//         //console log entry
//         console.log(singleEntry);
//     };
// }


// readDiaryEntry();
// //append to a div




// var value = "; " + document.cookie;
// var parts = value.split('; ' + )


//on submit save cookie, show facemask
function handleDiary(e) {
    //prevent form submit //
    event.preventDefault(e);
    //writes and saves cookie from diary form //
    writeDiaryCookie();
    hideDiaryForm();
};

//get cookie by name

// var getCookie = function(document.cookie) {
//     var value = "; " + document.cookie;
//     var parts = value.split("; " + name + "=");
//     if (parts.length == 2) return parts.pop().split(";").shift();
// };

// var cookieVal = getCookie();

// function getCookie() {
//     var name = diaryName + "=";
//     var body = document.cookie.split(';');
//     console.log('name and body of getcookie function', name, body)
//     for(var x=0;x < body.length; x++) {
//         var c = body[x];
//         while (c.charAt(0)=='') c = c.substring(1,c.length);
//         if (c.length(name) == 0) return c.substring(body.length,c.length);
//     }
//     return null;
// }


// getCookie(cookieVal);

// console.log(getCookie());



//picture appears //

//click picture to append body text //


