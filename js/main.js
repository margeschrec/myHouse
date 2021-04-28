//add time indicator to each page

// $(function () {
//     $("#time").load("time.html");

// });

//set variable for img src for time indicator

    var flowerImage = document.getElementById('#flowerImg');
    var flowerCycle = ["../img/time_01.png", "../img/time_02.png", "../img/time_03.png", "../img/time_04.png", "../img/time_05.png", "../img/time_06.png",];
    var flowerIndex = 0;

function cycleFlower() {
    flowerImage.setAttribute("src",flowerCycle[flowerIndex]);
    flowerIndex++;
    if (flowerIndex >= flowerCycle.length) {
        flowerIndex = 0;
    }
}

setInterval(cycleFlower,1000);

// setInterval(function(){
//     var flowerImage = document.getElementById('#flowerImg')
//     var flowerCycle = ["../img/time_01.png", "../img/time_02.png", "../img/time_03.png", "../img/time_04.png", "../img/time_05.png", "../img/time_06.png",];
//     for (x = 0; x < flowerCycle.length; x++) {
//         currentTime = flowerCycle[x];
//         flowerImage = currentTime.src;
//     };
// }, 6000);

// setInterval(changeFlowerIndicator(), 20000);

// setInterval(function () {
//     // toggle img src for time check
//     flowerImage = "../img/time_02.png";
//     setTimeout(function () {
//         flowerImage.src = "../img/time_02.png";
//     }, 6000);
// }, 6000);



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

writeDiaryEntryToFridge();



