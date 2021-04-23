// index.php //

// click event on clcok changes bg to day and knob to bathroom link from bedroom link //
$(document).ready(function () {
    $('#indexClock').click(function () {
        $('#indexBg').toggleClass('indexBgNight').toggleClass('indexBgDay');
        $('#indexKnobNight').toggleClass('d-none');
        $('#indexKnobDay').toggleClass('d-none');
    });
});

// bedroom.php //

$(document).ready(function () {
    //on load diary entry and face mask are hidden //
    $('#diary').hide();
    $('#bedroomMask').hide();
    $('#bedroomDiary').click(function () {
        //clikc on diary shows entry form //
        $('#diary').show();
        //when new entry is submited, form is hideden and face mask appears //
        $('#newEntry').click(function(){
            $('#diary').hide();
            //face mask is also a link to kitchen //
            $('#bedroomMask').show(alert());
        })
    });
});



//when form #diary, is submitted (#new Entry)- prevent default

//the trim the textarea (#diaryPage)

//send #diaryPage to ktichen.php

//populate #fridgeDump div

// kitchen.php //

$(document).ready(function () {
    $('#newEntry').click(function (e) {
        e.preventDefault();
        var entry = $.trim($('#diaryPage').val());
        console.log(entry);
        if (entry != '') {
            alert(entry);
            // $('#kitchenFridge').click(function (e) {
            //     console.log(e);
            //     $('#fridgeDump').load('bedroom.php #diaryPage');
            // });
            // $('#fridgeDump').append('<p>'+entry+'</p');
            // $("#fridgeDump").load("bedroom.php #diaryPage");
        };
    });
});

$(document).ready(function () {
    $('#kitchenFridge').click(function () {
        $('#fridgeDump').load('bedroom.php #diaryPage');
    });
});

// function warning() {
//     alert('be back soon');
// }
// setTimeout (warning, 3000);



// yard.php //
$(document).ready(function (){
    //on load knob out of bathroom is hidden //
    $('#bathroomKnob').hide();
    $('#bathroomMirror').click(function () {
        //something else should happen here //

        //clicking mirror allows the knob to apear which links to the yard
        $('#bathroomKnob').show();
        $('#bathroomKnob').click(function () {
            //once clicked to the yard an alert fires//
                alert('be back soon');
        })
    });
});

//bird appears after five seconds //

//picture appears //

//click picture to append body text //


