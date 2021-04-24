<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        Goodnight
    </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css" />
</head>

<body>
    <div class="container-fluid" id="bedroomBg">
        <div class="indexImgs" id="bedroomBag">
            <img src="../img/bedroom_bag.png" class="img-fluid">
        </div>
        <div class="indexImgs" id="bedroomDiary" onclick="showDiaryForm()">
            <img src="../img/bedroom_diary.png" class="img-fluid">
        </div>
        <div class="indexImgs" id="bedroomMask">
            <a href="kitchen.php">
                <img src="../img/bedroom_mask.png" class="img-fluid">
            </a>
        </div>
        <div class="indexImgs" id="bedroomRug">
            <img src="../img/bedroom_rug.png" class="img-fluid">
        </div>
        <div class="indexImgs" id="bedroomClock">
            <img src="../img/clock.png" class="img-fluid">
        </div>
        <!-- diary -->
        <form action="bedroom.php" id="diary" name="diary" onsubmit="handleDiary()">
            <label>Dear Diary...</label></br>
            <textarea id="diaryPage" name="diaryPage" rows="5" cols="40"></textarea></br>
            <input type="submit" value="goodnight" id="newEntrySubmit">
        </form>
        <div id="textDump">
            <p></p>
        </div>
        <ul>text
            <li>test</li>
        </ul>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/bedroom.js"></script>
</body>

</html>
