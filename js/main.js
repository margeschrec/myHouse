
//Diary Entry Cookie set and get //

// write cooie from diary entry form
function writeDiaryCookie() {
    console.log('diary page value', document.diary.diaryPage.value);
    //diary text takes the value of the text area //
    diaryText = document.diary.diaryPage.value;
    //cookie named for the date in seconds when the diary was subited //
    diaryName = Date.now();
    console.log('diary name', diaryName);
    //cookie saved //
    document.cookie = diaryName + "= Dear Diary... " + diaryText;
    console.log('log document.cookie', document.cookie);
}

//splits the diary entries into a two element array for each cookie
const diaryEntries = document.cookie.split(';').map(cookie => cookie.split('='));

// get the value from each cookie without the name
function writeDiaryEntryToFridge() {
    //set single entry to the second element of the array
    diaryValues = diaryEntries[1][1];
    //loopthrough each array in the cookie object
    for (var x = 1; x < diaryEntries.length; x++) {
        //save new array of onlt the cookie text called diary values,
        diaryValues = diaryEntries[x][1];
        console.log(diaryValues);
        //create a variable to target entries div
        var entries = document.getElementById('diaryPages');
        //set variable to create new element
        var newp = document.createElement("p");
        //set the inner html to diaryValues
        newp.innerHTML = diaryValues;
        //append entries to DOM
        entries.appendChild(newp);
    };
};

//on submit save cookie, show facemask
function handleDiary(e) {
    //prevent form submit
    event.preventDefault(e);
    //writes and saves cookie from diary form
    writeDiaryCookie();
    //once form submits, hide diary form
    hideDiaryForm();
};

writeDiaryEntryToFridge();



