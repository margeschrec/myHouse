
//Diary Entry Cookie set and get //


// write cooie from diary entry form
function writeDiaryCookie() {
    console.log('diary page value' , document.diary.diaryPage.value);
    //diary text takes the value of the text area //
    diaryText = document.diary.diaryPage.value;
    //cookie named for the date in seconds the diary was subited //
    diaryName = Date.now();
    console.log('escape diary text' , diaryText);
    //cookie saved //
    document.cookie = diaryName + "= Dear Diary... " + diaryText;
    console.log('log document.cookie', document.cookie);
}

//on submit save cookie, show facemask
function handleDiary(e) {
    //prevent form submit //
    event.preventDefault(e);
    //writes and saves cookie from diary form //
    writeDiaryCookie();
    hideDiaryForm();
};

//get cookie by name

var getCookie = function(document.cookie) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};

var cookieVal = getCookie();

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

console.log(getCookie());



//picture appears //

//click picture to append body text //


