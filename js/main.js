// Time Indicator for each page

function cycleFlower() {
    console.log('calling cycleFlower ');
    // set FlowerImage to id of image in time html file
    var flowerImage = document.getElementById('flowerImg');
    //set all flower images to an array
    var flowerArray = ["../img/time_01.png", "../img/time_02.png", "../img/time_03.png", "../img/time_04.png", "../img/time_05.png", "../img/time_06.png"];
    // set the index to start at zero
    var flowerIndex = 0;
    //set timed function
    setInterval(function () {
        console.log('index ', flowerIndex);
        console.log("flowerImg ", flowerImage);
        //set image in document src as an elelment in the flower array
        flowerImage.setAttribute("src", flowerArray[flowerIndex]);
        //flower index increments by one
        flowerIndex++;
        //if the index gets to be as long as the mength of the img array
        if (flowerIndex >= flowerArray.length) {
            //set the array index back the zero
            flowerIndex = 0;
        }
        //change image every ten seconds
    }, 10000)
}

//Diary Entry Cookie set and get

// write cooie from diary entry form
function writeDiaryCookie() {
    console.log('diary page value', document.diary.diaryPage.value);
    //diary text takes the value of the text area
    diaryText = document.diary.diaryPage.value;
    //cookie named for the date in seconds when the diary was subited
    diaryName = Date.now();
    console.log('diary name', diaryName);
    //cookie saved //
    document.cookie = diaryName + "= Dear Diary... " + diaryText;
    console.log('log document.cookie', document.cookie);
}

//splits the diary entries into a two element array for each cookie
var diaryEntries = document.cookie.split(';').map(cookie => cookie.split('='));

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
}

//on submit save cookie, show facemask
function handleDiary(e) {
    //prevent form submit
    event.preventDefault(e);
    //writes and saves cookie from diary form
    writeDiaryCookie();
    //once form submits, hide diary form
    hideDiaryForm();
}

$(document).ready(cycleFlower(), writeDiaryEntryToFridge() );
